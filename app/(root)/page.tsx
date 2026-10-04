import { CheckCircle } from "lucide-react";

function page() {
  return (
    <>
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-indigo-300 text-xs font-medium mb-6 backdrop-blur-sm">
            {/* <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> */}
            <span>Next Generation Geopolitical Intelligence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            The Geopolitical <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-300 to-indigo-200">
              Operating System
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            We help global enterprises model geopolitical exposure, navigate
            systemic risk, and convert regional complexity into proactive
            decision-making.
          </p>

          {/* Email Capture Form */}
          <form
            id="contact"
            className="max-w-md mx-auto relative flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                {/* <Mail className="w-5 h-5" /> */}
              </div>
              <input
                type="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter company email..."
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm transition shadow-inner"
              />
            </div>
            <button
              type="submit"
              className="py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition shadow-lg shadow-indigo-600/30 shrink-0 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Submit Interest</span>
              {/* <ArrowRight className="w-4 h-4" /> */}
            </button>
          </form>

          {/* {submitted && ( */}
          <div className="mt-4 p-3 bg-emerald-950/90 border border-emerald-800 rounded-lg text-emerald-300 text-xs flex items-center justify-center space-x-2 max-w-md mx-auto">
            {/* <CheckCircle className="w-4 h-4 text-emerald-400" /> */}
            <span>Thank you! Our risk team will contact you shortly.</span>
          </div>
          {/* )} */}

          <div className="mt-6 flex items-center justify-center space-x-6 text-xs text-slate-400">
            <span className="flex items-center">
              <CheckCircle className="w-3.5 h-3.5 text-indigo-400 mr-1.5" />{" "}
              Direct Email Contact
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-3.5 h-3.5 text-indigo-400 mr-1.5" />{" "}
              Enterprise Grade Encryption
            </span>
          </div>
        </div>

        {/* 3D Particle Canvas Section */}
        <div id="product" className="mt-8">
          {/* <GeopoliticalGlobeCanvas /> */}
        </div>
      </section>
    </>
  );
}

export default page;
