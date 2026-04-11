import React from 'react';

const TakeEveryWhere = () => {
    return (
        <div>
            <section className="flex p-20 justify-center items-center  bg-linear-to-b from-[#395CBC] to-[#1A2A56]">
                <div className='grid grid-cols-1 gap-10 items-center justify-center'>
                    <div className="flex flex-col justify-center items-center gap-4 ">

                        <h1 className="text-[#FFF] text-[48px] font-semibold leading-[124%] tracking-[0.24px] font-inter text-center">
                            Take CartForGood everywhere
                        </h1>

                        <p className="text-[#D2D2D5] text-[18px] font-normal leading-[132%] tracking-[0.09px] font-inter text-center">
                            Download the app for faster access and a smoother shopping experience.
                        </p>
                    </div>


                    <div className='  flex flex-col justify-center items-center gap-4 sm:flex-row'>
                <button className="flex h-[56px] px-[24px] py-[16px] justify-center items-center gap-[10px] rounded-[30px] 
  bg-gradient-to-b from-[#395CBC] to-[#1A2A56]">
                  Download For iOS
                </button>
                <button className="flex w-[254px] h-[56px] px-[24px] py-[16px] justify-center items-center gap-[10px] flex-shrink-0 
  rounded-[30px] border-[1px] border-[#FFF]">
                  Download For Android
                </button>

                    </div>
                </div>
    
</section>
        </div>
    );
};

export default TakeEveryWhere;