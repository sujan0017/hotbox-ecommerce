import heroImg from "../../assets/heroImg.png";
import { PrimaryButton, SecondaryButton } from "../Button";
import  Container  from "../Container";

const HeroSection = () => {
  return (
    <Container>
      <section className="flex items-center">
        <div className="w-1/2 flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Elevate Your Everyday Style</h1>
          <p className="">
            Discover trendy outfits, premium accessories, and timeless fashion
            pieces curated to make every moment stylish.
          </p>
          <div className="flex items-center gap-5">
            <PrimaryButton title={"Shop Trends"} href={"/product"} />
            <SecondaryButton title={"New Arrivals"} href={"/product"} />
          </div>
        </div>
        <div className="w-1/2">
          <img src={heroImg} alt="" className=" object-cover " />
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
