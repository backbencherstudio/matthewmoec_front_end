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
            CartForGood is a free shopping app and website. Shop online at
            Amazon, Walmart, Target, Home Depot, and more through CartForGood.
            The stores pay us a small commission when you do. You pay nothing
            extra. The price you see is always the same price you pay. We share
            a portion of what they give us with charity every month.
          </p>
        </div>
      </Container>
    </div>
  );
};
