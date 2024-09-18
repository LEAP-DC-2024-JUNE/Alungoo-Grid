const Assignment3 = () => {
  const products = [
    { name: "Laptop", price: 1200, available: true },
    { name: "Phone", price: 1200, available: false },
    { name: "Tablet", price: 1200, available: true },
  ];
  const availableProducts = products.filter((product) => {
    return product.available == true;
  });

  return (
    <div>
      <div>
        Available Products :
        {availableProducts.map((prod) => {
          return (
            <div>
              <p>{prod.name}</p>
              <p>{prod.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Assignment3;
