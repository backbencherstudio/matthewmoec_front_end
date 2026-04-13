import TakeEveryWhere from "@/app/components/clientComponents/homePage/TakeEveryWhere";
import OurMission from "@/components/clientComponents/about/OurMission";
import { WhatIsCartForGood } from "@/components/clientComponents/about/WhatIsCartForGood";
import WhatWeStandFor from "@/components/clientComponents/about/WhatWeStandFor";
import SectionHeader from "@/components/reusable/SectionHeader";

export default function page() {
  return (
    <div>
      <SectionHeader
        title="About CartForGood"
        description="Turn everyday shopping into meaningful impact."
      />
      <WhatIsCartForGood />
      <WhatWeStandFor />
      <OurMission />
      <TakeEveryWhere />
    </div>
  );
}
