import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://07c4a67dad01d6e6c2cf5bff3fd7af18@o4510482690015232.ingest.us.sentry.io/4510482691522560",
  sendDefaultPii: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </ErrorBoundary>
);
