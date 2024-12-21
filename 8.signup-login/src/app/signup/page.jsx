"use client";
import { useState } from "react";
import { signup } from "@/utils/apiService";
import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/input";
import React from "react";
import ButtonMain from "@/components/ButtonMain";
import EyeSlashFilledIcon from "@/svg/EyeSlashFilledIcon";
import EyeFilledIcon from "@/svg/EyeFilledIcon";
const SignupPage = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // preventiin html default zan tolov
    try {
      await signup(formData);
      router.push("/login"); // singup hiitsen bol login ruu vsernee
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Something is wrong");
    }
  };

  return (
    <div className="flex flex-col px-[250px] items-center mt-[200px]">
      <h1 className=" xl:text-2xl text-blue-500 font-bold ">Signup</h1>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-4 mt-4">
        <Input
          className="max-w-[300px]"
          label="Name"
          placeholder="Enter your name"
          type="text"
          name="name"
          variant="faded"
          value={formData.name}
          onChange={handleChange}
        />
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
        <Input
          className="max-w-[300px]"
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-none"
              color="primary"
              type="button"
              name="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
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
          label="Confirm Password"
          placeholder="Confirm your password"
          type={isVisible ? "text" : "password"}
          variant="faded"
        />

        <div className=" text-center">
          {/* <ButtonMain signUp="Sign Up" /> */}
          <button>Sign up</button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};
export default SignupPage;
