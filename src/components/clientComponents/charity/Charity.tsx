import TakeEveryWhere from "@/app/components/clientComponents/homePage/TakeEveryWhere";
import SectionHeader from "@/components/reusable/SectionHeader";
import SimpleCalender from "./SimpleCalender";

const Charity = () => {
  return (
    <div>
      <SectionHeader
        title="Charity Calendar"
        description="Every confirmed donation is posted here publicly. No vague estimates — real numbers, real receipts."
      />

      <SimpleCalender />
      <TakeEveryWhere />
    </div>
  );
};

export default Charity;
