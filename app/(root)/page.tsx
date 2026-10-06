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
          Business Intelligence
        </span>
      </h1>

      <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
        We help businesses understand competitors, markets, supply chains,
        and emerging risks — turning complex data into clear, actionable
        intelligence for better decisions.
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
          Thank you! Our intelligence team will contact you shortly.
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
          GeoCore monitors the business environment around your company,
          including competitors, markets, supply chains, regulations,
          and geopolitical developments that could affect your decisions.
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
            We learn how your company operates, your markets, competitors,
            suppliers, and the factors that matter most to your business.
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
            We monitor relevant changes across competitors, markets,
            industries, supply chains, regulations, and geopolitical
            developments.
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
            We evaluate what changed, why it matters to your company,
            and the potential business impact, relevance, and level of risk.
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
            Your team receives clear, actionable intelligence early enough
            to make informed business decisions.
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
          It&apos;s to understand what changes mean for your business,
          your competitors, and your market before they become costly problems.
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
          Competitor Expansion
        </h2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">

          <div>
            <p className="text-xs text-slate-500">
              Company
            </p>

            <p className="mt-1 text-sm text-white">
              Competitor A
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Intelligence Type
            </p>

            <p className="mt-1 text-sm text-white">
              Competitive Intelligence
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

        </div>

        <div className="mt-6 border-t border-indigo-800/30 pt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-400">
            GeoCore Assessment
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            A major competitor is expanding operations in a key market,
            increasing its capacity and potential market presence. This
            development may affect competitive positioning and market share.
            GeoCore is monitoring the expansion and related developments
            to identify potential business impact.
          </p>
        </div>

      </div>
    </div>
  </section>

</>
  );
}

export default Page;