import { useState, ChangeEvent } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  registrationNumber: string;
  branch: string;
  year: string;
  phone: string;
  email: string;
  address: string;
  college: string;
}

export default function CampusAmbassador() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    registrationNumber: "",
    branch: "",
    year: "",
    address: "",
    phone: "",
    email: "",
    college: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
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
        "https://swj-server.ayushcodings.me/api/v1/ambassador/new",
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

  return (
    <div className="mt-20 max-w-[80rem] mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Startup Weekend Jaipur</h1>
          <p className="text-muted-foreground mb-6">
            📢 Become a Campus Ambassador for Startup Weekend Jaipur! 💫
          </p>
          <p className="text-muted-foreground mb-6">
            Startup Weekend Jaipur is the ultimate 54-hour adventure where ideas
            come to life, teams unite, and startups are born. Join the
            passionate innovators at SWJ to help us shape the future of
            entrepreneurship!
          </p>
          <p className="text-muted-foreground mb-6">
            Your rewards grow with each registration milestone you hit. You'll
            receive the rewards for any past achievements.
          </p>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold mb-2">Perks & Rewards</h2>
              <p className="text-muted-foreground">
                3 Registrations: 👕 Receive an exclusive SWJ certificate and a
                branded t-shirt.
              </p>
              <p className="text-muted-foreground">
                5 Registrations: 🎟️ Unlock a free pass to the SWJ event.{" "}
              </p>
              <p className="text-muted-foreground">
                10 Registrations: 🎁 Get a special gift hamper packed with
                surprises!
              </p>
            </div>
          </div>
        </div>
        <div>
          <Card className="flex flex-col border-2 border-brand bg-brand/10">
            <CardHeader>
              <CardTitle className="text-brand">Registration Form</CardTitle>
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
                  <Label htmlFor="email">Email ID</Label>
                  <Input
                    id="email"
                    placeholder="Enter your Email ID"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="college">College Name</Label>
                  <Input
                    id="college"
                    placeholder="Enter your College Name"
                    value={formData.college}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    placeholder="Enter your current address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
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
