"use client";
import React from "react";
// import { headerData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES_QUERYResult } from "@/sanity.types";

const HeaderMenu = ({categories}:{categories:CATEGORIES_QUERYResult}) => {
  const pathname = usePathname();
  
  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-5 text-sm capitalize font-semibold">
    <Link
      href={"/"}
      className={`hover:text-[#151515] hoverEffect relative group ${
        pathname === "/" && "text-[#151515]"
      }`}
    >
      Home
      <span
        className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-[#151515] hoverEffect group-hover:w-1/2 group-hover:left-0 ${
          pathname === "/" && "w-1/2"
        }`}
      />
      <span
        className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-[#151515] hoverEffect group-hover:w-1/2 group-hover:right-0 ${
          pathname === "/" && "w-1/2"
        }`}
      />
    </Link>
    {categories?.map((category) => (
      <Link
        key={category?._id}
        href={`/category/${category?.slug?.current}`}
        className={`hover:text-[#151515] hoverEffect relative group ${
          pathname === `/category/${category?.slug?.current}` &&
          "text-[#151515]"
        }`}
      >
        {category?.title}
        <span
          className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-[#151515] hoverEffect group-hover:w-1/2 group-hover:left-0 ${
            pathname === `/category/${category?.slug?.current}` && "w-1/2"
          }`}
        />
        <span
          className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-[#151515] hoverEffect group-hover:w-1/2 group-hover:right-0 ${
            pathname === `/category/${category?.slug?.current}` && "w-1/2"
          }`}
        />
      </Link>
    ))}
  </div>
  );
};

export default HeaderMenu;
