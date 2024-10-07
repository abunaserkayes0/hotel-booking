"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const SocialLogins = ({ mode }) => {
  /**
   * Local State
   */
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Hooks
   */
  const router = useRouter();
  const pathname = usePathname();

  /**
   * Handlers
   */
  const handelAuth = (providerName, providerCallbackUrl) => {
    signIn(providerName, { callbackUrl: providerCallbackUrl });
  };

  return (
    <>
      <div className="text-center text-xs text-gray-500">
        or{" "}
        {mode === "login" ? (
          <Link className="underline" href="/signup">
            SignUp
          </Link>
        ) : (
          <Link className="underline" href="/login">
            Login
          </Link>
        )}{" "}
        with
      </div>
      <div className="flex gap-4">
        <button
          onClick={() =>
            handelAuth("facebook", "https://localhost:3000/hotels")
          }
          className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
        >
          <Image src="/fb.png" alt="facebook" width={40} height={40} />
          <span>Facebook</span>
        </button>
        <button
          onClick={() =>
            handelAuth("google", "https://localhost:3000/bookings")
          }
          className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
        >
          <Image src="/google.png" alt="google" width={40} height={40} />
          <span>Google</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogins;
