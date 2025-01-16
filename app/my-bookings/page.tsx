'use client'

import React, { useEffect, useState } from "react";
import CustomNavbar from "@/components/CustomNavbar";
import CustomFooter from "@/components/CustomFooter";
import localFont from "next/font/local";
import { collection, getDocs, query } from "firebase/firestore";
import { auth, db } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

const futuraMedium = localFont({ src: "../../public/fonts/futura/futura-medium.ttf" });

interface Payment {
  id: string;
  serviceName: string;
  amount: number;
  date: string;
  status: string;
  items : Item[];
  charges : Charges
}

interface Charges {
    data : ChargesData[]
}

interface ChargesData{
    receipt_url : string
}

interface Item {
    description : string
    amount_total : number
}

const Page = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  const fetchUserPayments = async (user: any): Promise<Payment[]> => {
    try {
      const userPaymentsQuery = query(
        collection(db, `customers/${user.uid}/payments`)
      );
      const querySnapshot = await getDocs(userPaymentsQuery);

      // Filter documents where charges.data[0].status === "succeeded"
      const filteredPayments = querySnapshot.docs
        .map((doc) => {
          const data = doc.data();
          const status = data.charges?.data?.[0]?.status;
          if (status === "succeeded") {
            return {
              id: doc.id,
              ...data,
            } as Payment;
          }
          return null;
        })
        .filter((payment) => payment !== null); // Remove null values

      return filteredPayments as Payment[];
    } catch (error) {
      console.error("Error fetching payments:", error);
      return [];
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchUserPayments(currentUser).then((userPayments) => {
          setPayments(userPayments);
          setLoading(false);
        });
      } else {
        setUser(null);
        setPayments([]);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col px-3 md:px-10 justify-between min-h-screen">
      <CustomNavbar isHomePage={false} />
      <div className="flex flex-col items-center gap-3">
        <h1 className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}>
          My Bookings
        </h1>
        <div className="bg-gradient-to-r from-transparent via-[#2341FF] to-transparent h-1 w-1/4"></div>
      </div>
      <div className="flex flex-col items-center py-10 gap-5">
        {loading ? (
          <p>Loading...</p>
        ) : user && payments.length === 0 ? (
          <p>No bookings found</p>
        ) : (
          payments.map((payment) => (
            <div
              key={payment.id}
              className="w-full flex flex-col gap-3 items-center p-5 border rounded-2xl bg-[#0B1237]"
            >
            <img src={`https://barcodeapi.org/api/${payment.id}`} alt="" className="rounded-2xl"/>
              <p className={`${futuraMedium.className} text-white font-semibold text-3xl`}>€{payment.amount/100}</p>
              <ul className="text-white">
                <p className="text-center">Add Ons</p>
                {payment.items.map((item) => {
                    return(
                        <li className={`${futuraMedium.className} text-center`} key={item.description}>{item.description}</li>
                    )
                })}
              </ul>
              <a href={payment.charges.data[0].receipt_url} className="text-center text-white px-3 py-1 rounded-full bg-blue-600">Receipt</a>
            </div>
          ))
        )}
      </div>
      <CustomFooter />
    </div>
  );
};

export default Page;
