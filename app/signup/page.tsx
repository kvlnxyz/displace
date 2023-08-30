"use client";

import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const updateEmail = (email: string) => {
    setEmail(email);
  };

  const updatePassword = (password: string) => {
    setPassword(password);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const userObject = {
      email: email,
      password: password,
    };

    const response = await fetch("api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    });
  };

  return (
    <div className="flex justify-center">
      <div className="bg-gray-300 m-12">
        <div className="flex p-10">
          <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
            <div className="">Username</div>
            <input
              type="text"
              onChange={(e) => updateEmail(e.target.value)}
              className="border-black border focus:outline-none"
            />

            <div className="">Password</div>
            <input
              type="password"
              onChange={(e) => updatePassword(e.target.value)}
              className="border-black border focus:outline-none"
            />

            <button className="bg-white" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
