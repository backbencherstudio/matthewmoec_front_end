"use client";
import Pagination from "@/components/reusable/Pagination";
import { useGetAllReceiptsQuery } from "@/redux/features/client/receipt/receiptApi";
import { useState } from "react";
import { ReceiptCard } from "./ReceiptCard";

type ReceiptCard = {
  id: string;
  created_at: string;
  updated_at: string;
  status: string;
  month: string;
  organization_or_charity: string;
  receipt_amount: string;
  proof_of_receipt: string;
  proof_of_receipt_url: string;
};

const ITEMS_PER_PAGE = 8;

const SimpleCalender = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: receiptCards } = useGetAllReceiptsQuery({
    page: currentPage,
    limit: ITEMS_PER_PAGE,
  });
  const totalPages = receiptCards?.meta?.total_pages || 1;
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
            {receiptCards?.data?.map((card: ReceiptCard) => (
              <ReceiptCard key={card.id} card={card} />
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />

          {/* Important Notice */}
          {/* <div className="mt-4 lg:mt-8 flex px-6 py-3 lg:py-4 items-center gap-3 rounded-[12px] border-[0.3px] border-[#E9E9EA] bg-[#DFE1E7]">
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
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default SimpleCalender;
