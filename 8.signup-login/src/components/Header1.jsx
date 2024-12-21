"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import LoginModal from "./LoginModal";
import { useDisclosure } from "@nextui-org/react";
import { AcmeLogo } from "@/svg/AcmeLogo";

export default function Header1() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Navbar isBordered isBlurred={false}>
        <NavbarBrand>
          <Link href="/">
            <AcmeLogo />
            <p className="font-bold text-inherit">Blog</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Write Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" color="foreground">
              Blogs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Authors
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button color="primary" variant="flat" onPress={onOpen}>
              <Link href="/login">Log In</Link>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {/* <LoginModal isOpen={isOpen} onOpenChange={onOpenChange} /> */}
    </>
  );
}
