import React from "react";

const AfilliateLinks = () => {
  return (
    <div>
      <section className="flex flex-col items-center gap-12 p-4 md:p-8 lg:p-20 self-stretch bg-[#FFF]">
        <div>
          <h1 className="text-[#1A2A56] text-center font-inter text-[24px] md:text-[32px] lg:text-[40px] font-semibold leading-[124%] tracking-[0.2px] mb-1.5 lg:mb-4">
            How affiliate links work
          </h1>
          <p className="text-[#4A4C56] text-center font-inter text-[18px] font-normal leading-[132%] tracking-[0.09px]">
            Shop from your favorite stores and help support charity — all with
            just a few taps.
          </p>
        </div>

        <div className="flex py-[30px] px-4 lg:px-6 items-center gap-[14px] self-stretch rounded-[12px] border-l-[4px] border-l-[#395CBC] bg-[#ECEFF3]">
          <p className="text-[#1A2A56] font-inter text-[12px] md:text-[18px] font-medium leading-[150%]">
            When you shop online retailers like Amazon, Walmart, and Target pay
            a small commission to anyone who sends them a customer. It costs you
            nothing extra. The price you pay is exactly the same. The retailer
            funds it out of their marketing budget. Most people send these
            retailers billions of dollars in business every year and get nothing
            back. Bloggers, influencers, and big websites collect these
            commissions for themselves. CartForGood is different. We take that
            same commission and share a portion with charity every month. You
            were going to shop anyway. The retailer was going to pay someone
            anyway. We just made sure that someone gives back. July — Tunnels to
            Towers. November — Feeding America. December —Toys for Tots. All
            other months — community charity spin wheel. The stores pay us. You
            pay nothing extra. We share what they give us with charity every
            month. That is CartForGood. Simple. Honest. Free.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AfilliateLinks;
