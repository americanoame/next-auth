"use client";

import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Clock,
  Globe2,
  TrendingUp,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm text-indigo-400">GeoCore Intelligence</p>

            <h1 className="mt-2 text-3xl font-semibold">
              Business Intelligence Dashboard
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Customized intelligence on your competitors, markets, operations,
              and emerging business risks.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Globe2 className="h-4 w-4 text-indigo-400" />
            Global Business Monitoring
          </div>
        </div>

        {/* Summary */}
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <p className="text-sm text-slate-400">Active Intelligence</p>

            <p className="mt-3 text-3xl font-semibold">3</p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <p className="text-sm text-slate-400">Early Warnings</p>

            <p className="mt-3 text-3xl font-semibold">7</p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <p className="text-sm text-slate-400">Potential Exposure</p>

            <p className="mt-3 text-3xl font-semibold">$500K</p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <p className="text-sm text-slate-400">Estimated Impact Avoided</p>

            <p className="mt-3 text-3xl font-semibold text-indigo-400">$350K</p>
          </div>
        </div>

        {/* Active Intelligence */}
        <section className="mt-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Active Intelligence</h2>

              <p className="mt-1 text-sm text-slate-400">
                Business developments and risks currently relevant to your
                company.
              </p>
            </div>
          </div>

          {/* Alert */}
          <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-gray-900 p-6">
            <div className="flex flex-col justify-between gap-5 md:flex-row">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-500/10">
                  <AlertTriangle className="h-5 w-5 text-yellow-400" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-semibold">Competitor Expansion</h3>

                    <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">
                      Medium Risk
                    </span>
                  </div>

                  <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                    A major competitor is expanding operations in a key market,
                    increasing its capacity and potential market presence. This
                    development could affect your competitive position and
                    market share.
                  </p>

                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    <div>
                      <p className="text-xs text-slate-500">
                        Intelligence Type
                      </p>
                      <p className="mt-1 text-sm">Competitive Intelligence</p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">Time Horizon</p>
                      <p className="mt-1 text-sm">30–90 days</p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">Confidence</p>
                      <p className="mt-1 text-sm">High</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-indigo-500 px-5 text-sm font-medium transition hover:bg-indigo-400">
                View Intelligence
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Assessment */}
            <div className="mt-6 rounded-xl border border-gray-800 bg-gray-950 p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-indigo-400">
                GeoCore Assessment
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                The competitor&apos;s expansion could increase pressure on your
                market position. GeoCore recommends monitoring pricing, hiring,
                capacity, customer acquisition, and additional expansion signals
                to determine the potential competitive impact.
              </p>

              <div className="mt-5 flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-indigo-400" />

                <p className="text-sm text-slate-400">
                  Last updated: October 5, 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Business Impact</h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-indigo-400" />

                <h3 className="font-medium">Business Impact</h3>
              </div>

              <p className="mt-5 text-4xl font-semibold">High</p>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                GeoCore identifies how a development could affect the
                company&apos;s operations, competitors, market position, supply
                chain, or revenue.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-indigo-400" />

                <h3 className="font-medium">Recommended Action</h3>
              </div>

              <p className="mt-5 text-4xl font-semibold text-indigo-400">
                Monitor
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                GeoCore provides a clear assessment of what changed, why it
                matters, and what the company should monitor or consider doing
                next.
              </p>
            </div>
          </div>
        </section>

        {/* Client Feedback */}
        <section className="mt-10 rounded-2xl border border-gray-800 bg-gray-900 p-6">
          <div>
            <h2 className="text-xl font-semibold">Report Outcome</h2>

            <p className="mt-2 text-sm text-slate-400">
              Tell GeoCore what happened after you received the intelligence.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <button className="rounded-xl border border-gray-700 bg-gray-950 p-5 text-left transition hover:border-indigo-400">
              <CheckCircle className="h-5 w-5 text-indigo-400" />

              <p className="mt-3 text-sm font-medium">We took action</p>

              <p className="mt-1 text-xs text-slate-500">
                We changed our plans based on this intelligence.
              </p>
            </button>

            <button className="rounded-xl border border-gray-700 bg-gray-950 p-5 text-left transition hover:border-indigo-400">
              <ArrowRight className="h-5 w-5 text-indigo-400" />

              <p className="mt-3 text-sm font-medium">Situation changed</p>

              <p className="mt-1 text-xs text-slate-500">
                The situation developed differently than expected.
              </p>
            </button>

            <button className="rounded-xl border border-gray-700 bg-gray-950 p-5 text-left transition hover:border-indigo-400">
              <TrendingUp className="h-5 w-5 text-indigo-400" />

              <p className="mt-3 text-sm font-medium">Report savings</p>

              <p className="mt-1 text-xs text-slate-500">
                Tell us the financial impact of the action taken.
              </p>
            </button>
          </div>
        </section>

        {/* Intelligence Impact History */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Intelligence Impact History</h2>

          <div className="mt-5 overflow-hidden rounded-2xl border border-gray-800">
            <div className="grid grid-cols-4 border-b border-gray-800 bg-gray-900 px-6 py-4 text-xs font-medium text-slate-400">
              <span>Date</span>
              <span>Intelligence</span>
              <span>Action</span>
              <span>Impact</span>
            </div>

            <div className="grid grid-cols-4 bg-gray-950 px-6 py-5 text-sm">
              <span>Oct 5</span>
              <span>Competitor expansion</span>
              <span>Market strategy review</span>
              <span className="text-indigo-400">$350K</span>
            </div>

            <div className="grid grid-cols-4 border-t border-gray-800 bg-gray-950 px-6 py-5 text-sm">
              <span>Sep 18</span>
              <span>Supplier risk</span>
              <span>Supplier adjustment</span>
              <span className="text-indigo-400">$120K</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
