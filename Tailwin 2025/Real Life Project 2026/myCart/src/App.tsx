import React, { useState } from "react";
import type { CartItem } from "./types/cart";
import ProductCard from "./ProductCard";

function App() {
  const data: CartItem[] = [
    {
      id: "1",
      title: "Sample Product",
      price: 10.99,
      stockQuantity: 100,
      minQuantity: 5,
      maxQuantity: 10,
      cartQuantity: 5,
    },
    {
      id: "2",
      title: "Another Product",
      price: 5.49,
      stockQuantity: 50,
      minQuantity: 3,
      maxQuantity: 10,
      cartQuantity: 3,
    },
    {
      id: "3",
      title: "Third Product",
      price: 7.99,
      stockQuantity: 60,
      minQuantity: 2,
      maxQuantity: 5,
      cartQuantity: 2,
    },
    {
      id: "4",
      title: "Fourth Product",
      price: 12.99,
      stockQuantity: 30,
      minQuantity: 1,
      maxQuantity: 3,
      cartQuantity: 2,
    },
  ];

  const [mainData, setMainData] = useState<CartItem[]>(data);
  const [cartData, setCartData] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const cartQuantityHandler = (id: string, action: "increase" | "decrease") => {
    setMainData((items) =>
      items.map((item) => {
        if (item.id !== id) return item;

        let qty = item.cartQuantity;

        if (action === "increase" && qty < item.maxQuantity) qty++;
        if (action === "decrease" && qty > item.minQuantity) qty--;

        return { ...item, cartQuantity: qty };
      }),
    );
  };

  const addToCart = (product: CartItem) => {
    setCartData((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) => (p.id === product.id ? product : p));
      }
      return [...prev, product];
    });
  };

  const removeFromCart = (id: string) => {
    setCartData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      {/* Search */}
      <div className="flex gap-4 mb-6">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Products */}

      <div className="grid grid-cols-4 gap-4">
        {mainData
          .filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onQtyChange={cartQuantityHandler}
              onAddToCart={addToCart}
            />
          ))}
      </div>

      <hr className="my-6" />

      {/* Cart */}
      <h2 className="text-2xl font-bold mb-4">Cart</h2>

      {cartData.map((item) => (
        <div
          key={item.id}
          className="border rounded p-4 mb-3 flex justify-between items-center"
        >
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p>Qty: {item.cartQuantity}</p>
            <p>Price: ${item.price}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-4 font-bold">
        Total Price: $
        {cartData
          .reduce((sum, item) => sum + item.price * item.cartQuantity, 0)
          .toFixed(2)}
      </div>
    </div>
  );
}

export default App;
