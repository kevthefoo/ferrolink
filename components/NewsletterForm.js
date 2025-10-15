"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage(
          "🎉 Successfully subscribed! Check your email for confirmation.",
        );
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            disabled={status === "loading"}
            className="flex-1 rounded-xl border-2 border-white/20 bg-white/10 px-6 py-4 text-white placeholder-gray-300 backdrop-blur-md transition-all duration-300 focus:border-orange-500 focus:bg-white/15 focus:ring-4 focus:ring-orange-500/30 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 font-bold whitespace-nowrap text-white shadow-2xl shadow-orange-600/30 transition-all duration-300 hover:scale-105 hover:shadow-orange-600/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {status === "loading" ? (
                <>
                  <svg
                    className="h-5 w-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  SUBSCRIBING...
                </>
              ) : (
                <>
                  SUBSCRIBE NOW
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </>
              )}
            </span>
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-700 to-red-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          </button>
        </div>
      </form>

      {/* Status Messages */}
      {status === "success" && (
        <div className="animate-fadeIn rounded-xl border-2 border-green-400/50 bg-green-500/20 px-6 py-4 text-center text-sm font-medium text-green-300 shadow-lg backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {message}
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="animate-fadeIn rounded-xl border-2 border-red-400/50 bg-red-500/20 px-6 py-4 text-center text-sm font-medium text-red-300 shadow-lg backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            {message}
          </div>
        </div>
      )}
    </div>
  );
}
