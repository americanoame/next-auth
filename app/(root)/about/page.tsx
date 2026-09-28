export default function About() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center text-center px-4 py-14 md:py-24 max-w-4xl mx-auto">
        <p className="text-2xl md:text-4xl text-gray-900 dark:text-white font-medium max-w-3xl leading-snug">
          Welcome to GeoCor.ai <br />
          <span className="italic font-light text-gray-600 dark:text-gray-300">
            GeoCore AI turns complex global data into clear, actionable{" "}
            <span className="not-italic font-normal text-gray-900 dark:text-white">
              geopolitical intelligence
            </span>
            , helping businesses manage their risks in real time.
          </span>
        </p>
      </section>
      <section className="max-w-2xl mx-auto my-12 px-6 py-6 text-left">
        <p className="text-base  font-bold uppercase text-gray-900 dark:text-white leading-relaxed mb-6">
          GeoCore.ai is architecting the underlying infrastructure for how
          modern global organizations anticipate, model, and neutralize
          geopolitical exposure before disruptions reach critical operations. We
          are building the definitive intelligence layer—ensuring geopolitical
          risk analytics are as fundamental to enterprise strategy as core
          financial accounting.
        </p>

        <p className="text-base md:text-[12px] font-semibold  leading-relaxed mb-6">
          Our mission is to equip every corporate division with continuous
          situational clarity, mapping how global volatility impacts supply
          chains, compliance, and capital allocation ahead of time. By shifting
          away from delayed media cycles toward predictive, dynamic intelligence
          streams, we empower leadership teams to transition from reactive
          crisis control to structural market resilience.
        </p>

        <p className="text-base md:text-lg font-thin text-gray-600 dark:text-gray-400 leading-relaxed">
          In an increasingly fragmented global economy, organizations with clear
          geopolitical foresight maintain a decisive advantage. GeoCore.ai
          merges advanced machine intelligence with expert analyst validation to
          deliver precise, actionable foresight—turning global uncertainty into
          a measurable strategic asset.
        </p>
      </section>
    </div>
  );
}
