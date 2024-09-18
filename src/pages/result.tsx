import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RegistrationResult() {
  const location = useLocation();
  const [status, setStatus] = useState<"success" | "failure" | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    console.log(searchParams);
    const result = searchParams.get("result");
    if (result === "success") {
      setStatus("success");
    } else if (result === "failure") {
      setStatus("failure");
    }
  }, [location]);

  if (status === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full border-2 border-brand bg-brand/10 max-w-md rounded-lg shadow-md overflow-hidden">
        <div className="p-6 ">
          <h2 className="text-2xl font-bold text-center mb-4">
            {status === "success"
              ? "Registration Successful"
              : "Registration Failed"}
          </h2>
          <div className="flex flex-col items-center space-y-4">
            {status === "success" ? (
              <CheckCircle2 className="w-16 h-16 text-green-500" />
            ) : (
              <XCircle className="w-16 h-16 text-red-500" />
            )}
            <p className="text-center text-white">
              {status === "success"
                ? "Congratulations! Your registration for Startup Weekend Jaipur has been successfully completed. We're excited to have you join us!"
                : "We're sorry, but there was an issue with your registration. Please try again or contact our support team for assistance."}
            </p>
          </div>
        </div>
        <div className="px-6 py-4 ">
          <Link to="/">
            <Button className="w-full font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
              {status === "success" ? "Return to Home" : "Try Again"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
