"use client";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import AddExpenseModal from "@/components/Expense/AddExpenseModal";
import ExpenseItem from "@/components/Expense/ExpenseItem";
import LoadingButton from "@/components/LoadingButton";
import IncomeItem from "@/components/Income/IncomeItem";
import AddIncomeModal from "@/components/Income/AddIncomeModal";
import { CombinedChart } from "@/components/CombinedChart";
import { TrendingDown } from "@/svg/TrendingDown";
import { TrendingUp } from "@/svg/TrendingUp";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenIncomeModal, setIsOpenIncomeModal] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
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
      const res = await fetch("http://127.0.0.1:3010/api/item");
      if (!res.ok) throw new Error("Failed to fetch income data");
      const income = await res.json();
      setIncomes(income);
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
    <div className=" border-1 border-purple-600 pl-[12rem]  p-20">
      <div className="  text-white pl-[5rem]">ALL TRANSACTIONS</div>
      <div className=" mt-4 px-[420px] ">
        <CombinedChart />
      </div>
      <div className=" flex flex-row gap-10 justify-center mt-20  ">
        <div className=" flex flex-col gap-1 ">
          <div className=" flex flex-row gap-4 justify-between align-baseline">
            <div className=" flex gap-1 items-center ">
              <TrendingDown />
              <span>Expense</span>
            </div>
            <Button onClick={handleOpen} color="danger" variant="ghost">
              + Add Expense
            </Button>
          </div>
          <table className=" border-1 border-solid to-black ">
            <thead>
              <tr className=" bg-[#c20e4d] text-white ">
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
            <AddExpenseModal
              isOpen={isOpen}
              onClose={handleClose}
              fetchData={fetchData}
            />
          </div>
        </div>
        <div className=" flex flex-col gap-1 ">
          <div className=" flex flex-row gap-4 justify-between align-baseline">
            <div className=" flex gap-1 items-center ">
              <TrendingUp />
              <span>Income</span>
            </div>
            <Button
              onClick={handleOpenIncomeModal}
              color="primary"
              variant="ghost"
            >
              + Add Income
            </Button>
          </div>
          <table className=" border-1 border-solid to-black ">
            <thead>
              <tr className="bg-[#006FEE] text-white shadow-md items-center ">
                <th className="text-left w-[120px] p-2 font-normal">Date</th>
                <th className="text-left w-[300px] font-normal">
                  Income Source
                </th>
                <th className="text-left w-[120px] font-normal">Amount</th>
                <th className="text-left w-[80px] p-2 font-normal">Action</th>
              </tr>
            </thead>
            <tbody>
              {incomes.map((income, i) => (
                <IncomeItem
                  income={income}
                  setIncomes={setIncomes}
                  fetchIncome={fetchIncome}
                  key={i}
                />
              ))}
            </tbody>
          </table>
          <div>
            <AddIncomeModal
              isOpen={isOpenIncomeModal}
              onClose={handleCloseIncomeModal}
              fetchIncome={fetchIncome}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
