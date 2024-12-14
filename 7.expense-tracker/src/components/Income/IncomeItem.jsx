"use client";

import { EditIcon } from "@/svg/EditIcon";
import { Tooltip } from "@nextui-org/react";
import { useState, useEffect } from "react";
import EditIncomeModal from "./EditIncomeModal";
import { useTheme } from "next-themes";
import { EditIconDark } from "@/svg/EditIconDark";
import { IncomeDeleteButton } from "./IncomeDeleteButton";

const moment = require("moment");
const formatDate = (date) => {
  return moment(date).format("L");
};
const IncomeItem = ({ income, setIncomes, fetchIncome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleIncomeDeleted = async () => {
    await fetchIncome();
  };
  useEffect(() => {
    fetchIncome();
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
      <td className="p-2 align-top text-sm ">
        {formatDate(income.createdData)}
      </td>

      <td className="p-2 align-top text-sm">{income.income}</td>
      <td className="p-2 align-top text-sm">${income.amount}</td>
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
              <EditIncomeModal
                isOpen={isOpen}
                onClose={handleClose}
                income={income}
                setIncomes={setIncomes}
                fetchIncome={fetchIncome}
              />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Delete">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <IncomeDeleteButton
                income={income}
                onDelete={handleIncomeDeleted}
              />
            </span>
          </Tooltip>
        </div>
      </td>
    </tr>
  );
};
export default IncomeItem;
