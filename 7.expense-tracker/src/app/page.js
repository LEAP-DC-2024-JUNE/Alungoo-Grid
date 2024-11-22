"use client";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import AddExpenseModal from "@/components/AddExpenseModal";
import ExpenseItem from "@/components/ExpenseItem";

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
  if (loading) return <div>Loading ...</div>;
  return (
    <div className=" px-[200px] mt-20">
      <table className=" border-2 border-solid to-black ">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="text-left w-[15%] p-2">Date</th>
            <th className="text-left w-[30%] ">Description</th>
            <th className="text-left w-[20%]">Category</th>
            <th className="text-left w-[20%]">Amount $</th>
            <th className="text-left w-[5%] p-2">Action</th>
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
        <Button onClick={handleOpen} color="primary">
          + Add Expenses
        </Button>
        <AddExpenseModal isOpen={isOpen} onClose={handleClose} />
      </div>
    </div>
  );
};
export default Home;
