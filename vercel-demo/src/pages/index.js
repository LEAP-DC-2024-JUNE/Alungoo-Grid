import { Products } from "@/components/Products";
import ResponsiveDemo from "@/components/ResponsiveDemo";
import LoginStatus from "../components/LoginStatus";

export default function Home() {
  return (
    <div>
      Hello
      <Products />
      <ResponsiveDemo />
      <LoginStatus status={LogedIn} />
    </div>
  );
}
