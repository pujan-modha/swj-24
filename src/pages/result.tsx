import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RegistrationResult() {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 240, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });
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
