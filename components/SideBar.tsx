import React, { FC } from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { X } from "lucide-react";
import Link from "next/link";
import { headerData } from "@/constants";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface sideBarprops {
  isOpen: boolean;
  onClose: () => void;
}

const SideBar: FC<sideBarprops> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef =useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 bg-[#151515]/50 shadow-xl hoverEffect w-full ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-all duration-300`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-[#151515] text-white/70 h-full p-10 border-r border-r-white flex flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <button onClick={onClose}>
            <Logo className="text-white">E-commerce</Logo>
          </button>
          <button
            className="hover:text-white hoverEffect text-[#52525b]"
            title="Close sidebar"
            onClick={onClose}
          >
            <X />
          </button>
        </div>

        <div className="flex flex-col gap-3.5 text-base font-semibold tracking-wide">
          {headerData?.map((item) => (
            <Link
              onClick={onClose}
              key={item?.title}
              href={item?.href}
              className={`hover:text-white hoverEffect w-24 ${
                pathname === item?.href && "text-white"
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>

        <SocialMedia />
      </motion.div>
    </div>
  );
};

export default SideBar;
