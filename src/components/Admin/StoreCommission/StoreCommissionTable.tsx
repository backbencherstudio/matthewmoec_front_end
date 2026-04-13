import EditIcon from "@/components/icons/EditIcon";
import DeleteModal from "@/components/reusable/DeleteModal";
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
  commission: number;
  month: string;
};

const storeData: StoreItem[] = [
  {
    id: 1,
    name: "Amazon",
    logo: "/admin/amazon.png",
    commission: 4213,
    month: "January 2025",
  },
  {
    id: 2,
    name: "Walmart",
    logo: "/admin/walmart.png",
    commission: 3000,
    month: "February 2025",
  },
  {
    id: 3,
    name: "Chewy",
    logo: "/admin/chewy.png",
    commission: 1000,
    month: "March 2025",
  },
  {
    id: 4,
    name: "Target",
    logo: "/admin/target.png",
    commission: 4213,
    month: "April 2025",
  },
  {
    id: 5,
    name: "Wayfair",
    logo: "/admin/wayfair.png",
    commission: 3200,
    month: "May 2025",
  },
  {
    id: 6,
    name: "Etsy",
    logo: "/admin/etsy.png",
    commission: 2000,
    month: "June 2025",
  },
  {
    id: 7,
    name: "eBay",
    logo: "/admin/ebay.png",
    commission: 5000,
    month: "July 2025",
  },
  {
    id: 8,
    name: "BestBuy",
    logo: "/admin/ebay.png",
    commission: 2800,
    month: "August 2025",
  },
  {
    id: 9,
    name: "Nike",
    logo: "/admin/ebay.png",
    commission: 1900,
    month: "September 2025",
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
    name: "month",
    label: "month",
    type: "select" as const,
    options: [
      { label: "Published", value: "Published" },
      { label: "Unpublished", value: "Unpublished" },
    ],
  },
];

const ITEMS_PER_PAGE = 7;

export default function StoreCommissionTable() {
  const [isLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<StoreItem | null>(null);
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
        month: selectedItem.month,
      }
    : {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUpdate = (data: any) => {
    console.log("Updated Data:", data);

    // Example update logic
    if (selectedItem) {
    }
  };

  const handleDelete = () => {
    console.log("Deleted:", itemToDelete?.id);
    // your delete logic here
  };

  const tableHeader = ["Store Name", "Commission", "Month", "Actions"];

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

    // commission
    (item) => (
      <span className="text-lg leading-[150%] font-bold text-[#395CBC]">
        ${item?.commission?.toLocaleString() ?? "N/A"}
      </span>
    ),

    // month badge
    (item) => {
      return (
        <span className="text-lg leading-[150%] font-bold text-[#395CBC]">
          {item?.month ?? "N/A"}
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
          onClick={() => {
            setItemToDelete(item);
            setDeleteOpen(true);
          }}
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

      <DeleteModal
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title={`Are You sure want to Remove ${itemToDelete?.name}?`}
        description="Removing this entry will permanently delete it from your system."
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        onConfirm={handleDelete}
      />
    </div>
  );
}
