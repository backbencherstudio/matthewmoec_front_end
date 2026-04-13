import Container from "@/components/ui/Container";
import React from "react";

const WhyCartForGood = () => {
  return (
    <div>
      <section className="flex flex-col items-center gap-12 py-4 md:py-8 lg:py-20 self-stretch bg-[#F0F3F9]">
        <div>
          <h1 className="text-[#1A2A56] text-center font-inter text-[24px] md:text-[32px] lg:text-[40px] font-semibold leading-[124%] tracking-[0.2px] mb-1.5 lg:mb-4">
            Why CartForGood
          </h1>
          <p className="text-[#4A4C56] text-center font-inter text-[18px] font-normal leading-[132%] tracking-[0.09px]">
            Shop as you normally do, and let CartForGood quietly turn your
            purchases into meaningful support for causes that matter.
          </p>
        </div>
<Container>
        <div className="flex py-[30px] px-4 lg:px-6 items-center gap-[14px] self-stretch rounded-[12px] border-l-[4px] border-l-[#395CBC] bg-[#ECEFF3]">
          <p className="text-[#1A2A56] font-inter text-[12px] md:text-[18px] font-medium leading-[150%]">
            We take that same commission and donate a portion to charity every
            month. You were going to shop anyway. The retailer was going to pay
            someone anyway. We just made sure that someone gives back. November
            - Feeding America. December - Toys for Tots. All other months -
            community and charity spin wheel.The stores pay us. You pay nothing
            extra. We share what they give us with charity every month. That is
            CartForGood. Simple. Honest. Free.
          </p>
        </div>
        </Container>
      </section>
    </div>
  );
};

export default WhyCartForGood;
