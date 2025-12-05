import React, { useRef, useState } from "react";
import CounterComponent from "./Counter";

function Counter() {
  const counterRef = useRef();

  const [random, setRandom] = useState(Math.random());
  const [reset, setReset] = useState(0);
  const handleRandom = () => {
    setRandom(Math.random());
  };
  const handleReset = () => {
    setReset(reset + 1);
  };

  const handleResetRef = () => {
    counterRef.current.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Counter
        </h1>

        <div className="space-y-8">
          {/* Method 1 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Reset counter by key prop
            </h2>
            <div className="flex items-center gap-4">
              <button
                onClick={handleRandom}
                className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors"
              >
                Reset
              </button>
              <CounterComponent key={random} />
            </div>
          </div>

          {/* Method 2 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Reset counter by reset function
            </h2>
            <div className="flex items-center gap-4">
              <button
                onClick={handleReset}
                className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors"
              >
                Reset
              </button>
              <CounterComponent reset={reset} />
            </div>
          </div>

          {/* Method 3 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Reset counter by ref
            </h2>
            <div className="flex items-center gap-4">
              <button
                onClick={handleResetRef}
                className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors"
              >
                Reset
              </button>
              <CounterComponent ref={counterRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
