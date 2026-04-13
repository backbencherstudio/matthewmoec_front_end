import DotIcon from "@/components/icons/DotIcon";
import LoveIcon from "@/components/icons/LoveIcon";
import Image from "next/image";

interface Store {
  img: string;
  name: string;
  amount: number;
}

interface Receipt {
  id: number;
  month: string;
  dateTransferred: string;
  receiptRef: string;
  verified: boolean;
  stores: Store[];
  charity: {
    name: string;
    amount: number;
  };
}

export const ReceiptCard = ({ receipt }: { receipt: Receipt }) => {
  const fmt = (n: number) =>
    n.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });
  const total = receipt.stores.reduce((sum, s) => sum + s.amount, 0);

  return (
    <div className="p-4 md:p-6 bg-white rounded-[16px]">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-2">
        <button className="bg-linear-to-b from-[#3250A4] to-[#1E3063] text-white text-base md:text-xl font-medium px-4 md:px-6 py-2 md:py-3 rounded-full whitespace-nowrap">
          {receipt.month}
        </button>
        <span className="text-sm md:text-lg text-[#4A4C56] flex-1 min-w-0 truncate">
          Date Transferred: {receipt.dateTransferred}
        </span>
        <div className="flex items-center gap-2 flex-wrap">
          {receipt.verified && (
            <button className="flex items-center gap-1 border border-[#2DD877] text-[#2DD833] text-sm md:text-base font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-[8px] whitespace-nowrap">
              <DotIcon />
              <span>Verified</span>
            </button>
          )}
          <button className="px-3 md:px-4 py-1.5 md:py-2 bg-[#ECEFF3] rounded-[8px] text-[#4A4C56] text-sm md:text-base font-medium whitespace-nowrap">
            Receipt: {receipt.receiptRef}
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-3 md:p-6 bg-[#ECEFF3] rounded-[16px] mt-4 md:mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-0">
          {/* Left: Commission by Store */}
          <div className="p-2 md:p-4">
            <p className="text-base md:text-lg font-medium text-[#000000] mb-3 flex items-center gap-1.5">
              <DotIcon className="text-[#3861B7]" />
              Commission by Store
            </p>
            <div className="space-y-2 bg-white p-4 md:p-5 rounded-[16px]">
              {receipt.stores.map((store) => (
                <div
                  key={store.name}
                  className="flex items-center justify-between py-1.5 border-b"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-9 h-9 md:w-10 md:h-10 relative rounded-[10px] overflow-hidden border border-gray-100 bg-white shrink-0 flex items-center justify-center">
                      <Image
                        src={store?.img ?? "/logos/placeholder.png"}
                        alt={store?.name ?? "store"}
                        width={40}
                        height={40}
                        className="object-contain w-9 h-9 md:w-10 md:h-10"
                      />
                    </div>
                    <span className="text-base md:text-lg text-black font-medium truncate">
                      {store.name}
                    </span>
                  </div>
                  <span className="text-lg md:text-xl font-semibold text-[#3861B7] shrink-0 ml-2">
                    {fmt(store.amount)}
                  </span>
                </div>
              ))}
              <div className="flex justify-between items-center mt-3 px-3 md:px-4 py-2 md:py-2.5 bg-[#ECEFF3] rounded-[8px]">
                <span className="text-base md:text-lg text-black font-medium leading-[150%]">
                  Total Generated
                </span>
                <span className="text-xl md:text-2xl font-semibold text-black leading-[150%]">
                  {fmt(total)}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Charity Recipients */}
          <div className="p-2 md:p-4">
            <p className="text-base md:text-lg font-medium text-[#000000] mb-3 flex items-center gap-1.5">
              <DotIcon className="text-[#3861B7]" />
              Charity Recipients
            </p>
            <div className="p-4 md:p-5 bg-white rounded-[16px]">
              <div className="flex items-center justify-between pt-2 border-b pb-4">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="rounded-[10px] bg-[#EBEFF8] p-2.5 md:p-3 flex items-center justify-center shrink-0">
                    <LoveIcon />
                  </div>
                  <span className="text-base md:text-lg text-black font-medium truncate">
                    {receipt.charity.name}
                  </span>
                </div>
                <span className="text-lg md:text-xl font-semibold text-[#3861B7] shrink-0 ml-2">
                  {fmt(receipt.charity.amount)}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <button className="w-full sm:w-auto px-5 md:px-6 py-2.5 md:py-3 border border-[#8792A8] rounded-full text-sm md:text-base text-[#1A2A56] leading-[150%] cursor-pointer text-center">
                  View Receipt Image
                </button>
                <button className="w-full sm:w-auto px-5 md:px-6 py-2.5 md:py-3 bg-linear-to-b from-[#3556AE] to-[#1F3368] rounded-full text-sm md:text-base text-white font-medium leading-[150%] cursor-pointer text-center">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
