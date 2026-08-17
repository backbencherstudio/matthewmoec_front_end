import TakeEveryWhere from "@/components/clientComponents/homePage/TakeEveryWhere";
import SectionHeader from "@/components/reusable/SectionHeader";
import SimpleCalender from "./SimpleCalender";

const Charity = () => {
  return (
    <div>
      <SectionHeader
        title="Causes Calendar"
        description="Every confirmed share is posted here publicly. No vague estimates — real numbers, real receipts."
      />

      <SimpleCalender />
      <TakeEveryWhere />
    </div>
  );
};

export default Charity;
