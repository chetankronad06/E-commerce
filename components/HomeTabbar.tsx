import { productType } from "@/constants";
import { Repeat } from "lucide-react";
import React from "react";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabbar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex items-center gap-1.5 text-sm font-semibold">
      <div className="flex items-center gap-1.5">
        {productType?.map((item) => (
          <button
            key={item?.title}
            onClick={() => onTabSelect(item?.title)}
            className={`border border-[#151515] px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-[#151515] hover:text-white hoverEffect ${selectedTab === item?.title && "bg-[#151515] text-white"}`}
          >
            {item?.title}
            
          </button>
        ))}
      </div>
      <button title="Refresh" className="border border-[#151515] p-2 rounded-full hover:bg-[#151515] hover:text-white hoverEffect">
        <Repeat className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HomeTabbar;