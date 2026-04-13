import Container from "@/components/clientComponents/homePage/Container";

export const WhatIsCartForGood = () => {
  return (
    <div className="bg-[#F0F3F9] px-4 py-10 md:py-16">
      <Container>
        <div className="bg-white rounded-[12px] px-6 py-10 md:p-10 shadow-sm">
          <h1 className="text-2xl md:text-4xl lg:text-[48px] font-semibold text-[#1A2A56] leading-[124%] tracking-[0.24px] text-center mb-4 md:mb-6">
            What is CartForGood
          </h1>
          <p className="text-sm md:text-base text-[#4A4C56] text-center leading-[160%] tracking-[0.08px]">
            CartForGood is a free shopping platform that allows you to support
            charitable causes while shopping from your favorite online stores.
            There are no extra costs and no need for manual donations — you
            simply shop as you normally would, and a portion of the commission
            is automatically contributed to charity.
          </p>
        </div>
      </Container>
    </div>
  );
};
