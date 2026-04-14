/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import EditIcon from "@/components/icons/EditIcon";
import EditModal from "@/components/reusable/EditModal";
import {
  useDeleteStoreMutation,
  useGetAllStoresQuery,
  useUpdateStoreMutation,
} from "@/redux/features/admin/store/storeApi";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import DeleteModal from "../../reusable/DeleteModal";

type StoreCard = {
  id: string;
  name: string;
  logo_url: string;
  link: string;
  sub_text_note: string;
  how_it_works: string;
  status: "PUBLISHED" | "UNPUBLISHED";
};

const storeFields = [
  {
    name: "name",
    label: "Store Name",
    type: "text" as const,
    placeholder: "Amazon",
    validation: { required: "Store name is required" },
  },
  {
    name: "link",
    label: "Store Link",
    type: "url" as const,
    placeholder: "https://amazon.com/affiliate",
    validation: { required: "Store link is required" },
  },
  {
    name: "sub_text_note",
    label: "Sub Text Note",
    type: "text" as const,
    placeholder: "e.g. Fast delivery available worldwide",
  },
  {
    name: "how_it_works",
    label: "How It Works",
    type: "textarea" as const,
    placeholder: "Browse items, add to cart, and complete checkout online.",
  },
  {
    name: "status",
    label: "Status",
    type: "select" as const,
    options: [
      { label: "Published", value: "PUBLISHED" },
      { label: "Unpublished", value: "UNPUBLISHED" },
    ],
  },
];

export default function StoreCard() {
  const { data: storeData, isLoading, isError } = useGetAllStoresQuery("");
  const [updateStore] = useUpdateStoreMutation();
  const [deleteStore] = useDeleteStoreMutation();

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState<StoreCard | null>(null);

  const stores: StoreCard[] = storeData?.data ?? [];

  const handleUpdate = async (data: any) => {
    if (!selectedStore) return;
    try {
      await updateStore({ id: selectedStore.id, body: data }).unwrap();
      toast.success("Store updated successfully!");
      setEditOpen(false);
    } catch (error) {
      const errorMessage = (error as any)?.data?.message || "Update failed";
      toast.error(errorMessage);
    }
  };

  const handleDelete = async () => {
    if (!selectedStore) return;
    try {
      await deleteStore(selectedStore.id).unwrap();
      toast.success("Store deleted successfully!");
      setDeleteOpen(false);
      setSelectedStore(null);
    } catch (error) {
      const errorMessage = (error as any)?.data?.message || "Delete failed";
      toast.error(errorMessage);
    }
  };

  const defaultValues = selectedStore
    ? {
        name: selectedStore.name,
        link: selectedStore.link,
        sub_text_note: selectedStore.sub_text_note,
        how_it_works: selectedStore.how_it_works,
        status: selectedStore.status,
      }
    : {};

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-[12px] border border-[#ECEFF3] p-6 h-48 animate-pulse"
          >
            <div className="flex gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#ECEFF3]" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-[#ECEFF3] rounded w-3/4" />
                <div className="h-3 bg-[#ECEFF3] rounded w-1/2" />
              </div>
            </div>
            <div className="h-3 bg-[#ECEFF3] rounded w-1/3 mb-4" />
            <div className="h-12 bg-[#ECEFF3] rounded-[12px]" />
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-sm text-red-500">
        Failed to load stores. Please try again.
      </p>
    );
  }

  if (stores.length === 0) {
    return (
      <p className="text-sm text-[#8A94A6]">
        No stores found. Add your first store.
      </p>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {stores.map((store) => (
          <div
            key={store.id}
            className="bg-white rounded-[12px] border border-[#ECEFF3] p-6 flex flex-col gap-2 shadow-md transition-shadow duration-200"
          >
            {/* Header: logo + name + link */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl border border-[#ECEFF3] bg-white flex items-center justify-center shrink-0 overflow-hidden">
                <Image
                  src={store?.logo_url}
                  alt={store?.name}
                  width={32}
                  height={32}
                  className="object-contain w-8 h-8"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[#1A2A56] font-bold text-xl leading-[132%] tracking-[0.1px]">
                  {store.name}
                </p>
                <p className="text-[#8792A8] text-base leading-[132%] tracking-[0.08px] mt-2 truncate">
                  {store.link}
                </p>
              </div>
            </div>

            {/* Sub text note */}
            <p className="text-[#395CBC] text-sm font-normal leading-[100%] tracking-[0.07px] my-4">
              {store.sub_text_note}
            </p>

            {/* How it works */}
            <div className="bg-[#EBEFF8] rounded-[12px] border border-[#EBEFF8] px-3 py-2 text-[#1A2A56] text-xs leading-[150%]">
              {store.how_it_works}
            </div>

            {/* Status badge */}
            <div className="mt-2">
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  store.status === "PUBLISHED"
                    ? "bg-green-50 text-green-700"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {store.status === "PUBLISHED" ? "Published" : "Unpublished"}
              </span>
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
        title={`Are you sure you want to remove ${selectedStore?.name}?`}
        description="Removing this entry will permanently delete it from your system."
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        onConfirm={handleDelete}
      />
    </div>
  );
}
