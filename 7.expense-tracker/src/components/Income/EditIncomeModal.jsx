"use client";

import { Input, Button, Textarea, Select, SelectItem } from "@nextui-org/react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { useState } from "react";

const EditIncomeModal = ({ isOpen, onClose, fetchIncome, income }) => {
  const initialIncomeData = {
    createdData: "",
    income: "",
    amount: 0,
  };
  const [incomeData, setIncomeData] = useState(income);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(e.target);

    setIncomeData((prevState) => ({ ...prevState, [name]: value }));
  };
  // const handleValueChange = (value, name, values) => {
  //   setIncomeData((prevState) => ({ ...prevState, amount: parseFloat(value) }));
  // };

  const handleClick = async () => {
    await fetch(`http://127.0.0.1:3010/api/item/${income._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(incomeData),
    });
    fetchIncome();
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
            name="createdData"
            id="createdData"
            value={incomeData.createdData}
            variant="bordered"
            onChange={handleChange}
          />

          <Textarea
            isRequired
            label="Income"
            labelPlacement="outside"
            name="income"
            id="income"
            value={incomeData.income}
            placeholder="Enter your income source from"
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
            Update
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditIncomeModal;
