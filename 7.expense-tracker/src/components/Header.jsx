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
        <p className="font-bold  text-blue-300 font-serif text-xl ">
          MY BUDGET
        </p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign out
          </Button>
        </NavbarItem>
        <NavbarItem>
          {" "}
          <Switch
            defaultSelected
            aria-label="Automatic updates"
            onClick={toggleTheme}
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
