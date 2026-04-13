import TakeEveryWhere from "@/app/components/clientComponents/homePage/TakeEveryWhere";
import SectionHeader from "@/components/reusable/SectionHeader";
import AfilliateLinks from "./AfilliateLinks";
import SimpleSteps from "./SimpleSteps";
import WhyCartForGood from "./WhyCartForGood";

const HowItWorks = () => {
  return (
    <div>
      <SectionHeader
        title="How CartForGood Works."
        description="Discover top brands, shop through trusted store links, and help fund real charity — at no extra cost to you."
      />

      <SimpleSteps />
      <AfilliateLinks />
      <WhyCartForGood />
      <TakeEveryWhere />
    </div>
  );
};

export default HowItWorks;
