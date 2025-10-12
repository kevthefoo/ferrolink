import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header currentPage="about" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-slate-900">
            About FerroLink Tools
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            For over 60 years, we&apos;ve been crafting premium hand tools that
            professionals and enthusiasts trust for their most demanding
            projects.
          </p>
        </section>

        {/* Company Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                Our Story
              </h2>
              <p className="mb-4 text-slate-600">
                Founded in 1999 by master toolmaker James Harrison, FerroLink
                Tools began as a small workshop focused on creating precision
                CNC tools for local machine shops. What started as a passion
                project quickly grew into a mission to provide the highest
                quality hand tools to professionals worldwide.
              </p>
              <p className="mb-4 text-slate-600">
                Our commitment to excellence and innovation has led us to expand
                our product line to include professional-grade hammers,
                heavy-duty axes, and commercial garden tools. Each product
                category maintains our founding principles: precision,
                durability, and reliability.
              </p>
              <p className="text-slate-600">
                Today, FerroLink Tools serves customers in over 50 countries,
                from small workshops to major industrial operations, all united
                by their need for tools that perform when it matters most.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-semibold text-slate-900">
                Company Milestones
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-4 w-4 rounded-full bg-orange-600"></div>
                  <div>
                    <div className="font-semibold text-slate-900">1999</div>
                    <div className="text-slate-600">
                      Company founded by David Hsu
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-4 w-4 rounded-full bg-orange-600"></div>
                  <div>
                    <div className="font-semibold text-slate-900">2005</div>
                    <div className="text-slate-600">
                      Expanded into hammer and striking tools
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-4 w-4 rounded-full bg-orange-600"></div>
                  <div>
                    <div className="font-semibold text-slate-900">2012</div>
                    <div className="text-slate-600">
                      Launched professional axe line
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-4 w-4 rounded-full bg-orange-600"></div>
                  <div>
                    <div className="font-semibold text-slate-900">2018</div>
                    <div className="text-slate-600">
                      Added garden tools division
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-4 w-4 rounded-full bg-orange-600"></div>
                  <div>
                    <div className="font-semibold text-slate-900">2025</div>
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
        <section className="mb-16 rounded-2xl bg-white p-12">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600">
                <span className="text-3xl text-white select-none">⚡</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-slate-900">
                Precision
              </h3>
              <p className="text-slate-600">
                Every tool is manufactured to exacting standards, ensuring
                consistent performance and reliability in professional
                applications.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-600">
                <span className="text-3xl text-white select-none">🛡️</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-slate-900">
                Durability
              </h3>
              <p className="text-slate-600">
                We use only the highest quality materials and time-tested
                manufacturing processes to create tools that last for decades.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-600">
                <span className="text-3xl text-white select-none">🎯</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-slate-900">
                Innovation
              </h3>
              <p className="text-slate-600">
                We continuously improve our designs and processes, incorporating
                the latest technology while respecting traditional
                craftsmanship.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 text-center shadow-lg">
              <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-slate-300"></div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">
                David Hsu
              </h3>
              <p className="mb-4 font-medium text-orange-600">Founder & CEO</p>
              <p className="text-sm text-slate-600">
                Master toolmaker with 30+ years experience in precision
                manufacturing and tool design.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-lg">
              <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-slate-300"></div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">
                Arthur Yu
              </h3>
              <p className="mb-4 font-medium text-orange-600">
                VP of Engineering
              </p>
              <p className="text-sm text-slate-600">
                Mechanical engineer specializing in tool design and
                manufacturing process optimization.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-lg">
              <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-slate-300"></div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">
                Jenny Hsu
              </h3>
              <p className="mb-4 font-medium text-orange-600">
                Head of Quality
              </p>
              <p className="text-sm text-slate-600">
                Quality control expert ensuring every tool meets our rigorous
                standards before shipment.
              </p>
            </div>
          </div>
        </section>

        {/* Manufacturing Section */}
        <section className="mb-16 rounded-2xl bg-slate-900 p-12 text-white">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                State-of-the-Art Manufacturing
              </h2>
              <p className="mb-6 text-slate-300">
                Our 150,000 square foot facility houses the latest in precision
                manufacturing equipment, including advanced CNC machines, heat
                treatment facilities, and quality control laboratories.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-orange-600"></div>
                  <span className="text-slate-300">
                    ISO 9001:2015 Certified Quality Management
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-orange-600"></div>
                  <span className="text-slate-300">
                    Advanced Metallurgy Laboratory
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-orange-600"></div>
                  <span className="text-slate-300">
                    Automated Quality Testing Systems
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-orange-600"></div>
                  <span className="text-slate-300">
                    Environmental Sustainability Programs
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-slate-800 p-8">
              <h3 className="mb-6 text-xl font-semibold">
                Manufacturing Stats
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-orange-600">
                    500K+
                  </div>
                  <div className="text-sm text-slate-300">
                    Tools Manufactured Annually
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">
                    99.8%
                  </div>
                  <div className="text-sm text-slate-300">
                    Quality Pass Rate
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">48hr</div>
                  <div className="text-sm text-slate-300">
                    Average Production Time
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-slate-300">
                    Quality Monitoring
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="text-center">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Certifications & Standards
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600">
                <span className="font-bold text-white">ISO</span>
              </div>
              <h3 className="font-semibold text-slate-900">ISO 9001:2015</h3>
              <p className="text-sm text-slate-600">Quality Management</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-green-600">
                <span className="font-bold text-white">CE</span>
              </div>
              <h3 className="font-semibold text-slate-900">CE Marking</h3>
              <p className="text-sm text-slate-600">European Conformity</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-red-600">
                <span className="font-bold text-white">ANSI</span>
              </div>
              <h3 className="font-semibold text-slate-900">ANSI Standards</h3>
              <p className="text-sm text-slate-600">
                American National Standards
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-orange-600">
                <span className="font-bold text-white">RoHS</span>
              </div>
              <h3 className="font-semibold text-slate-900">RoHS Compliant</h3>
              <p className="text-sm text-slate-600">Environmental Standards</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
