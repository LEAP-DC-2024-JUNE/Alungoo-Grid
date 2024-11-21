"use client";

import { DeleteIcon } from "@/svg/DeleteIcon";
import { EditIcon } from "@/svg/EditIcon";
import { Tooltip } from "@nextui-org/react";

const moment = require("moment");
const formatDate = (date) => {
  return moment(date).format("L");
};
const ExpenseItem = ({ expense }) => {
  return (
    <tr>
      <td className="p-2 align-top">{formatDate(expense.c_date)}</td>
      <td className="p-2 align-top">{expense.c_description}</td>
      <td className="p-2 align-top">{expense.c_type}</td>
      <td className="p-2 align-top">${expense.c_amount}</td>
      <td className="p-2 align-top">
        {/* <select>
          <option value="" defaultValue={true} disabled hidden></option>
          <option value="edit">Edit</option>
          <option value="delete">Delete</option>
        </select> */}
        <div className=" flex gap-4">
          <Tooltip content="Edit " color="default-50">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EditIcon />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Delete">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <DeleteIcon />
            </span>
          </Tooltip>
        </div>
      </td>
    </tr>
  );
};
export default ExpenseItem;
