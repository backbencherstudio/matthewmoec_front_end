import GivingBack from "./GivingBack";
import HeroSection from "./Hero";
import TakeEveryWhere from "./TakeEveryWhere";
import TrustedStores from "./TrustedStores";
import WhyPeopleUse from "./WhyPeopleUse";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrustedStores></TrustedStores>
      <GivingBack></GivingBack>
      <WhyPeopleUse></WhyPeopleUse>
      <TakeEveryWhere></TakeEveryWhere>
    </div>
  );
};

export default Home;
