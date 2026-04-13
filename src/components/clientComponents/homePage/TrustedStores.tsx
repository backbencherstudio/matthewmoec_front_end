"use client";
import SearchBar from "@/components/ui/SearchBar";
import AmazonIcon from "../../icons/AmazonIcon";
import Container from "./Container";

const TrustedStores = () => {
  // Static data for stores
  const stores = [
    {
      id: 1,
      name: "Amazon",
      description:
        "No extra steps. No extra cost. Just tap a store and shop like you always do. We handle everything else.",
      icon: <AmazonIcon />, // Amazon Icon
      buttonText: "Shop Now",
    },
    {
      id: 2,
      name: "eBay",
      description:
        "Shop the latest items from top brands and enjoy exclusive deals.",
      icon: <AmazonIcon />, // Replace with eBay icon
      buttonText: "Shop Now",
    },
    {
      id: 3,
      name: "Walmart",
      description:
        "Find everything you need, from groceries to electronics, at Walmart.",
      icon: <AmazonIcon />, // Replace with Walmart icon
      buttonText: "Shop Now",
    },
    {
      id: 4,
      name: "Walmart",
      description:
        "Find everything you need, from groceries to electronics, at Walmart.",
      icon: <AmazonIcon />, // Replace with Walmart icon
      buttonText: "Shop Now",
    },
    {
      id: 5,
      name: "Walmart",
      description:
        "Find everything you need, from groceries to electronics, at Walmart.",
      icon: <AmazonIcon />, // Replace with Walmart icon
      buttonText: "Shop Now",
    },
    {
      id: 6,
      name: "Walmart",
      description:
        "Find everything you need, from groceries to electronics, at Walmart.",
      icon: <AmazonIcon />, // Replace with Walmart icon
      buttonText: "Shop Now",
    },
  ];

  return (
    <div className="bg-[#F0F3F9]">
      <div className="py-6 lg:py-20">
        <Container>
          <div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h1 className="text-[#1A2A56] text-[2rem] md:text-[2.5rem] lg:text-[3.35rem]">
                  Explore trusted stores.One Tap.
                </h1>
                <p>
                  Every button opens in your EXTERNAL browser — affiliate
                  tracking guaranteed.
                </p>
              </div>

              <div className="w-42.5">
                <SearchBar></SearchBar>
              </div>
            </div>

            {/* Card Section */}
            <section className="mt-4 lg:mt-10 mb-8 lg:mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {stores.map((store) => (
                <div
                  key={store.id}
                  className="flex flex-col justify-between mx-auto w-full rounded-lg py-10.75 px-6 bg-white"
                >
                  <div>
                    <div className="flex justify-center">
                      <div className="flex justify-center items-center rounded-[10px] bg-[#F0F3F9] w-11 h-11">
                        {store.icon}
                      </div>
                    </div>

                    <div>
                      <h1 className="text-[#1A2A56] text-center text-[1.5rem] font-semibold mt-3">
                        {store.name}
                      </h1>
                      <p className="mt-2 mb-6 text-[1rem]">
                        {store.description}
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <button className="w-full h-10 text-sm text-[#395CBC] hover:text-blue-700 border-2 rounded-full">
                      {store.buttonText} <span>&rarr;</span>
                    </button>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TrustedStores;

// "use client";
// import React, { useState } from "react";
// import Container from "../../ui/Container";
// import { InputGroup } from "@/components/ui/input-group";
// import SearchBar from "@/components/ui/SearchBar";
// import AmazonIcon from "../../icons/AmazonIcon";

// const TrustedStores = () => {
//   return (
//     <div className="bg-[#F0F3F9] ">
//       <div className="py-6 lg:py-20">
//         <Container>
//           <div>
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <div>
//                 <h1 className="text-[#1A2A56] text-[2rem] md:text-[2.5rem] lg:text-[3.35rem]">
//                   Explore trusted stores.One Tap.
//                 </h1>
//                 <p>
//                   Every button opens in your EXTERNAL browser — affiliate
//                   tracking guaranteed.
//                 </p>
//               </div>

//               <div className="w-42.5">
//                 <SearchBar></SearchBar>
//               </div>
//             </div>

//             {/* card section */}
//             <section className=" mt-4 lg:mt-10 mb-8 lg:mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               <div className="mx-auto w-full  rounded-lg py-10.75 px-6 bg-white ">
//                 <div className="flex justify-center">
//                   <div className="flex justify-center items-center rounded-[10px] bg-[#F0F3F9]  w-11 h-11  ">
//                     <AmazonIcon />
//                   </div>

//                 </div>

//                  <div>
//                     <h1 className="text-[#1A2A56] text-center text-[1.5rem] font-semibold mt-3 ">Amazon</h1>
//                     <p className=" mt-2 mb-6 text-[1rem] ">No extra steps. No extra cost. Just tap a store and shop like you always do. We handle everything else</p>
//                   </div>

//                   <div className="text-center ">
//         <button className="w-full h-10 text-sm text-[#395CBC] hover:text-blue-700 border-2  rounded-full ">
//           Shop Now <span>&rarr;</span>
//         </button>
//       </div>

//               </div>
//             </section>
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default TrustedStores;
