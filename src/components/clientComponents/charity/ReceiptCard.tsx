import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ReceiptCard {
  id: string;
  created_at: string;
  updated_at: string;
  status: string;
  month: string;
  organization_or_charity: string;
  receipt_amount: string;
  proof_of_receipt: string;
  proof_of_receipt_url: string;
}

export const ReceiptCard = ({ card }: { card: ReceiptCard }) => {
  return (
    <div className="relative flex flex-col items-center gap-4 flex-[1_0_0] py-10 px-6 pb-8 rounded-[24px] border border-[#E9E9EA] bg-white">
      {/* Confirmed Badge */}
      {card.status === "PUBLISHED" && (
        <div className="flex px-3 py-1 justify-center items-center gap-1 rounded-[4px_24px] bg-[#ECEFF3] w-fit absolute top-0 right-0">
          <h1 className="text-[#395CBC] text-center font-sans text-xs font-normal">
            Confirmed
          </h1>
          <Image
            height={400}
            width={400}
            src="/tickIcon.png"
            alt="confirmed"
            className="h-5 w-5"
          />
        </div>
      )}

      {/* Month & Charity */}
      <div className="w-full text-center">
        <h2 className="text-[#395CBC] font-inter text-[24px] font-semibold leading-[116%] tracking-[0.12px] mb-2">
          {card?.month}
        </h2>
        <p className="font-inter text-[#4A4C56] text-[18px] font-normal leading-[132%] tracking-[0.09px]">
          {card?.organization_or_charity}
        </p>
      </div>

      {/* Amount or Upcoming */}
      <div>
        {card.receipt_amount ? (
          <h2 className="font-inter text-[#1A2A56] text-[40px] font-semibold leading-[1.24] tracking-[0.2px] text-center">
            ${card.receipt_amount?.toLocaleString()}
          </h2>
        ) : (
          <h2 className="font-inter text-[#1A2A56] text-[40px] font-semibold leading-[1.24] tracking-[0.2px] text-center">
            Upcoming
          </h2>
        )}
      </div>

      {/* View Receipt Button */}
      {card?.receipt_amount && (
        <Link
          href={"#"}
          className="group flex w-full justify-center text-[#395CBC] border border-[#395CBC] items-center gap-2 py-2.5 rounded-full hover:bg-linear-to-b from-[#395CBC] to-[#1A2A56] transition-opacity cursor-pointer hover:text-white"
        >
          <div className="flex justify-center items-center gap-1 lg:gap-2">
            <span className="font-sans text-center text-sm font-medium leading-[154%]">
              View Receipt
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
          </div>
        </Link>
      )}
    </div>
  );
};
