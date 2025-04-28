'use client'
import React from 'react'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import useCartStore from '@/store';

const CartIcon = () => {
  const { items } = useCartStore();
  return (
    <Link href={"/cart"} className="group relative">
      <ShoppingBag className="w-5 h-5 group-hover:text-[#151515] hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-[#151515] text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
        {items.length ? items.length : 0}
      </span>
    </Link>
  )
}

export default CartIcon
