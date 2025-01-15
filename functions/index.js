const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')(functions.config().stripe.secret); // Your Stripe Secret Key
admin.initializeApp();

exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = 'whsec_UY4DtWEAkdqaYBiB2aMXaswvJhHSAdA1'; // Replace with your Stripe webhook secret
  let event;

  try {
    // Verify the webhook signature
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
  } catch (err) {
    console.log('Webhook signature verification failed:', err);
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  // Handle the event when payment is successful
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object; // Session object contains payment info

    const customerId = session.customer;
    const bookingDetails = session.metadata; // Store relevant info here, such as booking info

    try {
      // Update the customer's document in Firestore with the booking details
      const customerRef = admin.firestore().collection('customers').doc(customerId);
      await customerRef.update({
        booking: {
          status: 'confirmed',
          sessionId: session.id,
          amount: session.amount_total,
          currency: session.currency,
          bookingDetails: bookingDetails, // Additional info, if any
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
        }
      });

      // Send a success response
      res.status(200).send({ received: true });
    } catch (error) {
      console.error('Error updating Firestore:', error);
      res.status(500).send('Internal Server Error');
    }
  } else {
    // Handle other Stripe events if needed
    res.status(200).send({ received: true });
  }
});
