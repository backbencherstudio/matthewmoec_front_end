import Image from "next/image";
import { ReceiptCard } from "./ReceiptCard";

interface ReceiptCard {
  id: number;
  month: string;
  charity: string;
  amount: number | null;
  confirmed: boolean;
  upcoming?: boolean;
}

const receiptCards: ReceiptCard[] = [
  {
    id: 1,
    month: "January 2025",
    charity: "Feeding America",
    amount: 800,
    confirmed: true,
  },
  {
    id: 2,
    month: "February 2025",
    charity: "Feeding America",
    amount: 800,
    confirmed: true,
  },
  {
    id: 3,
    month: "March 2025",
    charity: "Feeding America",
    amount: 800,
    confirmed: true,
  },
  {
    id: 4,
    month: "April 2025",
    charity: "Feeding America",
    amount: 800,
    confirmed: true,
  },
  {
    id: 5,
    month: "May 2025",
    charity: "Feeding America",
    amount: 800,
    confirmed: true,
  },
  {
    id: 6,
    month: "June 2025",
    charity: "Feeding America",
    amount: 800,
    confirmed: true,
  },
  {
    id: 7,
    month: "July 2025",
    charity: "Feeding America",
    amount: 800,
    confirmed: true,
  },
  {
    id: 8,
    month: "January 2026",
    charity: "Red Cross",
    amount: null,
    confirmed: false,
    upcoming: true,
  },
];

const SimpleCalender = () => {
  return (
    <div>
      <section className="flex flex-col gap-12 p-4 md:p-8 lg:p-20 self-stretch bg-[#FFF]">
        {/* Header */}
        <div>
          <h1 className="text-[#1A2A56] font-inter text-[24px] md:text-[32px] lg:text-[40px] font-semibold leading-[124%] tracking-[0.2px] mb-1.5 lg:mb-4">
            How It Works in 4 Simple Steps
          </h1>
          <p className="text-[#4A4C56] font-inter text-[18px] font-normal leading-[132%] tracking-[0.09px]">
            Shop from your favorite stores and help support charity — all with
            just a few taps.
          </p>
        </div>

        <div>
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {receiptCards.map((card) => (
              <ReceiptCard key={card.id} card={card} />
            ))}
          </div>

          {/* Important Notice */}
          <div className="mt-4 lg:mt-8 flex px-6 py-3 lg:py-4 items-center gap-3 rounded-[12px] border-[0.3px] border-[#E9E9EA] bg-[#DFE1E7]">
            <Image
              height={400}
              width={400}
              src="/tickIcon.png"
              alt=""
              className="w-6 h-6 shrink-0"
            />
            <p className="text-[#1A2A56] font-inter text-[16px] font-medium leading-[132%] tracking-[0.08px]">
              IMPORTANT: All donation updates are manually verified and updated
              through our admin system to ensure accuracy and trust.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimpleCalender;
