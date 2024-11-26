"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
import { useState, useEffect } from "react";

export const Chart = () => {
  const [chartData, setChartData] = useState([]);

  const [monthsInData, setMonthsInData] = useState([]);
  // Array of months in short form
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
      const res = await fetch("http://127.0.0.1:3001/api/expenses");
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();

      const chartData = months.map((month) => {
        const monthlyData = data.filter((item) => {
          const itemMonth = new Date(item.c_date).toLocaleString("default", {
            month: "short",
          });
          return itemMonth === month;
        });

        const result = {
          month,
          food: 0,
          transportation: 0,
          fun: 0,
          accommodation: 0,
        };

        monthlyData.forEach((item) => {
          if (item.c_type === "Food") {
            result.food += item.c_amount;
          } else if (item.c_type === "Transportation") {
            result.transportation += item.c_amount;
          } else if (item.c_type === "Fun") {
            result.fun += item.c_amount;
          } else if (item.c_type === "Accommodation") {
            result.accommodation += item.c_amount;
          }
        });

        return result;
      });

      return chartData;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const chartConfig = {
    food: {
      label: "Food",
      color: "hsl(var(--chart-1))",
    },
    transportation: {
      label: "Transportation",
      color: "hsl(var(--chart-2))",
    },
    fun: {
      label: "Fun",
      color: "hsl(var(--chart-3))",
    },
    accommodation: {
      label: "Accommodation",
      color: "hsl(var(--chart-4))",
    },
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      setChartData(data);

      const monthsFromData = Array.from(
        new Set(data.map((item) => item.month))
      );
      setMonthsInData(monthsFromData);
    };
    loadData();
  }, []);

  return (
    <div className=" w-[380px] ">
      <Card>
        <CardHeader>
          <CardTitle>Expense Chart</CardTitle>
          <CardDescription>Jan - Dec 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey="food"
                stackId="a"
                fill="var(--color-food)"
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="transportation"
                stackId="a"
                fill="var(--color-transportation)"
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="fun"
                stackId="a"
                fill="var(--color-fun)"
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="accommodation"
                stackId="a"
                fill="var(--color-accommodation)"
                radius={[0, 0, 4, 4]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};
