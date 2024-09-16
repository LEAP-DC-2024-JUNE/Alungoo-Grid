import { useEffect, useState } from "react";

const ItsMounted = () => {
  const { mounted, setMounted } = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
};
export default ItsMounted;
