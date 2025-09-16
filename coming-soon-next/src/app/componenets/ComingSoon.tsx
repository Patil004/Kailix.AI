"use client";

import { useState } from "react";

export default function ComingSoon() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      await fetch("https://getform.io/f/bjjrydwb", {
        method: "POST",
        body: new FormData(form),
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Submission error", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 relative">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Kailix Launching Soon
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 text-center max-w-2xl">
        Your one-stop hub for AI tips, tricks, and prompts.
      </p>

      {/* Email Form */}
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-2xl text-black focus:outline-none bg-white"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-2xl font-semibold shadow-lg transition"
          >
            Notify Me
          </button>
        </form>
      ) : (
        <p className="text-green-400 font-medium mt-4">
          ✅ Thanks! You’ll be notified when we launch.
        </p>
      )}

      {/* About Teaser */}
      <div className="mt-12 text-center max-w-xl">
        <p className="text-gray-400">
          We help creators, learners, and professionals unlock the full power
          of AI tools without wasting hours guessing prompts.
        </p>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mt-10">
        <a
          href="https://www.instagram.com/kailix.ai?igsh=MThybjNzY2N5NmN5MQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
        >
          Instagram
        </a>
        {/* Add more links if needed */}
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-500 text-sm">
        © 2025 Kailix. All rights reserved.
      </footer>
    </div>
  );
}
