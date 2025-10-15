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
    <>
      {/* Newsletter Subscription Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16">
        {/* Industrial Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="mb-6 inline-block rounded-full border border-orange-600/30 bg-orange-600/20 px-4 py-2 text-sm font-bold tracking-wider text-orange-400 uppercase">
              🔔 STAY UPDATED
            </span>
          </div>

          <h3 className="mb-4 text-4xl font-bold text-white">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>
          <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500"></div>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300">
            Get the latest updates on new tool releases, industry insights,
            exclusive promotions, and professional tips delivered directly to
            your inbox.
          </p>

          {/* Newsletter Form */}
          <form className="mx-auto mb-8 max-w-md" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={status === "loading"}
                className="flex-1 rounded-lg border border-gray-600 bg-gray-800/50 px-6 py-4 text-white placeholder-gray-400 backdrop-blur-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="group transform cursor-pointer rounded-lg bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 font-bold whitespace-nowrap text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-orange-700 hover:to-red-700 hover:shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  SUBSCRIBE NOW
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
                </span>
              </button>
            </div>
          </form>

          {/* Status Messages */}
          {status === "success" && (
            <div className="animate-fadeIn mb-4 rounded-xl border-2 border-green-400/50 bg-green-500/20 px-6 py-4 text-center text-sm font-medium text-green-300 shadow-lg backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
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
            <div className="animate-fadeIn mb-4 rounded-xl border-2 border-red-400/50 bg-red-500/20 px-6 py-4 text-center text-sm font-medium text-red-300 shadow-lg backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
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

          {/* Newsletter Benefits */}
          <div className="mb-8 flex justify-center">
            <div className="flex w-fit flex-col items-start gap-6 md:grid md:grid-cols-3">
              <div className="flex items-center justify-center text-gray-300">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-600">
                  <span className="text-sm font-bold text-white">🆕</span>
                </div>
                <span className="text-sm">New Product Releases</span>
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-600">
                  <span className="text-sm font-bold text-white">💰</span>
                </div>
                <span className="text-sm">Exclusive Promotions</span>
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-600">
                  <span className="text-sm font-bold text-white">💡</span>
                </div>
                <span className="text-sm">Professional Tips</span>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="text-center text-sm text-gray-400">
            <p className="mb-2">
              ✓ No spam, ever • ✓ Unsubscribe anytime • ✓ 25,000+ subscribers
            </p>
            <p className="text-xs">
              We respect your privacy and never share your information
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
