"use client";

import { DeleteIcon } from "@/svg/DeleteIcon";

export const IncomeDeleteButton = ({ income, onDelete }) => {
  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "Are you sure want to delete this income "
    );
    if (isConfirmed) {
      const res = await fetch(`http://127.0.0.1:3010/api/item/${income._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(income);
      if (res.ok) {
        onDelete();
      } else {
        console.log("Failed to delete the income");
      }
    }
  };
  return (
    <div onClick={handleDelete} style={{ cursor: "pointer" }}>
      <DeleteIcon />
    </div>
  );
};
