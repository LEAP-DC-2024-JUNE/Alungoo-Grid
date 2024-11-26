"use client";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import AddExpenseModal from "@/components/AddExpenseModal";
import ExpenseItem from "@/components/ExpenseItem";
import { Chart } from "@/components/Chart";
import { LoadingButton } from "@/components/LoadingButton";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const fetchData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:3001/api/expenses");
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setExpenses(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData().finally(() => setLoading(false));
  }, []);
  if (loading)
    return (
      <div className=" mx-[750px] mt-[300px]">
        <LoadingButton />
      </div>
    );
  return (
    <div className=" flex flex-row gap-10 justify-center mt-5 ">
      <div>
        <Chart />
      </div>
      <div className=" flex flex-col gap-1 ">
        <table className=" border-2 border-solid to-black ">
          <thead>
            <tr className="bg-blue-600 text-white shadow-md ">
              <th className="text-left w-[100px] p-2 font-normal">Date</th>
              <th className="text-left w-[220px] font-normal">Description</th>
              <th className="text-left w-[100px] font-normal">Category</th>
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
            color="primary"
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
    </div>
  );
};
export default Home;
