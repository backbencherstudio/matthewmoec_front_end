export default function StoreBreakdown() {
  const storeBreakdown = [
    { name: "Amazon", clicks: 4213, percent: 33 },
    { name: "Walmart", clicks: 2847, percent: 22 },
    { name: "Target", clicks: 1932, percent: 15 },
    { name: "Home Depot", clicks: 1240, percent: 10 },
    { name: "Chewy", clicks: 980, percent: 8 },
    { name: "Wayfair", clicks: 712, percent: 6 },
    { name: "Etsy", clicks: 604, percent: 5 },
    { name: "eBay", clicks: 319, percent: 4 },
  ];
  return (
    <div className="bg-white rounded-2xl border border-[#ECEFF3] p-5 sm:p-6">
      <h2 className="text-[#1A2A56] text-lg md:text-xl font-semibold leading-[132%] tracking-[0.1px] mb-5">
        Store Breakdown
      </h2>
      <div className="flex flex-col divide-y divide-[#F0F2F7]">
        {storeBreakdown.map((store) => (
          <div
            key={store.name}
            className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
          >
            <div>
              <p className="text-[#1A2A56] text-base font-bold leading-[132%] tracking-[0.08px]">
                {store.name}
              </p>
              <p className="text-[#8792A8] text-sm mt-0.5">
                {store.clicks.toLocaleString()} clicks
              </p>
            </div>
            <span className="bg-[#1A2A56] text-white text-xs font-semibold px-3 py-1.5 rounded-full min-w-11.5 text-center">
              {store.percent}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
