"use client";

import EditIcon from "@/components/icons/EditIcon";
import EditModal from "@/components/reusable/EditModal";
import Pagination from "@/components/reusable/Pagination";
import ReuseAbleTable from "@/components/reusable/reuseable-table";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { ReactNode, useState } from "react";

type StoreItem = {
  id: number;
  name: string;
  logo: string;
  clicks: number;
  status: "Published" | "Unpublished";
};

const storeData: StoreItem[] = [
  {
    id: 1,
    name: "Amazon",
    logo: "/admin/amazon.png",
    clicks: 4213,
    status: "Published",
  },
  {
    id: 2,
    name: "Walmart",
    logo: "/admin/walmart.png",
    clicks: 3000,
    status: "Unpublished",
  },
  {
    id: 3,
    name: "Chewy",
    logo: "/admin/chewy.png",
    clicks: 1000,
    status: "Published",
  },
  {
    id: 4,
    name: "Target",
    logo: "/admin/target.png",
    clicks: 4213,
    status: "Unpublished",
  },
  {
    id: 5,
    name: "Wayfair",
    logo: "/admin/wayfair.png",
    clicks: 3200,
    status: "Published",
  },
  {
    id: 6,
    name: "Etsy",
    logo: "/admin/etsy.png",
    clicks: 2000,
    status: "Unpublished",
  },
  {
    id: 7,
    name: "eBay",
    logo: "/admin/ebay.png",
    clicks: 5000,
    status: "Published",
  },
  {
    id: 8,
    name: "BestBuy",
    logo: "/admin/ebay.png",
    clicks: 2800,
    status: "Published",
  },
  {
    id: 9,
    name: "Nike",
    logo: "/admin/ebay.png",
    clicks: 1900,
    status: "Unpublished",
  },
];

const storeFields = [
  {
    name: "storeName",
    label: "Store Name",
    type: "text" as const,
    placeholder: "Amazon",
    validation: { required: "Store name is required" },
  },
  {
    name: "storeLink",
    label: "Store Link",
    type: "url" as const,
    placeholder: "https://target.com/ref?aid=123",
    validation: {
      required: "Store link is required",
    },
  },
  {
    name: "subTextNote",
    placeholder: "Use for holiday campaigns",
    label: "Sub text note",
    type: "text" as const,
  },
  {
    name: "disclosureText",
    placeholder:
      "This store participates in store programs and may earn commissions from purchases made through links on this site.",
    label: "Disclosure Text",
    type: "textarea" as const,
  },
  {
    name: "status",
    label: "Status",
    type: "select" as const,
    options: [
      { label: "Published", value: "Published" },
      { label: "Unpublished", value: "Unpublished" },
    ],
  },
];

const ITEMS_PER_PAGE = 7;

const DashboardTable = () => {
  const [isLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const currentItems = storeData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const defaultValues = selectedItem
    ? {
        storeName: selectedItem.name,
        storeLink: "",
        subTextNote: "",
        disclosureText: "",
        status: selectedItem.status,
      }
    : {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUpdate = (data: any) => {
    console.log("Updated Data:", data);

    // Example update logic
    if (selectedItem) {
    }
  };

  const tableHeader = ["Store", "Clicks", "Status", "Actions"];

  const tableRowDataRenderers: ((
    item: StoreItem,
    index: number,
  ) => ReactNode)[] = [
    // Store
    (item) => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 relative rounded-[10px] overflow-hidden border border-gray-100 bg-white shrink-0 flex items-center justify-center">
          <Image
            src={item?.logo ?? "/logos/placeholder.png"}
            alt={item?.name ?? "store"}
            width={40}
            height={40}
            className="object-contain w-10 h-10"
          />
        </div>
        <span className="text-lg leading-[160%] text-[#000000] font-semibold">
          {item?.name ?? "N/A"}
        </span>
      </div>
    ),

    // Clicks
    (item) => (
      <span className="text-lg leading-[150%] font-medium text-[#1A2A56]">
        {item?.clicks?.toLocaleString() ?? "N/A"}
      </span>
    ),

    // Status badge
    (item) => {
      return (
        <span className="inline-flex justify-center items-center w-30 text-base text-[#09332B] leading-[132%] tracking-[0.08px] p-3 bg-[#E4F5EC] border-[0.5px] border-[#E9E9EA] rounded-[12px]">
          {item?.status ?? "N/A"}
        </span>
      );
    },

    // Actions
    (item) => (
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            setSelectedItem(item);
            setOpen(true);
          }}
          className="text-[#385BBA] hover:text-[#1F3266] transition cursor-pointer"
        >
          <EditIcon />
        </button>
        <button
          onClick={() => console.log("Delete", item.id)}
          className="text-[#F04438] hover:text-red-700 transition cursor-pointer"
        >
          <Trash2 size={17} />
        </button>
      </div>
    ),
  ];

  return (
    <div>
      <div className="bg-white rounded-2xl border border-[#ECEFF3] overflow-hidden">
        <ReuseAbleTable
          allClientDataList={storeData}
          isLoadings={isLoading}
          currentItems={currentItems}
          tableHeader={tableHeader}
          tableRowDataRenderers={tableRowDataRenderers}
          isBg={false}
        />
      </div>

      {/* Pagination */}
      <Pagination
        totalPages={2}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      <EditModal
        open={open}
        onOpenChange={setOpen}
        title="Edit Store"
        fields={storeFields}
        defaultValues={defaultValues}
        onSubmit={handleUpdate}
      />
    </div>
  );
};

export default DashboardTable;
