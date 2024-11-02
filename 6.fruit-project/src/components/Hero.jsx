import Link from "next/link";

export const Hero = () => {
  return (
    <div>
      <div>WELCOME TO SHOP</div>
      <Link href="/goods">
        <button className="border-2">please click here to shop</button>
      </Link>
    </div>
  );
};
