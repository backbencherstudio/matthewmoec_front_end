"use client";

import CartIcon from "@/components/icons/CartIcon";
import {
  BarChart2,
  Heart,
  LayoutDashboard,
  Menu,
  Percent,
  Receipt,
  Settings,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import StoreIcon from "../icons/StoreIcon";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Store Manager", icon: StoreIcon, href: "/store-manager" },
  { label: "Charity Panel", icon: Heart, href: "/charity-panel" },
  { label: "Monthly Receipts", icon: Receipt, href: "/monthly-receipts" },
  { label: "Store Commission", icon: Percent, href: "/store-commission" },
  { label: "Analysis", icon: BarChart2, href: "/analysis" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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
            {/* Close button — mobile only */}
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
            {navItems.map(({ label, icon: Icon, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-1.5 p-4 rounded-[10px] text-base font-medium leading-[132%] tracking-[0.08px] transition-colors text-nowrap ${
                    isActive
                      ? "bg-white text-[#1A2A56] font-semibold text-base leading-[116%] tracking-[0.08px]"
                      : "text-white"
                  }`}
                >
                  <Icon size={20} />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User profile */}
        <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-3 py-3">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center overflow-hidden shrink-0">
            <span className="text-white font-semibold text-sm">M</span>
          </div>
          <div className="overflow-hidden">
            <p className="text-white text-sm font-medium truncate">
              Matthewmoec
            </p>
            <p className="text-white/50 text-xs truncate">matthewmoec@...</p>
          </div>
        </div>
      </aside>
    </>
  );
}
