import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Header currentPage="contact" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Ready to upgrade your toolkit? Our team is here to help
                        you find the perfect tools for your specific needs and
                        applications.
                    </p>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">
                            Send us a Message
                        </h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                                        placeholder="Smith"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                                    placeholder="(555) 123-4567"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                                    placeholder="Your Company"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Product Interest *
                                </label>
                                <select
                                    required
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                                >
                                    <option value="">
                                        Select Product Category
                                    </option>
                                    <option value="cnc-tools">CNC Tools</option>
                                    <option value="hammers">Hammers</option>
                                    <option value="axes">Axes</option>
                                    <option value="garden-tools">
                                        Garden Tools
                                    </option>
                                    <option value="custom-solution">
                                        Custom Solution
                                    </option>
                                    <option value="bulk-order">
                                        Bulk Order
                                    </option>
                                    <option value="general-inquiry">
                                        General Inquiry
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent resize-none"
                                    placeholder="Tell us about your project requirements, quantity needs, or any specific questions you have about our tools..."
                                ></textarea>
                            </div>

                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="newsletter"
                                    className="mt-1 h-4 w-4 text-orange-600 border-slate-300 rounded focus:ring-orange-500"
                                />
                                <label
                                    htmlFor="newsletter"
                                    className="ml-3 text-sm text-slate-600"
                                >
                                    I would like to receive product updates and
                                    industry news from FerroLink Tools
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Methods */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg
                                            className="w-6 h-6 text-white"
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
                                        <h3 className="font-semibold text-slate-900 mb-1">
                                            Phone
                                        </h3>
                                        <p className="text-slate-600">
                                            1-800-FERRO-LINK (1-800-337-7654)
                                        </p>
                                        <p className="text-slate-500 text-sm">
                                            Monday - Friday, 8AM - 6PM EST
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg
                                            className="w-6 h-6 text-white"
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
                                        <h3 className="font-semibold text-slate-900 mb-1">
                                            Email
                                        </h3>
                                        <p className="text-slate-600">
                                            sales@ferrolinktools.com
                                        </p>
                                        <p className="text-slate-500 text-sm">
                                            We respond within 4 hours
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg
                                            className="w-6 h-6 text-white"
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
                                        <h3 className="font-semibold text-slate-900 mb-1">
                                            Address
                                        </h3>
                                        <p className="text-slate-600">
                                            FerroLink Tools Manufacturing
                                            <br />
                                            2847 Industrial Parkway
                                            <br />
                                            Tool City, TC 12345
                                            <br />
                                            United States
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                Business Hours
                            </h2>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-slate-600">
                                        Monday - Friday
                                    </span>
                                    <span className="font-semibold text-slate-900">
                                        8:00 AM - 6:00 PM EST
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-600">
                                        Saturday
                                    </span>
                                    <span className="font-semibold text-slate-900">
                                        9:00 AM - 3:00 PM EST
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-600">
                                        Sunday
                                    </span>
                                    <span className="font-semibold text-slate-900">
                                        Closed
                                    </span>
                                </div>
                            </div>
                            <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                                <p className="text-sm text-orange-800">
                                    <strong>Emergency Support:</strong> For
                                    urgent technical support, call our 24/7
                                    emergency line at 1-800-URGENT-1
                                </p>
                            </div>
                        </div>

                        {/* Departments */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                Department Contacts
                            </h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                                    <div>
                                        <h4 className="font-semibold text-slate-900">
                                            Sales & Quotes
                                        </h4>
                                        <p className="text-sm text-slate-600">
                                            Product information and pricing
                                        </p>
                                    </div>
                                    <span className="text-orange-600 font-medium">
                                        Ext. 101
                                    </span>
                                </div>

                                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                                    <div>
                                        <h4 className="font-semibold text-slate-900">
                                            Technical Support
                                        </h4>
                                        <p className="text-sm text-slate-600">
                                            Tool specifications and applications
                                        </p>
                                    </div>
                                    <span className="text-orange-600 font-medium">
                                        Ext. 102
                                    </span>
                                </div>

                                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                                    <div>
                                        <h4 className="font-semibold text-slate-900">
                                            Custom Solutions
                                        </h4>
                                        <p className="text-sm text-slate-600">
                                            Special orders and modifications
                                        </p>
                                    </div>
                                    <span className="text-orange-600 font-medium">
                                        Ext. 103
                                    </span>
                                </div>

                                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                                    <div>
                                        <h4 className="font-semibold text-slate-900">
                                            Customer Service
                                        </h4>
                                        <p className="text-sm text-slate-600">
                                            Orders, returns, and warranty
                                        </p>
                                    </div>
                                    <span className="text-orange-600 font-medium">
                                        Ext. 104
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <section className="mt-16">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                            Visit Our Facility
                        </h2>
                        <div className="bg-slate-200 h-96 rounded-xl flex items-center justify-center">
                            <div className="text-center text-slate-600">
                                <svg
                                    className="w-16 h-16 mx-auto mb-4"
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
                                <p className="text-lg font-medium">
                                    Interactive Map
                                </p>
                                <p>
                                    2847 Industrial Parkway, Tool City, TC 12345
                                </p>
                                <p className="text-sm mt-2">
                                    Facility tours available by appointment
                                    <br />
                                    Call ahead to schedule your visit
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
