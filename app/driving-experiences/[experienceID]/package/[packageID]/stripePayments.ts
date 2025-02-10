"use client";
import { FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";

export const getCheckoutUrl = async (
  app: FirebaseApp,
  priceIds: string[],
  bookingDetails: string,
  firstName: string,
  lastName: string,
  height: string,
  weight: string,
  age: string,
  head: string,
  waist: string,
  thigh: string,
  leg: string,
  shoulder: string,
  shoe: string,
): Promise<string> => {
  const auth = getAuth(app);
  const userId = auth.currentUser?.uid;
  if (!userId) throw new Error("User is not authenticated");

  const db = getFirestore(app);
  const checkoutSessionRef = collection(
    db,
    "customers",
    userId,
    "checkout_sessions"
  );

  // Map priceIds to Stripe's expected line item format
  const lineItems = priceIds.map((priceId) => ({
    price: priceId,
    quantity: 1, // Default quantity is 1; adjust if needed
  }));

  // Create a one-time checkout session with multiple line items
  const docRef = await addDoc(checkoutSessionRef, {
    line_items: lineItems,
    success_url: window.location.origin + "/success",
    cancel_url: window.location.origin + "/cancel",
    mode: "payment",
    metadata: {
      firebaseUID: auth.currentUser.uid,
      firstName: firstName,
      lastName: lastName,
      height: height,
      weight: weight,
      age: age,
      head: head,
      waist: waist,
      thigh: thigh,
      leg: leg,
      shoulder: shoulder,
      shoe: shoe,
      bookingDate: bookingDetails,
    },
  });

  console.log("THIS IS THE DOCREF" , docRef)

  return new Promise<string>((resolve, reject) => {
    const unsubscribe = onSnapshot(docRef, (snap) => {
      const { error, url } = snap.data() as {
        error?: { message: string };
        url?: string;
      };
      if (error) {
        unsubscribe();
        reject(new Error(`An error occurred: ${error.message}`));
      }
      if (url) {
        console.log("Stripe Checkout URL:", url);
        unsubscribe();
        resolve(url); // Return the checkout URL for redirection
      }
    });
  });
};
