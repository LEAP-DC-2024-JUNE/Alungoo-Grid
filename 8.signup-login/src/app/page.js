"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [isAuth, setAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(false);
    router.refresh();
  };

  return (
    <div className=" flex">
      {isAuth ? (
        <div>
          <h1 className=" font-bold"> You are logged in ! </h1>
          <button onClick={handleLogout} className="bg-gray-200 px-4">
            Logout
          </button>
        </div>
      ) : (
        <div className=" ">
          <h1 className=" font-bold ">
            You are <span className="text-red-600 underline">not </span> logged
            in!
          </h1>
          {/* <button
            className=" bg-blue-500 text-white font-medium px-2 rounded-md py-1"
            onClick={() => router.push("/login")}
          >
            Go to login page
          </button> */}
        </div>
      )}
    </div>
  );
};

export default HomePage;
