import { useState, useEffect } from "react";
export default function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, []);

  return (
    <div>
      <button
        className="border-2 bg-slate-300"
        onClick={() => setCount(count + 1)}
      >
        You clicked {count} times
      </button>
    </div>
  );
}
