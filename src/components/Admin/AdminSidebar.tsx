/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import CartIcon from "@/components/icons/CartIcon";
import {
  useGetMeQuery,
  useLogoutMutation,
} from "@/redux/features/authApi/authApi";
import Cookies from "js-cookie";
import {
  Heart,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import AnalysisIcon from "../icons/AnalysisIcon";
import FileIcon from "../icons/FileIcon";
import StoreCommissionIcon from "../icons/StoreCommissionIcon";
import StoreIcon from "../icons/StoreIcon";

const currentDate = new Date();
const currentMonth = currentDate.toLocaleString("default", { month: "long" });
const currentYear = currentDate.getFullYear();

const navItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
    basePath: "/admin/dashboard",
  },
  {
    label: "Store Manager",
    icon: StoreIcon,
    href: "/admin/store-manager",
    basePath: "/admin/store-manager",
  },
  {
    label: "Charity Panel",
    icon: Heart,
    href: `/admin/charity-panel?month=${currentMonth}+${currentYear}`,
    basePath: "/admin/charity-panel",
  },
  {
    label: "Monthly Receipts",
    icon: FileIcon,
    href: "/admin/monthly-receipts",
    basePath: "/admin/monthly-receipts",
  },
  {
    label: "Store Commission",
    icon: StoreCommissionIcon,
    href: `/admin/store-commission?month=${currentMonth}+${currentYear}`,
    basePath: "/admin/store-commission",
  },
  {
    label: "Analysis",
    icon: AnalysisIcon,
    href: "/admin/analysis",
    basePath: "/admin/analysis",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/admin/settings",
    basePath: "/admin/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetMeQuery("");
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      const response = await logout({}).unwrap();
      if (response?.success) {
        Cookies.remove("access_token");
        Cookies.remove("role");
        localStorage?.removeItem("access_token");
        toast.success("Logged out successfully");

        // Redirect to login
        router.push("/login");
      }
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Logout failed";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-[#1F3266] text-white p-2 rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={20} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-56 bg-linear-to-b from-[#3658B4] to-[#1F3164] flex flex-col justify-between py-6 px-4 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <CartIcon className="text-white" />
              <span className="text-white font-semibold text-xl leading-[124%] tracking-[0.1px]">
                CartForGood
              </span>
            </div>
            <button
              className="md:hidden text-white/70 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          <p className="text-[#D2D2D5] text-xl font-medium tracking-[0.1px] mb-6 mt-4 border-b border-[#90959c] pb-4">
            Admin
          </p>

          {/* Nav */}
          <nav className="flex flex-col gap-1">
            {navItems.map(({ label, icon: Icon, href, basePath }) => {
              const isActive = pathname === basePath; // ← Fixed: Compare with basePath only

              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-1.5 p-4 rounded-[10px] text-base font-medium leading-[132%] tracking-[0.08px] transition-colors text-nowrap ${
                    isActive
                      ? "bg-white text-[#1A2A56] font-semibold"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User profile */}
        <div className="p-4 rounded-[12px] bg-white">
          <div>
            <p className="text-[#A5A5AB] text-xs leading-[100%] tracking-[0.06px] mt-2">
              {data?.data?.email}
            </p>
            <button
              onClick={handleLogout}
              className="bg-red-400 px-4 py-2 rounded-md mt-3 w-full text-sm hover:bg-red-600 transition-colors text-white font-medium cursor-pointer flex items-center justify-center gap-3"
            >
              <>
                <LogOut className="h-4 w-4" />
                Logout
              </>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
