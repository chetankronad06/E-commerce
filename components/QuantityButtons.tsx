import { Product } from '@/sanity.types'
import React from 'react'
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';
import useCartStore from '@/store';
import toast from 'react-hot-toast';

interface Props {
    product: Product;
    className?: string;
}

const QuantityButtons = ({ product, className }: Props) => {
    const { addItem, getItemCount, removeItem } = useCartStore();
    const itemCount = getItemCount(product?._id);
    // const isOutOfStock = product?.stock === 0;
    const handleRemoveProduct = () => {
        removeItem(product?._id);
        if (itemCount > 1) {
            toast.success("Quantity Decreased successfully!");
        } else {
            toast.success(`${product?.name?.substring(0, 12)} removed successfully!`);
        }
    };

    return (
        <div className={cn("flex items-center gap-1 text-base pb-1", className)}>
            <Button
                disabled={itemCount === 0}
                variant="outline"
                size="icon"
                className="w-6 h-6"
                onClick={handleRemoveProduct}
            >
                <Minus />
            </Button>
            <span className="font-semibold w-8 text-center text-darkColor">
                {itemCount}
            </span>
            <Button
                variant="outline"
                size="icon"
                className="w-6 h-6"
                onClick={() => {
                    addItem(product);
                    toast.success(
                      `${product?.name?.substring(0, 12)}... added successfully!`
                    );
                  }}
            >
                <Plus />
            </Button>
        </div>
    )
}

export default QuantityButtons
