import { PrimaryButton, SecondaryButton } from "./Button";

function Hero({
  heading = "",
  spanHeading = "",
  para = "",
  primaryBtnTitle = "",
  primaryBtnHref = "/",
  secondaryBtnTitle = "",
  secondaryBtnHref = "/",
}) {
  return (
    <section className="text-center px-6 py-28 ">
      <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-5 leading-tight">
        {heading} <br />
        <span className="text-red-500 italic">{spanHeading}</span>
      </h2>
      <p className="text-gray-400 max-w-md mx-auto mb-10 leading-relaxed">
        {para}
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <PrimaryButton title={primaryBtnTitle} href={primaryBtnHref} />
        <SecondaryButton title={secondaryBtnTitle} href={secondaryBtnHref} />
      </div>
    </section>
  );
}

export default Hero;
