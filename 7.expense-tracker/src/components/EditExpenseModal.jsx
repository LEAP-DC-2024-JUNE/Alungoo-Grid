"use client";
import { useState, useEffect, use } from "react";
import { SelectorIcon } from "../svg/SelectorIcon";
import { Input, Button, Textarea, Select, SelectItem } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

const EditExpenseModal = ({ expense, isOpen, onClose, setExpenses }) => {
  const [data, setData] = useState({
    date: expense.c_date || "",
    description: expense.c_description || "",
    type: expense.c_type || 0,
    amount: expense.c_amount || 0,
  });

  const handleChange = (e) => {
    console.log(data.description);
    const { id, value } = e.target;
    console.log(e.target);
    setData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleEdit = async () => {
    try {
      data.type = 1;
      const res = await fetch(
        `http://127.0.0.1:3001/api/expenses/${expense.pk_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to update expense");
      }
      const updatedData = await res.json();
      setExpenses((prevState) =>
        prevState.map((item) =>
          item.pk_id === updatedData.pk_id ? updatedData : item
        )
      );
      onClose();
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} placement="top-center">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Add Expense</ModalHeader>
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
            // onChange={(e) => setData({ ...data, type: e.target.value })}
            onChange={handleChange}
            disableSelectorIconRotation
            selectorIcon={<SelectorIcon />}
          >
            <SelectItem value="1" key="1">
              Food
            </SelectItem>
            <SelectItem value="2" key="2">
              Entertainment
            </SelectItem>
            <SelectItem value="3" key="3">
              Transportation
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
