const stats = [
  { value: "$7,961.00", label: "Total Donated (All Time)" },
  { value: "6", label: "Charities Supported" },
  { value: "6", label: "Months Reported" },
  { value: "8", label: "Stores Contributing" },
];

const StatsBar = () => {
  return (
    <div className="bg-[#1A2A56]">
      <div className="py-6 px-20 grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="mx-auto">
            <h1 className="text-white text-xl md:text-[32px] font-semibold text-center">
              {stat.value}
            </h1>
            <p className="text-[#D2D2D5] text-lg mt-1 text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
