"use client";
import React from "react";
import { useState } from "react";
import { login } from "@/utils/apiService";
import { useRouter } from "next/navigation";
import ButtonMain from "../../components/ButtonMain";
import Link from "next/link";
import { Input } from "@nextui-org/input";
import EyeSlashFilledIcon from "@/svg/EyeSlashFilledIcon";
import EyeFilledIcon from "@/svg/EyeFilledIcon";

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await login(formData);
      localStorage.setItem("token", token);
      router.push("/");
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Something is wrong");
    }
  };

  return (
    <div className="flex flex-col px-[250px] items-center mt-[200px]">
      <h1 className=" xl:text-2xl text-blue-600 font-bold ">Log In</h1>

      <form onSubmit={handleSubmit} className=" flex flex-col gap-4 mt-4">
        <Input
          className="max-w-[300px]"
          label="Email"
          placeholder="Enter your email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="faded"
        />
        <Input
          className="max-w-[300px]"
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-none"
              color="primary"
              type="button"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          label="Password"
          placeholder="Enter your password"
          type={isVisible ? "text" : "password"}
          variant="faded"
        />

        <div className=" text-center">
          <button type=" submit">Log in</button>
          {/* <ButtonMain logIn="Log in" /> */}
        </div>
        <div className=" text-center flex gap-2">
          <p className=" text-sm">Don't have an account ?</p>
          <Link href="/signup" className=" text-blue-400 text-sm ">
            Sign up
          </Link>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
