"use client";
import Link from "next/link";
import { useState } from "react";

const NewItem = () => {
  const [data, setData] = useState({
    productName: "",
    image: "",
    from: "",
    nutrients: "",
    quantity: "",
    price: "",
    organic: false,
    description: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log(data);
    fetch("http://127.0.0.1:3001/api/goods/", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setData({
      productName: "",
      image: "",
      from: "",
      nutrients: "",
      quantity: "",
      price: "",
      organic: false,
      description: "",
    });
  };

  return (
    <div className=" flex flex-col items-center m-20 gap-5">
      <div className="">
        <h1 className=" text-lg font-semibold m-2">Add new items in cart</h1>
        <label htmlFor="productName">Product Name: </label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={data.productName}
          onChange={(e) => setData({ ...data, productName: e.target.value })}
          className=" text-black border-[2px] bg-green-50"
          placeholder=" Product Name"
        ></input>
      </div>
      <div>
        <label> Product Image: </label>
        <input
          type="text"
          id="image"
          name="image"
          value={data.image}
          onChange={(e) => setData({ ...data, image: e.target.value })}
          className=" text-black border-[2px] bg-green-50"
          placeholder=" Image"
        ></input>
      </div>
      <div>
        <label>Product From: </label>
        <input
          type="text"
          id="from"
          name="from"
          value={data.from}
          onChange={(e) => setData({ ...data, from: e.target.value })}
          className=" text-black border-[2px] bg-green-50"
          placeholder=" Product From"
        ></input>
      </div>
      <div>
        <label>Product Nutrients: </label>
        <input
          type="text"
          id="nutrients"
          name="nutrients"
          value={data.nutrients}
          onChange={(e) => setData({ ...data, nutrients: e.target.value })}
          className=" text-black border-[2px] bg-green-50"
          placeholder=" Nutrients"
        ></input>
      </div>
      <div>
        <label>Product Quantity: </label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={data.quantity}
          onChange={(e) => setData({ ...data, quantity: e.target.value })}
          className=" text-black border-[2px] bg-green-50"
          placeholder=" Product Quantity"
        ></input>
      </div>
      <div>
        <label>Product Price: </label>
        <input
          type="text"
          id="price"
          name="price"
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
          className=" text-black border-[2px] bg-green-50"
          placeholder=" Product Price"
        ></input>
      </div>
      <div>
        <label>Organic</label>
        <input
          type="radio"
          id="organic"
          name="organic"
          value={data.organic ? "true" : "false"}
          onChange={(e) => setData({ ...data, organic: e.target.value })}
          className=" text-black border-[2px] bg-green-50"
        ></input>
      </div>
      <div>
        <label>Product Description: </label>
        <input
          type="text"
          id="description"
          name="description"
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
          className=" text-black border-[2px] bg-green-50"
          placeholder=" Description"
        ></input>
      </div>
      <div className=" flex flex-row justify-center gap-3">
        <Link href="/goods" className=" border-2 px-4 py-1 hover:bg-green-50">
          {" "}
          ← Go Back
        </Link>
        <button
          className=" border-2 px-5 py-1 hover:bg-green-200 hover:duration-75"
          onClick={(e) => handleClick(e)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewItem;
