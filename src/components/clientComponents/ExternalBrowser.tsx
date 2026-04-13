import Image from "next/image";

const ExternalBrowser = () => {
  return (
    <div>
      <section className="gap-9.25 sm:gap-6  ">
        <div className="w-full ">
          <div className="flex gap-4 justify-between outline">
            <div className="flex  p-4 items-center">
              <Image
                height={100}
                width={100}
                src="/logo.png"
                alt=""
                className="w-8 h-6.25"
              />
              <h1 className=" mr-6 bg-linear-to-b from-[#395CBC] to-[#1A2A56] bg-clip-text text-transparent font-inter text-[20px] font-medium leading-[124%] tracking-[0.1px]">
                CartForGood
              </h1>
              <Image
                height={100}
                width={100}
                src="/crossIcon.png"
                alt=""
                className="w-4 h-4"
              />
            </div>

            <div className=" w-full flex p-4 justify-between items-center  rounded-tr-[20px] rounded-bl-[20px] bg-[#EBEFF8]">
              <Image
                height={100}
                width={100}
                src="/plusIcon.png"
                alt=""
                className="w-4 h-4"
              />
              <Image
                height={100}
                width={100}
                src="/downArrowIcon.png"
                alt=""
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExternalBrowser;
