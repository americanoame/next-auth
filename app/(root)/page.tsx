"use client";

import { useState } from "react";
import { CheckCircle, TrendingUp } from "lucide-react";

function Page() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setSubmitted(true);
      setEmail("");
    }

    setLoading(false);
  }

  return (
    <>
      {/* HERO */}
      <section className="relative pt-5 pb-20 lg:pt-5 lg:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">

          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Next Generation Of <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-blue-300 to-indigo-200">
              Geopolitical Intelligence
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            We help global enterprises model geopolitical exposure, navigate
            systemic risk, and convert regional complexity into proactive
            decision-making.
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto relative flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter company email..."
              required
              className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />

            <button
              type="submit"
              disabled={loading}
              className="py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition shadow-lg shadow-indigo-600/30"
            >
              {loading ? "Sending..." : "Submit Interest"}
            </button>
          </form>

          {submitted && (
            <div className="mt-4 p-3 bg-emerald-950/90 border border-emerald-800 rounded-lg text-emerald-300 text-xs">
              Thank you! Our risk team will contact you shortly.
            </div>
          )}

          <div className="mt-6 flex items-center justify-center space-x-6 text-xs text-slate-400">
            <span className="flex items-center">
              <CheckCircle className="w-3.5 h-3.5 text-indigo-400 mr-1.5" />
              Direct Email Contact
            </span>

            <span className="flex items-center">
              <CheckCircle className="w-3.5 h-3.5 text-indigo-400 mr-1.5" />
              Secure Data Handling
            </span>
          </div>

        </div>
      </section>

      {/* HOW GEOCORE CREATES VALUE */}
      <section className="border-t border-slate-800/70 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
              How GeoCore Works
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
              Intelligence built around your business
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              GeoCore monitors geopolitical developments and connects them
              directly to the locations, operations, suppliers, and risks
              that matter to your company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-12">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="text-indigo-400 text-sm font-semibold">
                01
              </div>

              <h3 className="mt-4 text-white font-semibold">
                Understand
              </h3>

              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                We learn how your company operates, where you do business,
                and which assets and markets are critical to you.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="text-indigo-400 text-sm font-semibold">
                02
              </div>

              <h3 className="mt-4 text-white font-semibold">
                Monitor
              </h3>

              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Relevant geopolitical developments are continuously
                monitored against your business profile.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="text-indigo-400 text-sm font-semibold">
                03
              </div>

              <h3 className="mt-4 text-white font-semibold">
                Assess
              </h3>

              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Potential risks are evaluated for relevance, timing,
                severity, evidence, and confidence.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="text-indigo-400 text-sm font-semibold">
                04
              </div>

              <h3 className="mt-4 text-white font-semibold">
                Act
              </h3>

              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Your team receives actionable intelligence early enough
                to make informed decisions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* BUSINESS IMPACT */}
      <section className="border-t border-slate-800/70 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          <div className="text-center">
            <TrendingUp className="w-8 h-8 text-indigo-400 mx-auto" />

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
              Turn intelligence into business value
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-slate-400 leading-relaxed">
              The goal isn&apos;t simply to know what is happening.
              It&apos;s to give your company enough time to make better decisions
              before a geopolitical event becomes a costly disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7 text-center">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Potential Exposure
              </p>

              <p className="mt-3 text-3xl font-bold text-white">
                $500K
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Example business exposure
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7 text-center">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Early Warning
              </p>

              <p className="mt-3 text-3xl font-bold text-indigo-400">
                10 Days
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Example advance notice
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7 text-center">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Potential Impact Avoided
              </p>

              <p className="mt-3 text-3xl font-bold text-white">
                $350K
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Example outcome
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* EXAMPLE */}
      <section className="border-t border-slate-800/70 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          <div className="rounded-2xl border border-indigo-800/40 bg-indigo-950/20 p-8">

            <p className="text-xs font-semibold tracking-wide uppercase text-indigo-400">
              Example Intelligence
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              Potential Port Disruption
            </h2>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">

              <div>
                <p className="text-xs text-slate-500">
                  Location
                </p>

                <p className="mt-1 text-sm text-white">
                  Brazil
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Risk Level
                </p>

                <p className="mt-1 text-sm text-yellow-400">
                  Medium
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Time Horizon
                </p>

                <p className="mt-1 text-sm text-white">
                  7–14 Days
                </p>
              </div>

            </div>

            <div className="mt-6 border-t border-indigo-800/30 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-400">
                GeoCore Assessment
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Multiple developments indicate an increased possibility
                of disruption affecting a port connected to the company&apos;s
                supply chain. The company should evaluate alternative
                routing options before the situation develops further.
              </p>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}

export default Page;