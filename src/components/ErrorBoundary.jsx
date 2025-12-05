import React from "react";
import { AlertCircle, Mail, Phone } from "lucide-react";
import * as Sentry from "@sentry/react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    Sentry.captureException(error, { extra: errorInfo });
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
          <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border border-red-100">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-xl font-bold text-gray-800 text-center mb-4">
              Unexpected Error
            </h1>

            {/* Message */}
            <p className="text-gray-600 text-center mb-6">
              We encountered an unexpected error. Please contact our admin team
              to resolve this problem.
            </p>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-3 mb-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  example@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">098xxxxxx</span>
              </div>
            </div>

            {/* Footer Note */}
            <p className="text-sm text-gray-500 text-center italic">
              Your report is very important to us!
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
