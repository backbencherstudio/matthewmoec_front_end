"use client";

import { useCampaignTracking } from "@/hooks/useCampaignTracking";
import Footer from "../../components/clientComponents/Layout/Footer";
import Navbar from "../../components/clientComponents/Layout/Navbar";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Auto-track all page views with UTMs
  useCampaignTracking();
  return (
    <div>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
