const cardData = [
  {
    title: "Total Store Clicks",
    value: "$124,580",
    change: "+12.5% this month",
  },
  {
    title: "Monthly Donations",
    value: "$124,580",
    change: "Feeding America",
  },
  {
    title: "Active Stores",
    value: "8",
    change: "All enabled",
  },
  {
    title: "Visits",
    value: "4,293",
    change: "+12% this week",
  },
];
export default function DashboardStatusCard() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
        {cardData?.map((data, index) => (
          <div
            key={index}
            className="bg-[#F6F8FA] p-8 border border-[#E9E9EA] rounded-[16px] shadow"
          >
            <h3 className="text-[#777980] text-base leading-[132%] tracking-[0.08px]">
              {data.title}
            </h3>
            <p className="mt-4 text-[#1A2A56] text-lg md:text-2xl font-black leading-[116%] tracking-[0.12px]">
              {data.value}
            </p>
            <p className="text-[#116557] mt-4 text-sm leading-[100%] tracking-[0.07px]">
              {data.change}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
