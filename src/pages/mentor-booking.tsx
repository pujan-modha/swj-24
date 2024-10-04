import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
import Mentor_details from "../data/mentor_details";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

interface Mentor {
  id: number;
  name: string;
  expertise: string;
  photoUrl: string;
}

const mockMentors: Mentor[] = Mentor_details;

export default function MentorBooking() {
  const [mentors] = useState<Mentor[]>(mockMentors);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [teamId, setTeamId] = useState("");
  const [isBooking, setIsBooking] = useState(false);
  const [storedTeamId, setStoredTeamId] = useState("");

  const handleBooking = async (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setIsDialogOpen(true);
  };

  const confirmBooking = async () => {
    if (!selectedMentor) return;

    setIsBooking(true);
    setStoredTeamId(teamId);

    // Simulating a backend API call
    try {
      const response = await new Promise<{ success: boolean; message: string }>(
        (resolve) =>
          setTimeout(() => {
            // Simulating different response codes
            if (storedTeamId === "12345") {
              resolve({
                success: true,
                message: "Mentor session booked successfully.",
              });
            } else if (storedTeamId === "00000") {
              resolve({
                success: false,
                message:
                  "Your team has already booked a session with this mentor.",
              });
            } else {
              resolve({ success: false, message: "Invalid team ID." });
            }
          }, 1000)
      );

      if (response.success) {
        toast({
          title: "Booking Confirmed",
          description: response.message,
        });
      } else {
        toast({
          title: "Booking Failed",
          description: response.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsBooking(false);
      setIsDialogOpen(false);
      setTeamId("");
      setStoredTeamId("");
    }
  };

  return (
    <>
      <div className="container mx-auto p-6 mt-24 min-h-[100svh]">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Book a Session with a Mentor
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col border-2 border-brand bg-background">
                <CardHeader>
                  <img
                    src={mentor.photoUrl}
                    alt={mentor.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle className="text-xl font-bold text-center">
                    {mentor.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground text-center">
                    {mentor.expertise}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow">
                  {/* Add more mentor details here if needed */}
                </CardContent>
                <CardFooter className="hidden">
                  <Button
                    className="w-full rounded-full"
                    onClick={() => handleBooking(mentor)}
                  >
                    Book a Session
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="border-2 border-brand">
            <DialogHeader>
              <DialogTitle className="text-brand">
                Confirm Your Booking
              </DialogTitle>
              <DialogDescription>
                Please enter your team ID to book a session with{" "}
                {selectedMentor?.name}.
              </DialogDescription>
            </DialogHeader>
            <Input
              placeholder="Enter your team ID"
              className="text-brand"
              value={teamId}
              onChange={(e) => setTeamId(e.target.value)}
            />
            <DialogFooter>
              <Button
                className="rounded-full"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className="rounded-full"
                onClick={confirmBooking}
                disabled={!teamId || isBooking}
              >
                {isBooking ? "Booking..." : "Confirm Booking"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Toaster />
    </>
  );
}
