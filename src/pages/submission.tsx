import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { Info } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { Link } from "react-router-dom";

export default function IdeaSubmission() {
  const [formData, setFormData] = useState({
    teamCode: "",
    mobile: "",
    altMobile: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDataToSend = new FormData();

    formDataToSend.append("teamCode", formData.teamCode);
    formDataToSend.append("mobile", formData.mobile);
    formDataToSend.append("altMobile", formData.altMobile);
    if (file) {
      formDataToSend.append("ppt", file);
    }

    try {
      setIsSubmitting(true);
      await axios.post(
        "https://swj-server.ayushcodings.me/api/v1/submission/new",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setIsSubmitting(false);
      toast({
        title: "Success",
        description: "Your idea has been submitted successfully!",
        variant: "default",
        className: "bg-green-500",
      });
      // Reset form after successful submission
      setFormData({
        teamCode: "",
        mobile: "",
        altMobile: "",
      });
      setFile(null);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "An error occurred",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    const getOpen = async () => {
      try {
        const res = await axios.get(
          "https://swj-server.ayushcodings.me/api/v1/submission/getFlag"
        );
        setOpen(res.data.data.flag);
        // console.log(res.data.data.flag);
      } catch (error) {
        console.log(error);
      }
    };
    getOpen();
  });

  if (!open) {
    return (
      <div className="min-h-screen flex items-center justify-center  p-4">
        <div className="w-full border-2 border-brand bg-brand/10 max-w-md rounded-lg shadow-md overflow-hidden">
          <div className="p-6 ">
            <div className="flex flex-col items-center space-y-4">
              <Info className="w-16 h-16 text-gray-200" />
              <h2 className="text-2xl font-bold text-center mb-4">
                Submission Window Closed
              </h2>
              <p className="text-center text-white">
                The submission window for Startup Weekend Jaipur is closed.
                Submission windows will open at 10:45 AM IST.
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
    <>
      <div className="container mx-auto p-6 min-h-[70svh] mt-24">
        <Card className="w-full max-w-2xl mx-auto border-2 bg-brand/10 border-brand">
          <CardHeader>
            <CardTitle className="text-3xl text-brand text-center font-bold">
              Idea Submission - Round 2
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="teamCode">Team Code</Label>
                <Input
                  id="teamCode"
                  placeholder="Enter your Team Code"
                  required
                  value={formData.teamCode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex space-x-4">
                <div className="space-y-1 w-full">
                  <Label htmlFor="mobile">Mobile</Label>
                  <Input
                    id="mobile"
                    placeholder="Enter your mobile number"
                    required
                    value={formData.mobile}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-1 w-full">
                  <Label htmlFor="altMobile">Alternate Mobile</Label>
                  <Input
                    id="altMobile"
                    placeholder="Enter alternate mobile number"
                    required
                    value={formData.altMobile}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="file">File Upload</Label>
                <Input
                  id="file"
                  type="file"
                  required
                  onChange={handleFileChange}
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Idea"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Toaster />
    </>
  );
}
