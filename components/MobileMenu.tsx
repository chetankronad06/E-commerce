"use client";
import React from "react";
import { AlignLeft } from "lucide-react";
import SideBar from "./SideBar";
import { useState } from "react";

const MobileMenu = () => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  return (
    <>
      <button title="Mobile Menu" className="flex items-center justify-between md:hidden " onClick={() => setisSidebarOpen(!isSidebarOpen)}>
        <AlignLeft className="hover:text-[#151515] transition duration-300 md:hidden cursor-pointer" />
      </button>
      <div>
        <SideBar
          isOpen={isSidebarOpen}
          onClose={() => {
            setisSidebarOpen(false);
          }}
        />
      </div>
    </>
  );
};

export default MobileMenu;
