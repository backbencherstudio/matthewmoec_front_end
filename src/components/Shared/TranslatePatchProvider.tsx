"use client";

import { useEffect } from "react";
import { applyGoogleTranslatePatch } from "./googleTranslatePatch";


export default function TranslatePatchProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    applyGoogleTranslatePatch();
  }, []);

  return children;
}
