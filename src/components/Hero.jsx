import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="my-6 flex justify-center items-center">
      <img src={assets.hero} alt="" className="w-[50%]" />
    </div>
  );
};
export default Hero;
