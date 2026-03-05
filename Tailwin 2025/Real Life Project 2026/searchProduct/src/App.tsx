import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  let data = [
    {
      id: 1,
      name: "Car",
      price: 10.99,
      description: "This is product 1",
    },
    {
      id: 2,
      name: "Bike",
      price: 5.99,
      description: "This is product 2",
    },
    {
      id: 3,
      name: "Bus",
      price: 20.99,
      description: "This is product 3",
    },
    {
      id: 4,
      name: "Truck",
      price: 15.99,
      description: "This is product 4",
    },
    {
      id: 5,
      name: "Plane",
      price: 50.99,
      description: "This is product 5",
    },
    {
      id: 6,
      name: "Boat",
      price: 25.99,
      description: "This is product 6",
    }
  ];

  let [searchTerm, setSearchTerm] = useState("");
  let [prodectsData, setProductsData] = useState(data);
  let focusedInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focusedInput.current?.focus();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    let filteredProducts = data.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProductsData(filteredProducts);
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Product List</h1>
      <hr className="my-4" />
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 border rounded mb-4"
        value={searchTerm}
        onChange={(e) => handleSearch(e)}
        ref={focusedInput}
      />
      <p>Search Term: {searchTerm}</p>
      <hr className="my-4" />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {prodectsData.map((product) => (
          <li key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-green-500">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
