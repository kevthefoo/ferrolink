import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Header currentPage="about" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">
                        About FerroLink Tools
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        For over 25 years, we&apos;ve been crafting premium hand
                        tools that professionals and enthusiasts trust for their
                        most demanding projects.
                    </p>
                </section>

                {/* Company Story */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Our Story
                            </h2>
                            <p className="text-slate-600 mb-4">
                                Founded in 1999 by master toolmaker James
                                Harrison, FerroLink Tools began as a small
                                workshop focused on creating precision CNC tools
                                for local machine shops. What started as a
                                passion project quickly grew into a mission to
                                provide the highest quality hand tools to
                                professionals worldwide.
                            </p>
                            <p className="text-slate-600 mb-4">
                                Our commitment to excellence and innovation has
                                led us to expand our product line to include
                                professional-grade hammers, heavy-duty axes, and
                                commercial garden tools. Each product category
                                maintains our founding principles: precision,
                                durability, and reliability.
                            </p>
                            <p className="text-slate-600">
                                Today, FerroLink Tools serves customers in over
                                50 countries, from small workshops to major
                                industrial operations, all united by their need
                                for tools that perform when it matters most.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                                Company Milestones
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-4 h-4 bg-orange-600 rounded-full mt-1 mr-4"></div>
                                    <div>
                                        <div className="font-semibold text-slate-900">
                                            1999
                                        </div>
                                        <div className="text-slate-600">
                                            Company founded by James Harrison
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-4 h-4 bg-orange-600 rounded-full mt-1 mr-4"></div>
                                    <div>
                                        <div className="font-semibold text-slate-900">
                                            2005
                                        </div>
                                        <div className="text-slate-600">
                                            Expanded into hammer and striking
                                            tools
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-4 h-4 bg-orange-600 rounded-full mt-1 mr-4"></div>
                                    <div>
                                        <div className="font-semibold text-slate-900">
                                            2012
                                        </div>
                                        <div className="text-slate-600">
                                            Launched professional axe line
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-4 h-4 bg-orange-600 rounded-full mt-1 mr-4"></div>
                                    <div>
                                        <div className="font-semibold text-slate-900">
                                            2018
                                        </div>
                                        <div className="text-slate-600">
                                            Added garden tools division
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-4 h-4 bg-orange-600 rounded-full mt-1 mr-4"></div>
                                    <div>
                                        <div className="font-semibold text-slate-900">
                                            2025
                                        </div>
                                        <div className="text-slate-600">
                                            Serving 50+ countries worldwide
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="mb-16 bg-white rounded-2xl p-12">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl text-white">⚡</span>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Precision
                            </h3>
                            <p className="text-slate-600">
                                Every tool is manufactured to exacting
                                standards, ensuring consistent performance and
                                reliability in professional applications.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl text-white">🛡️</span>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Durability
                            </h3>
                            <p className="text-slate-600">
                                We use only the highest quality materials and
                                time-tested manufacturing processes to create
                                tools that last for decades.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl text-white">🎯</span>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Innovation
                            </h3>
                            <p className="text-slate-600">
                                We continuously improve our designs and
                                processes, incorporating the latest technology
                                while respecting traditional craftsmanship.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                        Leadership Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                            <div className="w-24 h-24 bg-slate-300 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                James Harrison
                            </h3>
                            <p className="text-orange-600 font-medium mb-4">
                                Founder & CEO
                            </p>
                            <p className="text-slate-600 text-sm">
                                Master toolmaker with 30+ years experience in
                                precision manufacturing and tool design.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                            <div className="w-24 h-24 bg-slate-300 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                Sarah Chen
                            </h3>
                            <p className="text-orange-600 font-medium mb-4">
                                VP of Engineering
                            </p>
                            <p className="text-slate-600 text-sm">
                                Mechanical engineer specializing in tool design
                                and manufacturing process optimization.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                            <div className="w-24 h-24 bg-slate-300 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                Marcus Rodriguez
                            </h3>
                            <p className="text-orange-600 font-medium mb-4">
                                Head of Quality
                            </p>
                            <p className="text-slate-600 text-sm">
                                Quality control expert ensuring every tool meets
                                our rigorous standards before shipment.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Manufacturing Section */}
                <section className="mb-16 bg-slate-900 text-white rounded-2xl p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                State-of-the-Art Manufacturing
                            </h2>
                            <p className="text-slate-300 mb-6">
                                Our 150,000 square foot facility houses the
                                latest in precision manufacturing equipment,
                                including advanced CNC machines, heat treatment
                                facilities, and quality control laboratories.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                                    <span className="text-slate-300">
                                        ISO 9001:2015 Certified Quality
                                        Management
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                                    <span className="text-slate-300">
                                        Advanced Metallurgy Laboratory
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                                    <span className="text-slate-300">
                                        Automated Quality Testing Systems
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                                    <span className="text-slate-300">
                                        Environmental Sustainability Programs
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-800 p-8 rounded-xl">
                            <h3 className="text-xl font-semibold mb-6">
                                Manufacturing Stats
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <div className="text-3xl font-bold text-orange-600">
                                        500K+
                                    </div>
                                    <div className="text-slate-300 text-sm">
                                        Tools Manufactured Annually
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-orange-600">
                                        99.8%
                                    </div>
                                    <div className="text-slate-300 text-sm">
                                        Quality Pass Rate
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-orange-600">
                                        48hr
                                    </div>
                                    <div className="text-slate-300 text-sm">
                                        Average Production Time
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-orange-600">
                                        24/7
                                    </div>
                                    <div className="text-slate-300 text-sm">
                                        Quality Monitoring
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certifications */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">
                        Certifications & Standards
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                <span className="text-white font-bold">
                                    ISO
                                </span>
                            </div>
                            <h3 className="font-semibold text-slate-900">
                                ISO 9001:2015
                            </h3>
                            <p className="text-slate-600 text-sm">
                                Quality Management
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                <span className="text-white font-bold">CE</span>
                            </div>
                            <h3 className="font-semibold text-slate-900">
                                CE Marking
                            </h3>
                            <p className="text-slate-600 text-sm">
                                European Conformity
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="w-16 h-16 bg-red-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                <span className="text-white font-bold">
                                    ANSI
                                </span>
                            </div>
                            <h3 className="font-semibold text-slate-900">
                                ANSI Standards
                            </h3>
                            <p className="text-slate-600 text-sm">
                                American National Standards
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="w-16 h-16 bg-orange-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                <span className="text-white font-bold">
                                    RoHS
                                </span>
                            </div>
                            <h3 className="font-semibold text-slate-900">
                                RoHS Compliant
                            </h3>
                            <p className="text-slate-600 text-sm">
                                Environmental Standards
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
