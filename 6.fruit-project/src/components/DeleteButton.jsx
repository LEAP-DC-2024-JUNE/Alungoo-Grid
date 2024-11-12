"use client";

import { useRouter } from "next/navigation";
import TrashLogo from "./svg/TrashLogo";

const DeleteButton = ({ id }) => {
  const router = useRouter();
  const deleted = async () => {
    const deletedId = await fetch(`http://127.0.0.1:3001/api/goods/${id}`).then(
      (response) => response.json(),
      {
        method: "DELETE",
      }
    );

    if (deletedId.ok) {
      router.push("/goods");
    } else {
    }
  };
  return (
    <button className="  hover:bg-red-100" onClick={deleted}>
      <TrashLogo />
    </button>
  );
};
export default DeleteButton;
