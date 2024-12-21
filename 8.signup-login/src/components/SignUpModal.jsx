"use client";
import { useState } from "react";
import { signup } from "@/utils/apiService";
import { useRouter } from "next/navigation";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";

export const MailIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const LockIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M12.0011 17.3498C12.9013 17.3498 13.6311 16.6201 13.6311 15.7198C13.6311 14.8196 12.9013 14.0898 12.0011 14.0898C11.1009 14.0898 10.3711 14.8196 10.3711 15.7198C10.3711 16.6201 11.1009 17.3498 12.0011 17.3498Z"
        fill="currentColor"
      />
      <path
        d="M18.28 9.53V8.28C18.28 5.58 17.63 2 12 2C6.37 2 5.72 5.58 5.72 8.28V9.53C2.92 9.88 2 11.3 2 14.79V16.65C2 20.75 3.25 22 7.35 22H16.65C20.75 22 22 20.75 22 16.65V14.79C22 11.3 21.08 9.88 18.28 9.53ZM12 18.74C10.33 18.74 8.98 17.38 8.98 15.72C8.98 14.05 10.34 12.7 12 12.7C13.66 12.7 15.02 14.06 15.02 15.72C15.02 17.39 13.67 18.74 12 18.74ZM7.35 9.44C7.27 9.44 7.2 9.44 7.12 9.44V8.28C7.12 5.35 7.95 3.4 12 3.4C16.05 3.4 16.88 5.35 16.88 8.28V9.45C16.8 9.45 16.73 9.45 16.65 9.45H7.35V9.44Z"
        fill="currentColor"
      />
    </svg>
  );
};

const SignUpModal = ({ isSignUpOpen, onSignUpOpenChange }) => {
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
    <>
      <Modal
        isSignUpOpen={isSignUpOpen}
        placement="top-center"
        onSignUpOpenChange={onSignUpOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Your Name"
                  placeholder="Enter your Name"
                  variant="bordered"
                  type="Name"
                  name="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Confirm Password"
                  placeholder="Enter your password again"
                  type="password"
                  variant="bordered"
                  name="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter className=" flex flex-col">
                <Button
                  color="primary"
                  onClick={onClose}
                  onPress={handleSubmit}
                >
                  Sign Up
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
    //     <div className="flex flex-col gap-10 px-[250px] items-center mt-[300px]">
    //       <h1 className=" xl:text-2xl text-blue-600 font-bold ">Signup</h1>
    //       <form onSubmit={handleSubmit}>
    //         <input
    //           name="name"
    //           placeholder="Name"
    //           value={formData.name}
    //           onChange={handleChange}
    //           className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
    //           required
    //         />
    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="Email"
    //           value={formData.email}
    //           onChange={handleChange}
    //           className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
    //           required
    //         />
    //         <input
    //           type="password"
    //           name="password"
    //           placeholder="Password"
    //           value={formData.password}
    //           onChange={handleChange}
    //           className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
    //           required
    //         />
    //         <input
    //           type="password"
    //           name="confirmPassword"
    //           placeholder="Confirm Password"
    //           value={formData.confirmPassword}
    //           onChange={handleChange}
    //           className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
    //           required
    //         />
    //         <div className=" text-center">
    //           <button
    //             type="submit"
    //             className="border-2 bg-slate-200 mt-10 rounded-md px-3 py-0.5 "
    //           >
    //             {" "}
    //             Sign Up
    //           </button>
    //         </div>
    //         {error && <p style={{ color: "red" }}>{error}</p>}
    //       </form>
    //     </div>
  );
};
export default SignUpModal;
