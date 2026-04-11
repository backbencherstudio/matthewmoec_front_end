import { TableItem } from "@/components/reusable/reuseable-table";



export interface TableRowItem extends TableItem {
  name?: string;
  logo?: string;
  clicks?: number;
  status?: "Published" | "Unpublished";
}
