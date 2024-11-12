"use client";
import { useRouter } from "next/navigation";
import TrashLogo from "./svg/TrashLogo";

const DeleteButton = ({ id }) => {
  const router = useRouter();
  console.log(id);
  const deleted = async () => {
    //   const deletedId = await fetch(`http://127.0.0.1:3001/api/goods/${id}`).then(
    //     (response) => response.json(),
    const response = await fetch(`http://127.0.0.1:3001/api/goods/${id}`, {
      method: "DELETE", // Specify DELETE method
    });

    if (response.ok) {
      // Redirect to /goods after successful deletion
      router.push("/goods");
    } else {
      // Handle error if delete request fails

      alert("Failed to delete item. Please try again.");
    }
  };

  return (
    <button className="  hover:bg-red-100" onClick={deleted}>
      <TrashLogo />
    </button>
  );
};
export default DeleteButton;
