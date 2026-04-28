
function ValueSection() {
  return (
     <section className="bg-red-300 border-t border-red-500 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-slate-800 mb-2">
            What We Stand For
          </p>
          <h2 className="text-3xl font-bold text-slate-800 mb-12">
            Our core values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Authenticity",
                desc: "Real connections come from real people. No bots, no fake engagement — just genuine human interaction.",
              },
              {
                title: "Privacy First",
                desc: "Your data belongs to you. We never sell your information and give you full control over what you share.",
              },
              {
                title: "Inclusivity",
                desc: "Hotbox is for everyone. We celebrate diversity, creativity, and open expression without exception.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-red-500 border border-red-800 rounded-xl p-6"
              >
                <h3 className="text-white font-semibold text-lg mb-3">
                  {v.title}
                </h3>
                <p className="text-white text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ValueSection
