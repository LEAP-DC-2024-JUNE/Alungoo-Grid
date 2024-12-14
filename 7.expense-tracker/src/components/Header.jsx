"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import LogIn from "./LogIn/Login";

export default function Header() {
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
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold  text-blue-100  text-xl ">MY BUDGET</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            {/* <LogIn /> */}
            Log In
          </Button>
        </NavbarItem>
        <NavbarItem>
          {" "}
          <Switch defaultSelected size="sm" onClick={toggleTheme} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
