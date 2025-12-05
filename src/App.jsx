import { BrowserRouter as Router, Routes, Route } from "react-router";
import * as zod from "zod";

import Home from "./pages/Home";
import PropKey from "./pages/PropKey";

zod.config(zod.locales.vi());

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prop-key" element={<PropKey />} />
      </Routes>
    </Router>
  );
}

// Export App component để main.jsx import và render
export default App;
