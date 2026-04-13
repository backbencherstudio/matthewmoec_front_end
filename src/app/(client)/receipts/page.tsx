import TakeEveryWhere from "@/components/clientComponents/homePage/TakeEveryWhere";
import MonthlyReceipts from "@/components/clientComponents/receipts/MonthlyReceipts";
import StatsBar from "@/components/clientComponents/receipts/StatsBar";
import SectionHeader from "@/components/reusable/SectionHeader";

export default function page() {
  return (
    <div>
      <SectionHeader
        title="Monthly Receipts"
        description="Verified records of our monthly donations."
      />
      <StatsBar />
      <MonthlyReceipts />
      <TakeEveryWhere />
    </div>
  );
}
