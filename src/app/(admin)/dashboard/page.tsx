import DashboardStatusCard from "@/components/Admin/Dashboard/DashboardStatusCard";
import DashboardTable from "@/components/Admin/Dashboard/DashboardTable";

export default function page() {
  return (
    <div className="px-13 py-10 relative overflow-hidden h-screen">
      <div className="h-50 w-75 bg-linear-to-b from-[#A1BAFF] to-[#FFFF] rounded-full absolute bottom-0 -right-30 rotate-45 blur-[50px]" />
      <DashboardStatusCard />
      <div className="mt-8">
        <DashboardTable />
      </div>
    </div>
  );
}
