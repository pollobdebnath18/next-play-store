"use client";
import InstalledAppProvider from "@/context/InstalledAppProvider";
import React from "react";

const Providers = ({ children }) => {
  return (
    <div>
      <InstalledAppProvider>{children}</InstalledAppProvider>
    </div>
  );
};

export default Providers;
