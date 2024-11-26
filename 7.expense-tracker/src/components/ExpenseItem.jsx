"use client";

import { EditIcon } from "@/svg/EditIcon";
import { Tooltip } from "@nextui-org/react";
import { DeleteButton } from "./DeleteButton";
import { useState, useEffect } from "react";
import EditExpenseModal from "./EditExpenseModal";
import { useTheme } from "next-themes";
import { EditIconDark } from "@/svg/EditIconDark";

const moment = require("moment");
const formatDate = (date) => {
  return moment(date).format("L");
};
const ExpenseItem = ({ expense, setExpenses }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const fetchExpenses = async () => {
    const response = await fetch("http://127.0.0.1:3001/api/expenses");
    const data = await response.json();
    setExpenses(data); // update oorchlolt orj bga
  };
  const handleExpenseDeleted = async () => {
    await fetchExpenses();
  };
  useEffect(() => {
    fetchExpenses();
  }, []);
  let toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <tr>
      <td className="p-2 align-top text-sm ">{formatDate(expense.c_date)}</td>
      <td className="p-2 align-top text-sm">{expense.c_description}</td>
      <td className="p-2 align-top text-sm">{expense.c_type}</td>
      <td className="p-2 align-top text-sm">${expense.c_amount}</td>
      <td className="p-2 align-top text-sm">
        <div className=" flex gap-4">
          <Tooltip content="Edit " color="default-50">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <span>
                {theme == "light" ? (
                  <EditIcon onClick={handleOpen} />
                ) : (
                  <EditIconDark onClick={handleOpen} />
                )}
              </span>
              <EditExpenseModal
                isOpen={isOpen}
                onClose={handleClose}
                expense={expense}
                setExpenses={setExpenses}
                fetch={fetchExpenses}
              />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Delete">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <DeleteButton expense={expense} onDelete={handleExpenseDeleted} />
            </span>
          </Tooltip>
        </div>
      </td>
    </tr>
  );
};
export default ExpenseItem;
