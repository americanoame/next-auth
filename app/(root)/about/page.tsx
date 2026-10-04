
export default function About() {
  return (
    <div className="text-slate-900">
      <section className="relative px-4 py-16 md:py-24 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-medium mb-7">
            About GeoCore.ai
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-7 text-slate-900">
            Turning Geopolitical Risk Into
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-500">
              Business Intelligence
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
            GeoCore.ai helps global enterprises understand how geopolitical
            events can impact their operations, markets, supply chains, and
            strategic decisions—before those risks become disruptions.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="border-t border-slate-400/40 pt-12 space-y-10">

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
              Geopolitics is now a business risk.
            </h2>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Political instability, trade restrictions, conflicts, sanctions,
              elections, regulatory changes, and disruptions to critical
              infrastructure can move markets and interrupt business
              operations in an instant. For global organizations, understanding
              these developments is no longer optional.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
              Intelligence built for decision-making.
            </h2>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              GeoCore.ai connects geopolitical developments with the businesses
              they can affect. Instead of forcing leadership teams to navigate
              an endless stream of information, we focus on what matters: what
              is happening, why it matters, and how it could affect your
              business.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
              From reaction to foresight.
            </h2>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Our goal is to give organizations a clearer view of emerging
              geopolitical exposure so they can prepare earlier, evaluate
              potential scenarios, and make more informed decisions. GeoCore.ai
              turns geopolitical uncertainty into intelligence that businesses
              can act on.
            </p>
          </div>

          <div className="pt-6">
            <p className="text-lg md:text-xl font-medium text-slate-800 leading-relaxed">
              The world changes quickly.
              <br />
              <span className="text-indigo-600">
                Businesses need to know what those changes mean for them.
              </span>
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

