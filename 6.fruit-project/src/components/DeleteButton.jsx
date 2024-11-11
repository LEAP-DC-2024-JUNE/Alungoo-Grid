"use client";

import { useRouter } from "next/navigation";

const DeleteButton = ({ id }) => {
  const router = useRouter();
  const deleted = async () => {
    const deletedId = await fetch(`http://127.0.0.1:3001/api/goods/${id}`).then(
      (response) => response.json(),
      {
        method: "DELETE",
      }
    );

    if (deletedId.ok) {
      router.push("/goods");
    } else {
    }
  };
  return (
    <button className=" border-2 px-3  hover:bg-red-300" onClick={deleted}>
      Delete Item 🗑️
    </button>
  );
};
export default DeleteButton;
