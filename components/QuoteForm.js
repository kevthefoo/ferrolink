"use client";

import React from "react";
import { useState } from "react";

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        e.target.reset(); // Clear the form
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg">
      <h4 className="mb-6 text-xl font-semibold text-slate-900">
        Request a Quote
      </h4>
      <form className="space-y-4 text-black" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-orange-600 focus:outline-none"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-orange-600 focus:outline-none"
          />
        </div>
        <input
          name="company"
          type="text"
          placeholder="Company Name"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-orange-600 focus:outline-none"
        />
        <select className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-orange-600 focus:outline-none">
          <option>Product Category</option>
          <option>CNC Tools</option>
          <option>Hammers</option>
          <option>Axes</option>
          <option>Garden Tools</option>
          <option>Custom Solution</option>
        </select>
        <textarea
          rows="4"
          placeholder="Tell us about your project or requirements..."
          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-orange-600 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full cursor-pointer rounded-lg bg-orange-600 py-3 font-semibold text-white transition-colors hover:bg-orange-700"
        >
          Send Quote Request
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
