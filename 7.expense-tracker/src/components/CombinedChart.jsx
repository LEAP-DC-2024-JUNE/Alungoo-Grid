"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function CombinedChart() {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://127.0.0.1:3001/api/expenses");
      if (!res.ok) throw new Error("Failed to fetch expenses data");
      const data = await res.json();
      console.log("Expenses data:", data);
      setExpenses(data);
    } catch (error) {
      console.error("Expenses fetch error:", error);
      setError(error.message);
    }
  };
  const fetchIncome = async () => {
    try {
      const res = await fetch("http://127.0.0.1:3010/api/item");
      if (!res.ok) throw new Error("Failed to fetch income data");
      const income = await res.json();
      console.log("Income data:", income);
      setIncomes(income);
    } catch (err) {
      console.error("Income fetch error:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    fetchIncome();
  }, []);

  useEffect(() => {
    // Process expenses and incomes into chart data
    const processedData = months.map((month, index) => {
      // Calculate the expenses for the current month
      const monthExpenses = expenses
        .filter((exp) => {
          const expDate = new Date(exp.date); // Ensure the expense date is parsed correctly
          return (
            expDate.getMonth() === index &&
            expDate.getFullYear() === new Date().getFullYear()
          ); // Match month and current year
        })
        .reduce((sum, exp) => sum + exp.amount, 0); // Sum the amounts

      // Calculate the incomes for the current month
      const monthIncomes = incomes
        .filter((inc) => {
          const incDate = new Date(inc.createdData); // Ensure the income date is parsed correctly
          return (
            incDate.getMonth() === index &&
            incDate.getFullYear() === new Date().getFullYear()
          ); // Match month and current year
        })
        .reduce((sum, inc) => sum + inc.amount, 0); // Sum the amounts

      return {
        month,
        expense: monthExpenses,
        income: monthIncomes,
      };
    });

    console.log("Processed Chart Data:", processedData); // For debugging

    // Set the processed data for the chart
    setChartData(processedData);

    // Calculate the total expenses and income for the entire year
    const totalExp = expenses.reduce((sum, exp) => sum + exp.amount, 0); // Total expense for the year
    const totalInc = incomes.reduce((sum, inc) => sum + inc.amount, 0); // Total income for the year

    console.log("Total Expense:", totalExp);
    console.log("Total Income:", totalInc);

    // Set the total expense and income
    setTotalExpense(totalExp);
    setTotalIncome(totalInc);
  }, [expenses, incomes]); // Only watch expenses and incomes

  const chartConfig = {
    expense: {
      label: "Expense",
      color: "hsl(var(--chart-1))",
      icon: TrendingDown,
    },
    income: {
      label: "Income",
      color: "hsl(var(--chart-2))",
      icon: TrendingUp,
    },
  };
  //   const incomeExpenseRatio =
  //     totalIncome > 0
  //       ? (((totalIncome - totalExpense) / totalIncome) * 100).toFixed(2)
  //       : 0;

  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (error) {
  //     return <div>Error: {error}</div>;
  //   }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense vs Income</CardTitle>
        <CardDescription>
          Showing total expense and income for the last 12 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="expense"
              type="natural"
              fill="var(--color-expense)"
              fillOpacity={0.4}
              stroke="var(--color-expense)"
              stackId="a"
            />
            <Area
              dataKey="income"
              type="natural"
              fill="var(--color-income)"
              fillOpacity={0.4}
              stroke="var(--color-income)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - December 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
