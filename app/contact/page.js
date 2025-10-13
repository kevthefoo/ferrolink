"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

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
    <div className="min-h-screen bg-slate-50">
      <Header currentPage="contact" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-slate-900">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Ready to upgrade your toolkit? Our team is here to help you find the
            perfect tools for your specific needs and applications.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-8 text-black shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Send us a Message
            </h2>

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
                <div className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="font-medium text-green-800">
                    Message sent successfully! We will get back to you within 1
                    business day.
                  </span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
                <div className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="font-medium text-red-800">
                    Failed to send message. Please try again or contact us
                    directly.
                  </span>
                </div>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    First Name *
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-orange-600 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Last Name *
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-orange-600 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-orange-600 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  disabled={isSubmitting}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-orange-600 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Company Name
                </label>
                <input
                  name="company"
                  type="text"
                  disabled={isSubmitting}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-orange-600 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Product Interest *
                </label>
                <select
                  name="productInterest"
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-orange-600 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
                >
                  <option value="">Select Product Category</option>
                  <option value="hammers">Hammers</option>
                  <option value="axes">Axes</option>
                  <option value="gardening-tools">Gardening Tools</option>
                  <option value="tool-handles">Tool Handles</option>
                  <option value="other-tools">Other Tools</option>
                  <option value="custom-solution">Custom Solution</option>
                  <option value="bulk-order">Bulk Order</option>
                  <option value="general-inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  disabled={isSubmitting}
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-orange-600 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
                  placeholder="Tell us about your project requirements, quantity needs, or any specific questions you have about our tools..."
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  name="newsletter"
                  type="checkbox"
                  id="newsletter"
                  disabled={isSubmitting}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500 disabled:cursor-not-allowed"
                />
                <label
                  htmlFor="newsletter"
                  className="ml-3 text-sm text-slate-600"
                >
                  I would like to receive product updates and industry news from
                  FerroLink Tools
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer rounded-lg bg-orange-600 py-3 font-semibold text-white transition-colors hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
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
                    Sending Message...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Contact Information - keeping the existing content */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-orange-600">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-600">+886 47766093</p>
                    <p className="text-sm text-slate-500">
                      Monday - Friday, 8AM - 6PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-orange-600">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600">support@ferrolink.io</p>
                    <p className="text-sm text-slate-500">
                      We respond within 1 day
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-orange-600">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-slate-900">
                      Address
                    </h3>
                    <p className="text-slate-600">
                      No. 38, Sec. 4, Fu 3rd Rd., Fuxing Township, Changhua
                      County 506014, Taiwan <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Departments */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Department Contacts
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Sales & Quotes
                    </h4>
                    <p className="text-sm text-slate-600">
                      Product information and pricing
                    </p>
                  </div>
                  <span className="font-medium text-orange-600">Ext. 101</span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Technical Support
                    </h4>
                    <p className="text-sm text-slate-600">
                      Tool specifications and applications
                    </p>
                  </div>
                  <span className="font-medium text-orange-600">Ext. 102</span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Custom Solutions
                    </h4>
                    <p className="text-sm text-slate-600">
                      Special orders and modifications
                    </p>
                  </div>
                  <span className="font-medium text-orange-600">Ext. 103</span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Customer Service
                    </h4>
                    <p className="text-sm text-slate-600">
                      Orders, returns, and warranty
                    </p>
                  </div>
                  <span className="font-medium text-orange-600">Ext. 104</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-16">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-center text-2xl font-bold text-slate-900">
              Visit Our Facility
            </h2>
            <div className="flex h-96 items-center justify-center rounded-xl bg-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196107.04521537392!2d120.32786123197343!3d24.033327734950394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34694f514896288f%3A0x9ec50566023e74d0!2z6YeR5ZKM6IyC5bel5qWt6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1sen!2sau!4v1759752835462!5m2!1sen!2sau"
                allowFullScreen
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full rounded-xl border-0"
              ></iframe>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
