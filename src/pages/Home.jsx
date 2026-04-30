import RecentlyAdded from "../components/home/RecentlyAdded";
import HeroSection from "../components/home/HeroSection";
import TrendingProducts from "../components/home/TrendingProducts";

function Home() {
  return (
    <>
      <HeroSection />
      <RecentlyAdded />
      <TrendingProducts />
    </>
  );
}

export default Home;
