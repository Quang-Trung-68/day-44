import { useNavigate } from "react-router";
import { Key, Calculator, AlertTriangle, Bug } from "lucide-react";

function Home() {
  const navigate = useNavigate();

  const routes = [
    {
      path: "/prop-key",
      label: "Prop Key",
      icon: Key,
      color: "blue",
    },
    {
      path: "/counter",
      label: "Counter",
      icon: Calculator,
      color: "purple",
    },
    {
      path: "/test-error",
      label: "Test Error",
      icon: AlertTriangle,
      color: "red",
    },
    {
      path: "/sentry",
      label: "Sentry",
      icon: Bug,
      color: "red",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome</h1>
          <p className="text-gray-600">Choose a demo to explore</p>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <button
                key={route.path}
                onClick={() => navigate(route.path)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-200 hover:-translate-y-1 border border-gray-100 group"
              >
                <div
                  className={`w-12 h-12 bg-${route.color}-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-6 h-6 text-${route.color}-600`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {route.label}
                </h3>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
