"use client";
import { Input, Button, Textarea, Select, SelectItem } from "@nextui-org/react";
import { SelectorIcon } from "../svg/SelectorIcon";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { useState } from "react";

const AddIncomeModal = ({ isOpen, onClose, fetchData }) => {
  const initialIncomeData = {
    createdDate: "",
    description: "",
    amount: 0,
  };
  const [incomeData, setIncomeData] = useState(initialIncomeData);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(e.target);

    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleValueChange = (value, name, values) => {
    setData((prevState) => ({ ...prevState, amount: parseFloat(value) }));
  };

  const handleClick = async () => {
    await fetch("http://127.0.0.1:3010/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(incomeData),
    });
    fetchData();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} placement="top-center">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Add Income</ModalHeader>
        <ModalBody>
          <Input
            autoFocus
            isRequired
            type="date"
            name="date"
            id="date"
            value={incomeData.createdDate}
            variant="bordered"
            onChange={handleChange}
          />

          <Textarea
            isRequired
            label="Income"
            labelPlacement="outside"
            name="description"
            id="description"
            value={incomeData.description}
            placeholder="Enter your description"
            className="max-w-fullmt-4"
            onChange={handleChange}
          />

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
          <Button color="primary" onPress={onClose} onClick={handleClick}>
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddIncomeModal;
