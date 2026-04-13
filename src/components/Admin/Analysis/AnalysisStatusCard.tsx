const ststusCardData = [
  {
    title: "Total Taps(All Time)",
    amount: "48,203",
  },
  {
    title: "This Month Taps",
    amount: "12,847",
  },
  {
    title: "Share Button Taps",
    amount: "2,341",
  },
  {
    title: "Visits",
    amount: "4,293",
  },
];
export default function AnalysisStatusCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {ststusCardData?.map((item, index) => (
        <div
          key={index}
          className="p-8 bg-[#F6F8FA] border border-[EBEFF8] rounded-[16px] shadow-md"
        >
          <p className="text-base text-[#777980] leading-[132%] tracking-[0.08px]">
            {item?.title}
          </p>
          <p className="mt-4 text-[#1A2A56] text-lg md:text-2xl font-bold leading-[116%] tracking-[0.12px]">
            {item?.amount}
          </p>
        </div>
      ))}
    </div>
  );
}
