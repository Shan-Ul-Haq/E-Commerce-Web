"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      // successUrl="http://localhost:3000/stripe/success"
      successUrl="https://e-commerce-33j59d4k1-shan-ul-haqs-projects.vercel.app/stripe/success"
      // cancelUrl="http://localhost:3000/stripe/error"
      cancelUrl="https://e-commerce-33j59d4k1-shan-ul-haqs-projects.vercel.app/stripe/error"
      
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}

