"use client";
import { useState } from "react";
import { doingLogin } from "@/actions/authActions";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  /**
   * State handlers
   */
  const [error, setError] = useState("");
  const router = useRouter();
  /**
   * Event Handler
   */
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const response = await doingLogin(formData);
      if (!!response.error) {
        setError(response.error);
      } else {
        router.push("/bookings");
      }
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      {error && <p className="text-5xl text-red-400">{error.message}</p>}
      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="btn-primary w-full mt-4">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
