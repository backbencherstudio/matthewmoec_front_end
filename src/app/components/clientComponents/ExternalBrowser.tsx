import React from 'react';
import Container from '../ui/Container';

const ExternalBrowser = () => {
    return (
        <div>
            <section className='  gap-[37px] sm:gap-[24px]  '>
        

                <div className='w-full '>
                    <div className='flex gap-4 justify-between outline'>
                        <div className='flex  p-4 items-center'>
                            <img src="/logo.png" alt="" className='w-8 h-[25px]' />
                            <h1 className=" mr-6 bg-gradient-to-b from-[#395CBC] to-[#1A2A56] bg-clip-text text-transparent font-inter text-[20px] font-medium leading-[124%] tracking-[0.1px]">
                                CartForGood
                            </h1>
                            <img src="/crossIcon.png" alt="" className='w-4 h-4' />
                        </div>

                        <div  className=" w-full flex p-4 justify-between items-center  rounded-tr-[20px] rounded-bl-[20px] bg-[#EBEFF8]">
                            <img src="/plusIcon.png" alt="" className='w-4 h-4' />
                            <img src="/downArrowIcon.png" alt="" className='w-6 h-6' />

                        </div>
                    </div>

                    <div></div>
                </div>






                <div></div>

 
            </section>
        </div>
    );
};

export default ExternalBrowser;