import { BrowserRouter as Router, Routes, Route } from "react-router";
import * as zod from "zod";

import React, { Suspense } from "react";

import Home from "./pages/Home";
import LoadingFallback from "./components/LoadingFallback";
import TestError from "./pages/TestError";
import Sentry from "./pages/Sentry";

const PropKey = React.lazy(() => import("./pages/PropKey"));
const Counter = React.lazy(() => import("./pages/Counter"));

zod.config(zod.locales.vi());

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prop-key" element={<PropKey />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/test-error" element={<TestError />} />
          <Route path="/sentry" element={<Sentry />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
