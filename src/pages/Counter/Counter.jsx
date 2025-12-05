import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

const CounterComponent = forwardRef(({ reset }, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    reset() {
      setCount(0);
    },
  }));

  useEffect(() => {
    setCount(0);
  }, [reset]);

  return (
    <div
      onClick={() => setCount(count + 1)}
      className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg cursor-pointer transition-colors select-none"
    >
      Count is {count}
    </div>
  );
});

CounterComponent.displayName = "CounterComponent";

export default CounterComponent;
