/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import EditIcon from "@/components/icons/EditIcon";
import DeleteModal from "@/components/reusable/DeleteModal";
import Pagination from "@/components/reusable/Pagination";
import ReuseAbleTable from "@/components/reusable/reuseable-table";
import {
  useDeleteStoreMutation,
  useGetAllStoresQuery,
} from "@/redux/features/admin/store/storeApi";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { ReactNode, useMemo, useState } from "react";
import { toast } from "sonner";
import EditStoreModal from "../StoreManager/EditStoreModal";

type StoreItem = {
  id: string;
  name: string;
  logo_url: string;
  click_count: number;
  status: "PUBLISHED" | "UNPUBLISHED";
  link: string;
  sub_text_note: string;
  how_it_works: string;
};

const ITEMS_PER_PAGE = 8;

export default function DashboardTable() {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<StoreItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStore, setSelectedStore] = useState<StoreItem | null>(null);

  const { data, isLoading } = useGetAllStoresQuery({
    page: currentPage,
    limit: ITEMS_PER_PAGE,
  });
  const [deleteStore] = useDeleteStoreMutation();

  // Extract stores from backend response
  const stores: StoreItem[] = useMemo(() => {
    return (data?.data || []).map(
      (store: { sub_text_note: string; how_it_works: string }) => ({
        ...store,
        sub_text_note: store.sub_text_note || "",
        how_it_works: store.how_it_works || "",
      }),
    );
  }, [data]);

  const totalPages = data?.meta?.total_pages || 1;

  const handleDelete = async () => {
    if (!itemToDelete) return;
    try {
      const response = await deleteStore(itemToDelete.id).unwrap();
      if (response?.success) {
        toast.success("Store deleted successfully!");
        setDeleteOpen(false);
        setItemToDelete(null);
      }
    } catch (error) {
      const errorMessage = (error as any)?.data?.message || "Delete failed";
      toast.error(errorMessage);
    }
  };

  const tableHeader = ["Store", "Clicks", "Status", "Actions"];

  const tableRowDataRenderers: ((
    item: StoreItem,
    index: number,
  ) => ReactNode)[] = [
    // Store Name + Logo
    (item) => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 relative rounded-[10px] overflow-hidden border border-gray-100 bg-white shrink-0 flex items-center justify-center">
          <Image
            src={item.logo_url || "/logos/placeholder.png"}
            alt={item.name}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <span className="text-lg leading-[160%] text-[#000000] font-semibold">
          {item.name}
        </span>
      </div>
    ),

    // Clicks
    (item) => (
      <span className="text-lg leading-[150%] font-medium text-[#1A2A56]">
        {item.click_count?.toLocaleString() ?? "0"}
      </span>
    ),

    // Status
    (item) => {
      const isPublished = item.status === "PUBLISHED";
      return (
        <span
          className={`inline-flex justify-center items-center w-32 text-base leading-[132%] tracking-[0.08px] p-3 rounded-[12px] border ${
            isPublished
              ? "text-[#09332B] bg-[#E4F5EC] border-[#E9E9EA]"
              : "text-[#B0B8C9] bg-[#F6F8FA] border-[#ECEFF3]"
          }`}
        >
          {isPublished ? "Published" : "Unpublished"}
        </span>
      );
    },

    // Actions
    (item) => (
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            setSelectedStore(item);
            setEditOpen(true);
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
          allClientDataList={stores}
          isLoadings={isLoading}
          currentItems={stores}
          tableHeader={tableHeader}
          tableRowDataRenderers={tableRowDataRenderers}
          isBg={false}
        />
      </div>

      {/* Pagination - Use real meta data */}
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}

      {/* Edit Modal */}
      <EditStoreModal
        open={editOpen}
        onOpenChange={setEditOpen}
        store={selectedStore}
      />

      {/* Delete Modal */}
      <DeleteModal
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title={`Are you sure you want to remove ${itemToDelete?.name}?`}
        description="Removing this store will permanently delete it from your system."
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        onConfirm={handleDelete}
      />
    </div>
  );
}
