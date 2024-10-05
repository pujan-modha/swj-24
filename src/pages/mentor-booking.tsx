import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
import Mentor_details from "../data/mentor_details";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import axios from "axios";

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

  const handleBooking = async (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setIsDialogOpen(true);
  };

  const confirmBooking = async () => {
    if (!selectedMentor) return;

    setIsBooking(true);

    // Simulating a backend API call
    try {
      console.log(teamId, selectedMentor.name);
      const response: any = await axios.post(
        "https://swj-server.ayushcodings.me/api/v1/team/bookMentor",
        {
          teamCode: teamId,
          mentor: selectedMentor.name,
        }
      );
      toast({
        title: "Success",
        description: `Booked a session for the team ${response.data.data.teamName} with ${selectedMentor.name}.`,
        className: "bg-green-500",
        variant: "default",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response.data.message,
        variant: "destructive",
      });
    } finally {
      setIsBooking(false);
      setIsDialogOpen(false);
      setTeamId("");
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
              <Card className="h-full flex flex-col border-2 border-brand bg-brand/10">
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
                <CardFooter>
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
                className="rounded-full mb-2"
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
