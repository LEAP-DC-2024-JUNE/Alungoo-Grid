"use client";
import { DeleteIcon } from "@/svg/DeleteIcon";

export const DeleteButton = ({ onDelete, expense }) => {
  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this expense?"
    );
    if (isConfirmed) {
      const res = await fetch(
        `http://127.0.0.1:3001/api/expenses/${expense.pk_id}`,
        {
          method: "DELETE",
        }
      );
      console.log(expense);

      if (res.ok) {
        prompt("ARE YOU SURE WANTS TO DELETE EXPENSE");
        onDelete();
      } else {
        console.error("Failed to delete the expense.");
      }
    }
  };

  return (
    <div onClick={handleDelete}>
      <DeleteIcon />
    </div>
  );
};
