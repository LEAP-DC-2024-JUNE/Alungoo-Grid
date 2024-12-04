"use client";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import AddExpenseModal from "@/components/AddExpenseModal";
import ExpenseItem from "@/components/ExpenseItem";
import { Chart } from "@/components/Chart";
import LoadingButton from "@/components/LoadingButton";
import IncomeItem from "@/components/IncomeItem";
import AddIncomeModal from "@/components/AddIncomeModal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenIncomeModal, setIsOpenIncomeModal] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncome] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleOpenIncomeModal = () => {
    setIsOpenIncomeModal(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleCloseIncomeModal = () => {
    setIsOpenIncomeModal(false);
  };

  const fetchData = async () => {
    try {
      console.log("fetchData");
      const res = await fetch("http://127.0.0.1:3001/api/expenses");
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setExpenses(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchIncome = async () => {
    try {
      const res = await fecth("http://127.0.0.1:3010/api/items");
      if (!res.ok) throw new Error("Failed to fetch income data");
      const income = await res.json();
      setIncome(income);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchIncome();
    fetchData().finally(() => setLoading(false));
  }, []);
  if (loading)
    return (
      <div className=" mx-[750px] mt-[300px]">
        <LoadingButton />
      </div>
    );
  return (
    <div className=" flex flex-row gap-10 justify-center mt-5 flex-wrap px-[12rem]">
      <div className=" flex flex-col gap-1 ">
        <table className=" border-2 border-solid to-black ">
          <thead>
            <tr className=" bg-[#F31260] text-white shadow-md ">
              <th className="text-left w-[100px] p-2 font-normal">Date</th>
              <th className="text-left w-[200px] font-normal">Description</th>
              <th className="text-left w-[150px] font-normal">Category</th>
              <th className="text-left w-[100px] font-normal">Amount</th>
              <th className="text-left w-[80px] p-2 font-normal">Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, i) => (
              <ExpenseItem
                expense={expense}
                setExpenses={setExpenses}
                fetchData={fetchData}
                key={i}
              />
            ))}
          </tbody>
        </table>
        <div>
          <Button
            onClick={handleOpen}
            color="danger"
            variant="ghost"
            className=" -right-[470px]"
          >
            + Add Expenses
          </Button>
          <AddExpenseModal
            isOpen={isOpen}
            onClose={handleClose}
            fetchData={fetchData}
          />
        </div>
      </div>
      <div>
        <table className=" border-2 border-solid to-black ">
          <thead>
            <tr className="bg-[#17C964] text-white shadow-md ">
              <th className="text-left w-[100px] p-2 font-normal">Date</th>
              <th className="text-left w-[200px] font-normal">Description</th>
              <th className="text-left w-[100px] font-normal">Amount</th>
              <th className="text-left w-[80px] p-2 font-normal">Action</th>
            </tr>
          </thead>
          <tbody>
            {incomes.map((income, i) => (
              <IncomeItem
                income={income}
                setIncome={setIncome}
                fetchIncome={fetchIncome}
                key={i}
              />
            ))}
          </tbody>
        </table>
        <div>
          <Button
            onClick={handleOpenIncomeModal}
            color="success"
            variant="ghost"
            className=" -right-[340px]"
          >
            + Add Income
          </Button>
          <AddIncomeModal
            isOpen={isOpenIncomeModal}
            onClose={handleCloseIncomeModal}
            fetchIncome={fetchIncome}
          />
        </div>
      </div>
      <div>
        <Chart />
      </div>
    </div>
  );
};
export default Home;
