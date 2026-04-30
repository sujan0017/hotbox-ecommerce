import MissionSection from "../components/about/MissionSection";
import StatsSection from "../components/about/StatsSection";
import ValueSection from "../components/about/ValueSection";
import Hero from "../components/Hero";

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <span className="text-xs tracking-widest uppercase text-red-500 border border-red-500/30 px-4 py-1.5 rounded-full mt-20 -mb-10">
          About Hotbox
        </span>

        <Hero
          heading={"Where conversations"}
          spanHeading={"catch fire"}
          para={
            "Hotbox is more than a social platform — it's a space built for real people, real ideas, and real connection in a world full of noise.."
          }
          primaryBtnTitle={"Join Hotbox"}
          primaryBtnHref={"/"}
          secondaryBtnTitle={"Explore Feed"}
          secondaryBtnHref={"/"}
        />
      </div>
      <StatsSection />
      <MissionSection />
      <ValueSection />

      <Hero
        heading={"Ready to join the"}
        spanHeading={"conversation?"}
        para={
          "Thousands of people are sharing, connecting, and building communities on Hotbox right now."
        }
        primaryBtnTitle={"Create Free Account"}
        primaryBtnHref={"/auth/login"}
        secondaryBtnTitle={"Sign In"}
        secondaryBtnHref={"/auth/register"}
      />
    </>
    // </div>
  );
}
