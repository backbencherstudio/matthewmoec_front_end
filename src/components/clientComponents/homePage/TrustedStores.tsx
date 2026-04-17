"use client";
import ArrowIcon from "@/components/icons/ArrowIcon";
import { useDebounce } from "@/hooks/useDebounce";
import {
  useClickStoreMutation,
  useGetAllStoresQuery,
} from "@/redux/features/client/store/storeApi";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Container from "./Container";

type Store = {
  id: string;
  name: string;
  slug: string;
  link: string;
  sub_text_note: string;
  logo: string;
  logo_url: string;
};

const TrustedStores = () => {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);
  const {
    data: stores,
    isLoading,
    error,
  } = useGetAllStoresQuery({ search: debouncedSearch });

  const [clickStore] = useClickStoreMutation();

  if (isLoading) {
    return (
      <div className="bg-[#F0F3F9]">
        <div className="py-6 lg:py-20">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <div className="space-y-3">
                <div className="h-12 w-96 bg-[#E5E9F0] rounded animate-pulse" />
                <div className="h-5 w-80 bg-[#E5E9F0] rounded animate-pulse" />
              </div>
              <div className="w-80 h-12 bg-[#E5E9F0] rounded-full animate-pulse" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 animate-pulse">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-[#E5E9F0] rounded-xl" />
                  </div>
                  <div className="h-6 bg-[#E5E9F0] rounded mx-auto w-40 mb-3" />
                  <div className="h-4 bg-[#E5E9F0] rounded mx-auto w-52 mb-8" />
                  <div className="h-10 bg-[#E5E9F0] rounded-full" />
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#F0F3F9] py-20 text-center">
        <p className="text-red-500">
          Failed to load stores. Please try again later.
        </p>
      </div>
    );
  }

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

              <div>
                <div className="flex items-center border border-gray-300 rounded-full  w-full max-w-sm">
                  <div className="size-4 flex-1 shrink-0 mx-3">
                    <Search size={16} className="text-gray-500 " />
                  </div>
                  <input
                    type="text"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    className="bg-transparent focus:outline-none text-gray-500 placeholder-gray-500 h-10 w-full"
                    placeholder="Search Stores..."
                  />
                </div>
              </div>
            </div>

            {/* Card Section */}
            <section className="mt-4 lg:mt-10 mb-8 lg:mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {stores?.data?.map((store: Store) => (
                <div
                  key={store.id}
                  className="flex flex-col justify-between mx-auto w-full rounded-lg py-10.75 px-6 bg-white"
                >
                  <div>
                    <div className="flex justify-center">
                      <div className="flex justify-center items-center rounded-[10px] bg-[#F0F3F9] w-11 h-11">
                        <Image
                          height={100}
                          width={100}
                          src={store?.logo_url || "/client/amazon.png"}
                          alt="Logo"
                          className="h-6 w-auto md:h-7 lg:h-8"
                        />
                      </div>
                    </div>

                    <div>
                      <h1 className="text-[#1A2A56] text-center text-[1.5rem] font-semibold mt-3">
                        {store?.name}
                      </h1>
                      <p className="mt-2 mb-6 text-[1rem] text-center">
                        {store?.sub_text_note}
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <a
                      href={store?.link}
                      onClick={() => clickStore(store.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full px-4 py-2 flex items-center justify-center text-sm text-[#395CBC] hover:text-blue-700 rounded-full cursor-pointer border border-[#395CBC] hover:shadow-md"
                    >
                      <span>Shop Now</span>
                      <ArrowIcon className="ml-1 transition-transform duration-300 group-hover:-rotate-45" />
                    </a>
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
