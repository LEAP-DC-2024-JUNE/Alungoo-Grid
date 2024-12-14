"use client";
import { Avatar } from "@nextui-org/react";
import { ChartIcon } from "@/svg/ChartIcon";
import { SignOutIcon } from "@/svg/SignOutIcon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";

export const SideMenu = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  let toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!mounted) return null;
  return (
    <div className=" fixed top-0 left-0 bottom-0 w-40 bg-[#350b5f] border-1 border-purple-700 pt-14">
      <div className=" flex flex-col justify-center gap-11 px-4">
        <div className=" flex gap-3">
          <Avatar
            isBordered
            color="secondary"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
          <div className=" flex flex-col">
            <p className=" font-medium">Alungoo</p>
            <p className=" text-xs font-extralight ">Your Budget</p>
          </div>
        </div>
        <div className=" flex gap-2 items-center cursor-pointer  active:bg-indigo-800">
          <ChartIcon /> <p> Dashboard</p>
        </div>
        <div className=" flex gap-2 items-center cursor-pointer pt-[530px]">
          <SignOutIcon /> <p className=" font-thin text-sm"> Sign Out</p>
        </div>
      </div>
      <Switch
        defaultSelected
        size="sm"
        onClick={toggleTheme}
        // className=" hidden"
      />
    </div>
  );
};
