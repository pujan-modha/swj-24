import { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AOS from "aos";
import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import "aos/dist/aos.css";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  registrationNumber: string;
  branch: string;
  year: string;
  phone: string;
  residence: string;
  email: string;
  tid: string;
  referral: string;
  screenshot: File | null;
}

export default function Register() {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 240, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    registrationNumber: "",
    branch: "",
    year: "",
    residence: "",
    phone: "",
    email: "",
    tid: "",
    referral: "",
    screenshot: null,
  });
  const [full, setFull] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    getRegistrationCount().then((count) => {
      if (count < 125) {
        setFull(false);
      }
    });
  }, []);

  const getRegistrationCount = async () => {
    try {
      const res = await axios.get(
        "https://swj-server.ayushcodings.me/api/v1/registration/count"
      );
      return res.data.data;
    } catch (error) {
      console.error("Registration count error:", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, residence: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, screenshot: file }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        formDataToSend.append(key, value);
      }
    });

    try {
      await axios.post(
        "https://swj-server.ayushcodings.me/api/v1/registration/new",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      navigate(`/result?result=success`);
    } catch (error) {
      console.error("Registration error:", error);
      navigate(`/result?result=failure`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (full) {
    return (
      <div className="min-h-screen flex items-center justify-center  p-4">
        <div className="w-full border-2 border-brand bg-brand/10 max-w-md rounded-lg shadow-md overflow-hidden">
          <div className="p-6 ">
            <div className="flex flex-col items-center space-y-4">
              <Info className="w-16 h-16 text-gray-200" />
              <h2 className="text-2xl font-bold text-center mb-4">
                Registration Window Closed
              </h2>
              <p className="text-center text-white">
                We're sorry, but the registration window for Startup Weekend
                Jaipur has been closed. Any payments made to the QR code will
                not be refunded.
              </p>
            </div>
          </div>
          <div className="px-6 py-4 ">
            <Link to="/">
              <Button className="w-full font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 max-w-[80rem] mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div data-aos="fade-right">
          <h1 className="text-3xl font-bold mb-4">Startup Weekend Jaipur</h1>
          <p className="text-muted-foreground mb-6">
            Startup Weekend Jaipur 🚀 is a three-day program where aspiring
            entrepreneurs can experience the startup life.
          </p>
          <p className="text-muted-foreground mb-6">
            You get the best mentors, investors, co-founders, and sponsors, 🧑‍🏫🤝
            to help you learn what it really takes to innovate, disrupt, and
            start a business. 💼🔥
          </p>
          <p className="text-muted-foreground mb-6">
            It's about pitching, 🎤 business model creation 📊, prototyping 🛠️,
            designing 🎨, and market validation ✅, in a friendly and supportive
            team environment. 🌟
          </p>
          <p className="text-muted-foreground mb-6">
            You have 54 hours to change the world! 💪🎉
          </p>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold mb-2">Event Details</h2>
              <p className="text-muted-foreground">
                Duration: 3 days (Friday to Sunday)
              </p>
              <p className="text-muted-foreground">Registration Fee: ₹800</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <Card className="flex flex-col border-2 border-brand bg-brand/10">
            <CardHeader>
              <CardTitle className="text-brand">
                Registration Form (In-House)
              </CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="flex-1 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber">
                      Registration Number
                    </Label>
                    <Input
                      id="registrationNumber"
                      placeholder="Enter your registration number"
                      value={formData.registrationNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="branch">Branch</Label>
                    <Input
                      id="branch"
                      placeholder="Enter your branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year of Study</Label>
                    <Input
                      id="year"
                      placeholder="Enter your year of study"
                      value={formData.year}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="Enter your Phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="residence">Residence</Label>
                  <Select onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your residence" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hosteller">Hosteller</SelectItem>
                      <SelectItem value="day-scholar">Day Scholar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email ID</Label>
                  <Input
                    id="email"
                    placeholder="Enter your Email ID"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="tid">Referral</Label>
                  <Input
                    id="referral"
                    placeholder="Enter the Referral name (if applicable)"
                    value={formData.referral}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tid">Transaction ID</Label>
                    <Input
                      id="tid"
                      placeholder="Enter your transaction ID"
                      value={formData.tid}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="screenshot">Payment Screenshot</Label>
                    <Input
                      id="screenshot"
                      type="file"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Label
                    htmlFor="agree-to-event-agreement"
                    className="text-sm text-pretty text-muted-foreground"
                  >
                    By registering, you acknowledge that your provided
                    information will be used in accordance with the relevant SWJ
                    guidelines.
                  </Label>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <a href="upi://pay?pa=AICMUJ@icici&pn=MUJ&tr=EZYS9116629865&cu=INR&am=800">
                    <img
                      src="/qr.png"
                      width={200}
                      height={200}
                      alt="Payment QR Code"
                      style={{ aspectRatio: "1/1", objectFit: "cover" }}
                    />
                  </a>
                  <Label htmlFor="qr-code" className="text-sm mt-2">
                    Scan or click on the QR to pay
                  </Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
