"use client";
import { useState, useEffect } from "react";
import { SelectorIcon } from "@/svg/SelectorIcon";
import { Input, Button, Textarea, Select, SelectItem } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

const EditExpenseModal = ({ expense, isOpen, onClose, setExpenses, fetch }) => {
  const [data, setData] = useState({
    date: "",
    description: "",
    type: 0,
    amount: 0,
  });

  // useEffect(() => {
  //   if (expense) {
  //     setData({
  //       date: expense.date || "",
  //       description: expense.description || "",
  //       type: expense.type ? String(expense.type) : "",
  //       amount: expense.amount || 0,
  //     });
  //   }
  // }, [expense]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(e.target);
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleValueChange = (value, name, values) => {
    setData((prevState) => ({ ...prevState, amount: parseFloat(value) }));
  };

  // if (e.target.name == "type") {
  //   setData((prevState) => ({
  //     ...prevState,
  //     type: value,
  //   }));
  // } else {
  //   setData((prevState) => ({
  //     ...prevState,
  //     [id]: value,
  //   }));
  // }

  const handleEdit = async () => {
    if (!data.date || !data.description || !data.type || !data.amount) {
      alert("Please fill in all required fields");
      return;
    }
    await fetch(`http://127.0.0.1:3001/api/expenses/${expense.pk_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    fetch();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} placement="top-center">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Edit Expense</ModalHeader>
        <ModalBody>
          <Input
            autoFocus
            isRequired
            type="date"
            name="date"
            id="date"
            value={data.date}
            variant="bordered"
            onChange={handleChange}
          />

          <Textarea
            isRequired
            label="Description"
            labelPlacement="outside"
            name="description"
            id="description"
            value={data.description}
            placeholder="Enter your description"
            className="max-w-fullmt-4"
            onChange={handleChange}
          />
          <Select
            isRequired
            name="type"
            id="type"
            value={data.type}
            label="Category"
            placeholder="Select category"
            labelPlacement="outside"
            className="max-w-s "
            onChange={handleChange}
            disableSelectorIconRotation
            selectorIcon={<SelectorIcon />}
          >
            <SelectItem value="1" key="1">
              Food
            </SelectItem>
            <SelectItem value="2" key="2">
              Transportation
            </SelectItem>
            <SelectItem value="3" key="3">
              Fun
            </SelectItem>
            <SelectItem value="4" key="4">
              Accommodation
            </SelectItem>
          </Select>
          <Input
            isRequired
            type="number"
            label="Amount"
            name="amount"
            id="amount"
            placeholder="0.00"
            labelPlacement="outside"
            onChange={handleChange}
            className=" my-10"
            endContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">$</span>
              </div>
            }
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="flat" onPress={onClose}>
            Cancel
          </Button>
          <Button color="primary" onPress={onClose} onClick={handleEdit}>
            Update
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default EditExpenseModal;
