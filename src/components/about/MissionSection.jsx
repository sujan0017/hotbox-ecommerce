
function MissionSection() {
  return (
     <section className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-red-500 mb-4">
            Our Mission
          </p>
          <h2 className="text-4xl font-bold text-slate-800 leading-snug">
            Built to bring <br />
            people <span className="text-red-500 italic">closer</span>
          </h2>
        </div>
        <div>
          <div className="w-10 h-0.5 bg-red-500 mb-6" />
          <p className="text-gray-400 leading-relaxed mb-4">
            We started Hotbox because we were tired of social media that
            prioritized
            <span className="text-gray-300">
              {" "}
              engagement metrics over meaningful moments
            </span>
            . Every feature we build asks one question — does this make
            connection easier?
          </p>
          <p className="text-gray-400 leading-relaxed">
            From your first post to your thousandth conversation, Hotbox is
            designed to feel{" "}
            <span className="text-gray-300">personal, fast, and honest</span>.
            No algorithmic manipulation. No dark patterns. Just people and
            ideas.
          </p>
        </div>
      </section>
  )
}

export default MissionSection
