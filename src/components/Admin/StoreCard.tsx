/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import EditIcon from "@/components/icons/EditIcon";
import EditModal from "@/components/reusable/EditModal";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import DeleteModal from "../reusable/DeleteModal";

type StoreCard = {
  id: number;
  name: string;
  logo: string;
  url: string;
  category: string;
  disclosure: string;
  status: "Published" | "Unpublished";
};

const storeData: StoreCard[] = [
  {
    id: 1,
    name: "Amazon",
    logo: "/admin/amazon.png",
    url: "amazon.com/affiliate",
    category: "Order online. Pick up in store.",
    disclosure: "As an Amazon Associate I earn from qualifying purchases.",
    status: "Published",
  },
  {
    id: 2,
    name: "Walmart",
    logo: "/admin/walmart.png",
    url: "walmart.com/affiliate",
    category: "Grocery & General Retail",
    disclosure: "As an Walmart Associate I earn from qualifying purchases.",
    status: "Published",
  },
  {
    id: 3,
    name: "Target",
    logo: "/admin/target.png",
    url: "target.com/affiliate",
    category: "Home, Fashion & more",
    disclosure: "As an Target Associate I earn from qualifying purchases.",
    status: "Published",
  },
  {
    id: 4,
    name: "Home Depot",
    logo: "/admin/homedepot.png",
    url: "target.com/affiliate",
    category: "Home, Fashion & more",
    disclosure: "As an Home Depot Associate I earn from qualifying purchases.",
    status: "Published",
  },
  {
    id: 5,
    name: "Etsy",
    logo: "/admin/etsy.png",
    url: "ersy.com/affiliate",
    category: "Home, Fashion & more",
    disclosure: "As an Etsy Associate I earn from qualifying purchases.",
    status: "Published",
  },
  {
    id: 6,
    name: "Chewy",
    logo: "/admin/chewy.png",
    url: "ersy.com/affiliate",
    category: "Pet Supplies & Food",
    disclosure: "As an Chewy Associate I earn from qualifying purchases.",
    status: "Published",
  },
  {
    id: 7,
    name: "Wayfair",
    logo: "/admin/wayfair.png",
    url: "ersy.com/affiliate",
    category: "Furniture & Decor",
    disclosure: "As an Wayfair Associate I earn from qualifying purchases.",
    status: "Published",
  },
  {
    id: 8,
    name: "eBay",
    logo: "/admin/ebay.png",
    url: "ersy.com/affiliate",
    category: "New & Used Products",
    disclosure: "As an eBay Associate I earn from qualifying purchases.",
    status: "Published",
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
    placeholder: "https://amazon.com/affiliate",
    validation: { required: "Store link is required" },
  },
  {
    name: "category",
    label: "Category",
    type: "text" as const,
    placeholder: "e.g. Grocery & General Retail",
  },
  {
    name: "disclosureText",
    label: "Disclosure Text",
    type: "textarea" as const,
    placeholder: "As an Associate I earn from qualifying purchases.",
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

export default function StoreCard() {
  const [stores, setStores] = useState<StoreCard[]>(storeData);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState<StoreCard | null>(null);

  const handleUpdate = (data: any) => {
    if (!selectedStore) return;
    setStores((prev) =>
      prev.map((s) =>
        s.id === selectedStore.id
          ? {
              ...s,
              name: data.storeName,
              url: data.storeLink,
              category: data.category,
              disclosure: data.disclosureText,
              status: data.status,
            }
          : s,
      ),
    );
  };

  const handleDelete = () => {
    if (!selectedStore) return;
    setStores((prev) => prev.filter((s) => s.id !== selectedStore.id));
    setSelectedStore(null);
  };

  const defaultValues = selectedStore
    ? {
        storeName: selectedStore.name,
        storeLink: selectedStore.url,
        category: selectedStore.category,
        disclosureText: selectedStore.disclosure,
        status: selectedStore.status,
      }
    : {};

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {stores.map((store) => (
          <div
            key={store.id}
            className="bg-white rounded-[12px] border border-[#ECEFF3] p-6 flex flex-col gap-2 shadow-md transition-shadow duration-200"
          >
            {/* Header: logo + name + url */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl border border-[#ECEFF3] bg-white flex items-center justify-center shrink-0 overflow-hidden">
                <Image
                  src={store.logo}
                  alt={store.name}
                  width={32}
                  height={32}
                  className="object-contain w-8 h-8"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[#1A2A56] font-bold text-xl leading-[132%] tracking-[0.1px]">
                  {store.name}
                </p>
                <p className="text-[#8792A8] text-base leading-[132%] tracking-[0.08px] mt-2">
                  {store.url}
                </p>
              </div>
            </div>

            {/* Category */}
            <p className="text-[#395CBC] text-sm font-normal leading-[100%] tracking-[0.07px] my-4">
              {store.category}
            </p>

            {/* Disclosure */}
            <div className="bg-[#EBEFF8] rounded-[12px] border border-[EBEFF8] px-3 py-2 text-[#1A2A56] text-xs leading-[150%]">
              {store.disclosure}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 mt-5">
              <button
                onClick={() => {
                  setSelectedStore(store);
                  setEditOpen(true);
                }}
                className="text-[#385BBA] hover:text-[#1F3266] transition-colors cursor-pointer"
              >
                <EditIcon />
              </button>
              <button
                onClick={() => {
                  setSelectedStore(store);
                  setDeleteOpen(true);
                }}
                className="text-[#F04438] hover:text-red-700 transition-colors cursor-pointer"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      <EditModal
        open={editOpen}
        onOpenChange={setEditOpen}
        title="Edit Store"
        fields={storeFields}
        defaultValues={defaultValues}
        onSubmit={handleUpdate}
      />

      {/* Delete Confirm Modal */}
      <DeleteModal
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title={`Are You sure want to Remove ${selectedStore?.name}?`}
        description="Removing this entry will permanently delete it from your system."
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        onConfirm={handleDelete}
      />
    </div>
  );
}
