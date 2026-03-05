import React from "react";
import type { CartItem } from "./types/cart";

type Props = {
  item: CartItem;
  onQtyChange: (id: string, action: "increase" | "decrease") => void;
  onAddToCart: (item: CartItem) => void;
};

const ProductCard: React.FC<Props> = ({ item, onQtyChange, onAddToCart }) => {
  const isInvalidMin = item.cartQuantity < item.minQuantity;

  return (
    <div className="border border-gray-300 rounded-md p-4 mb-4 shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-gray-600">Price: ${item.price}</p>
        </div>

        <div className="text-sm text-gray-500">
          <p className="text-end">
          Stock: {item.stockQuantity}
          </p>
          {/* Quantity Controls */}
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={() => onQtyChange(item.id, "decrease")}
              disabled={item.cartQuantity <= item.minQuantity}
              className="bg-gray-300 px-3 py-1 rounded disabled:opacity-40"
            >
              -
            </button>

            <span className="font-semibold">{item.cartQuantity}</span>

            <button
              onClick={() => onQtyChange(item.id, "increase")}
              disabled={item.cartQuantity >= item.maxQuantity}
              className="bg-gray-300 px-3 py-1 rounded disabled:opacity-40"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Min / Max Info */}
      <p className="text-sm text-gray-500 mt-2">
        Min: {item.minQuantity} | Max: {item.maxQuantity}
      </p>

      {isInvalidMin && (
        <p className="text-sm text-red-500 mt-1">
          Minimum quantity is {item.minQuantity}
        </p>
      )}

      <button
        onClick={() => onAddToCart(item)}
        disabled={isInvalidMin}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-gray-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
