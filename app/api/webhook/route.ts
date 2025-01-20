import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { db } from "@/firebase"; // Adjust import as necessary
import { addDoc, collection } from "firebase/firestore";

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not defined in the environment variables");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-12-18.acacia",
    typescript: true,
});

export async function POST(req: Request) {
    const body = await req.text();
    const signature = (await headers()).get("Stripe-Signature") as string;
    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_CHECKOUT_WEBHOOK_SECRET!
        );
    } catch (error) {
        console.error("Webhook signature verification failed:", error);
        return new NextResponse("Invalid signature", { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object as Stripe.Checkout.Session;

        // Stripe Checkout metadata should include the Firebase UID
        const customerUID = session.metadata?.firebaseUID;
        console.log("Stripe Session Object:", session);
        if (!customerUID) {
            console.error("Missing firebaseUID in session metadata");
            return new NextResponse("Missing firebaseUID in session metadata", { status: 400 });
        }

        // Booking data to store in Firestore
        const bookingData = {
            session_id: session.id,
            customer_id: session.customer,
            customer_email: session.customer_email,
            amount_total: session.amount_total,
            payment_status: session.payment_status,
            currency: session.currency,
            created_at: new Date().toISOString(),
            payment_intent: session.payment_intent,
            payment_method_types: session.payment_method_types,
            customer_details: session.customer_details,
        };

        try {
            // Add booking to Firestore under `customers/{customerUID}/bookings`
            const bookingRef = collection(db, "customers", customerUID, "bookings");
            await addDoc(bookingRef, bookingData);
            console.log("Booking added successfully:", bookingData);
        } catch (error) {
            console.error("Error saving booking to Firestore:", error);
            return new NextResponse("Error saving booking to Firestore", { status: 500 });
        }
    }

    return new NextResponse("ok", { status: 200 });
}
