"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

export interface TableItem {
  id?: string | number;
  [key: string]: unknown;
}

interface ReuseAbleTableProps<T extends TableItem> {
  allClientDataList?: T[];
  isLoadings: boolean;
  currentItems: T[];
  tableHeader: string[];
  tableRowDataRenderers: ((item: T, index: number) => React.ReactNode)[];
  isBg?: boolean;
}

const ReuseAbleTable = <T extends TableItem>({
  isLoadings,
  currentItems,
  tableHeader,
  tableRowDataRenderers,
  isBg = false,
}: ReuseAbleTableProps<T>) => {
  return (
    <div
      className={`${
        isBg ? "bg-white rounded-2xl px-4" : ""
      } overflow-x-auto w-full custom-scroll`}
    >
      <div className="lg:max-w-[calc(100vw-320px)] max-w-[calc(100vw-60px)]">
        {isLoadings ? (
          <LoadingSkeleton />
        ) : (
          <Table className="overflow-hidden">
            <TableHeader>
              <TableRow className="bg-[#EBEFF8] hover:bg-[#EBEFF8]">
                {tableHeader.map((header, index) => (
                  <TableHead
                    key={index}
                    className="text-lg leading-[150%] font-medium text-[#1A2A56]  p-4"
                  >
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {currentItems?.length ? (
                currentItems.map((item, index) => (
                  <TableRow
                    key={item.id ?? index}
                    className="text-gray-800 text-[14px]"
                  >
                    {tableRowDataRenderers.map((renderFn, colIndex) => (
                      <TableCell key={colIndex} className="py-3 px-4 text-xs">
                        {renderFn(item, index)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={tableRowDataRenderers.length}
                    className="py-6 text-center text-gray-500"
                  >
                    No Data Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

const LoadingSkeleton = () => (
  <div>
    <div className="h-12 bg-gray-300 rounded-t animate-pulse mb-2"></div>
    {[1, 2, 3, 4, 5].map((item) => (
      <div
        key={item}
        className="h-16 bg-gray-300 rounded animate-pulse mb-2"
      ></div>
    ))}
  </div>
);

export default ReuseAbleTable;
