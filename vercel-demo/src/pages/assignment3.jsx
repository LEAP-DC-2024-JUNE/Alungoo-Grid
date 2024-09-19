import { useState } from "react";

const Assignment4 = () => {
  const [available, setProduct] = useState(true);

  const products = [
    { name: "Laptop", price: 1200, available: true },
    { name: "Phone", price: 1200, available: false },
    { name: "Tablet", price: 1200, available: true },
  ];
  const availableProducts = products.filter((product) => {
    return product.available == available;
  });

  const handleClickAvailable = () => {
    return setProduct(true);
  };
  const handleClickUnvailable = () => {
    return setProduct(false);
  };

  return (
    <div>
      <div className="font-bold text-xl flex gap-10">
        <div>Available Products :</div>
        <button
          className=" bg-green-400 border-2"
          onClick={handleClickAvailable}
        >
          In Stock Products
        </button>
        <button
          className=" bg-red-400 border-2"
          onClick={handleClickUnvailable}
        >
          Out of Stock Products
        </button>
        {availableProducts.map((prod, index) => {
          return (
            <div key={index}>
              <p>{prod.name}</p>
              <p>{prod.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Assignment4;
