// app/not-found.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-extrabold mb-10">Page Not Found</h1>
      <p className="text-lg">We face difficulties to find the page you're looking for.</p>
      <p className="text-lg my-10">You will be redirected to the home page shortly.</p>
      <Link href="/" className="underline text-green-700 text-2xl font-bold">Click here to go back to the Home page.</Link>
    </div>
  );
}
