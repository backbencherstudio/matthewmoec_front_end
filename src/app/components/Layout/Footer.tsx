import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="flex  p-[80px_80px_24px_80px] flex-col justify-end items-start bg-[#000]">
        <div className="flex h-[270px] pb-[48px] justify-center items-start gap-[299px] self-stretch">


          <div className="flex w-[433px] h-[222px] flex-col justify-center items-start gap-[24px]">

            <div className="flex justify-center gap-2">
                <img src="/logo.png" alt="Logo" className="w-[47.864px] h-[34.909px] " />
                <h1 className="text-[#FFF] text-[28px] font-semibold leading-[124%] tracking-[0.14px] font-inter">
                    CartForGood
                </h1>
            </div>

            <p className="text-[#A5A5AB] text-[16px] font-normal leading-[160%] tracking-[0.08px] font-inter">
A simple affiliate shopping platform that turns everyday purchases into charitable impact.
</p>

<h1 className="text-[#FFF] text-[24px] font-semibold leading-[130%] tracking-[0.12px] font-inter">
 Social Link
</h1>

<div className=" flex gap-4 justify-center">
    <div className="flex w-[40px] h-[40px] p-[12px] justify-center items-center flex-shrink-0 aspect-[1/1] 
  rounded-[33554400px] bg-[rgba(255,_255,_255,_0.10)]">
 <img src="/Instagram.png" alt="" />
</div>

    <div className="flex w-[40px] h-[40px] p-[12px] justify-center items-center flex-shrink-0 aspect-[1/1] 
  rounded-[33554400px] bg-[rgba(255,_255,_255,_0.10)]">
 <img src="/youtube.png" alt="" />
</div>

    <div className="flex w-[40px] h-[40px] p-[12px] justify-center items-center flex-shrink-0 aspect-[1/1] 
  rounded-[33554400px] bg-[rgba(255,_255,_255,_0.10)]">
 <img src="/linkedin.png" alt="" />
</div>

    <div className="flex w-[40px] h-[40px] p-[12px] justify-center items-center flex-shrink-0 aspect-[1/1] 
  rounded-[33554400px] bg-[rgba(255,_255,_255,_0.10)]">
 <img src="/facebook.png" alt="" />
</div>
</div>

          </div>

          <div></div>

          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
