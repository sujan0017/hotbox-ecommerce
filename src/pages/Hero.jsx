import { useSelector } from "react-redux";

function Hero() {
  const { value } = useSelector((state) => state.counter);
  return (
    <div>
      hero
      <h1 className="text-center text-xl font-semibold">{value}</h1>
    </div>
  );
}

export default Hero;
