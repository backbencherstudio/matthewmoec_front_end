import DashboardStatusCard from "@/components/Admin/Dashboard/DashboardStatusCard";
import DashboardTable from "@/components/Admin/Dashboard/DashboardTable";

export default function page() {
  return (
    <div className="px-13 py-10">
      <DashboardStatusCard />
      <div className="mt-8">
        <DashboardTable />
      </div>
    </div>
  );
}
