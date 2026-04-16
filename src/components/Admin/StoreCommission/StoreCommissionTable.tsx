/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import EditIcon from "@/components/icons/EditIcon";
import DeleteModal from "@/components/reusable/DeleteModal";
import Pagination from "@/components/reusable/Pagination";
import ReuseAbleTable from "@/components/reusable/reuseable-table";
import { useGetAllStoresQuery } from "@/redux/features/admin/store/storeApi";
import {
  useDeleteStoreCommissionMutation,
  useGetStoreCommissionQuery,
} from "@/redux/features/admin/storeCommission/storeCommissionApi";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ReactNode, useState } from "react";
import { toast } from "sonner";
import EditStoreCommissionModal from "./EditStoreCommissionModal";

type StoreCommissionItem = {
  id: string;
  store_id: string;
  commission: number;
  date: string;
  store: {
    id: string;
    name: string;
    logo_url: string;
  };
};

const ITEMS_PER_PAGE = 7;

export default function StoreCommissionTable() {
  const searchParams = useSearchParams();
  const monthString = searchParams.get("month") || "January 2025";
  const [monthName, year] = monthString.split(" ");

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedCommission, setSelectedCommission] =
    useState<StoreCommissionItem | null>(null);
  const [itemToDelete, setItemToDelete] = useState<StoreCommissionItem | null>(
    null,
  );
  const [currentPage, setCurrentPage] = useState(1);

  const monthMap: Record<string, number> = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };
  const month = monthMap[monthName];
  const yearNumber = Number(year);

  const { data, isLoading } = useGetStoreCommissionQuery({
    page: currentPage,
    limit: ITEMS_PER_PAGE,
    month,
    year: yearNumber,
  });

  const items: StoreCommissionItem[] = data?.data ?? [];
  const totalPages = data?.meta?.total_pages ?? 1;

  const { data: storeData } = useGetAllStoresQuery({ page: 1, limit: 7 });
  const stores = storeData?.data ?? [];
  const [deleteStoreCommission, { isLoading: isDeleting }] =
    useDeleteStoreCommissionMutation();
  const handleEdit = (item: StoreCommissionItem) => {
    setSelectedCommission(item);
    setEditOpen(true);
  };

  const handleDelete = async () => {
    if (!itemToDelete) return;

    try {
      const response = await deleteStoreCommission(itemToDelete.id).unwrap();
      if (response?.success) {
        toast.success(
          response?.message || "Commission entry deleted successfully!",
        );
        setDeleteOpen(false);
        setItemToDelete(null);
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to delete commission");
    }
  };

  const tableHeader = ["Store Name", "Commission", "Date", "Actions"];

  const tableRowDataRenderers: ((
    item: StoreCommissionItem,
    index: number,
  ) => ReactNode)[] = [
    // Store Name + Logo
    (item) => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 relative rounded-[10px] overflow-hidden border border-gray-100 bg-white">
          <Image
            src={item?.store?.logo_url || "/logos/placeholder.png"}
            alt={item?.store?.name}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <span className="text-lg font-semibold">{item?.store?.name}</span>
      </div>
    ),

    // Commission
    (item) => (
      <span className="text-lg font-bold text-[#395CBC]">
        ${item?.commission?.toLocaleString() ?? "N/A"}
      </span>
    ),

    // Date
    (item) => (
      <span className="text-lg font-bold text-[#395CBC]">
        {item?.date
          ? new Date(item.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "N/A"}
      </span>
    ),

    // Actions
    (item) => (
      <div className="flex items-center gap-3">
        <button
          onClick={() => handleEdit(item)}
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
          allClientDataList={items}
          isLoadings={isLoading}
          currentItems={items}
          tableHeader={tableHeader}
          tableRowDataRenderers={tableRowDataRenderers}
          isBg={false}
        />
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      {/* Edit Modal */}
      <EditStoreCommissionModal
        open={editOpen}
        onOpenChange={setEditOpen}
        commission={selectedCommission}
        stores={stores}
        onSuccess={() => {}}
      />

      {/* Delete Modal */}
      <DeleteModal
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title={`Are you sure you want to remove ${itemToDelete?.store?.name}?`}
        description="Removing this store will permanently delete it from your system."
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        onConfirm={handleDelete}
        isLoading={isDeleting}
      />
    </div>
  );
}
