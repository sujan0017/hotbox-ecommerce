import Container from "../Container";

function StatsSection() {
  return (
    <section className="border border-b border-gray-800">
      <Container>
        <div className=" py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto    md:divide-y-0 divide-gray-800">
            {[
              { value: "2M+", label: "Active Users" },
              { value: "180+", label: "Countries" },
              { value: "50M+", label: "Posts Shared" },
              { value: "99.9%", label: "Uptime" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center py-8 px-4"
              >
                <span className="text-4xl font-bold text-red-500">
                  {s.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-500 mt-2">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default StatsSection;
