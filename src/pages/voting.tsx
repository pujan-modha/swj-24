import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
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

interface Idea {
  id: number;
  name: string;
  title: string;
  description: string;
  category: string;
}

const mockIdeas: Idea[] = [
  {
    id: 1,
    name: "John Doe",
    title: "AI-powered Recycling",
    description:
      "An AI system that automatically sorts recyclables for efficient waste management.",
    category: "Environment",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Virtual Reality Education",
    description:
      "Using VR to create immersive learning experiences for students of all ages.",
    category: "Education",
  },
  {
    id: 3,
    name: "Alex Johnson",
    title: "Smart Urban Farming",
    description:
      "Vertical farming solution with IoT sensors for optimal crop growth in cities.",
    category: "Agriculture",
  },
  {
    id: 4,
    name: "Emily Brown",
    title: "Blockchain for Medical Records",
    description:
      "Secure and decentralized storage of medical records using blockchain technology.",
    category: "Healthcare",
  },
  {
    id: 5,
    name: "Michael Lee",
    title: "Augmented Reality Navigation",
    description:
      "AR-based navigation system for pedestrians and cyclists in urban environments.",
    category: "Technology",
  },
];

export default function VotingForIdeas() {
  const [ideas] = useState<Idea[]>(mockIdeas);
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [participantId, setParticipantId] = useState("");
  const [isConfirming, setIsConfirming] = useState(false);
  const [storedParticipantId, setStoredParticipantId] = useState("");

  const handleVote = async (idea: Idea) => {
    setSelectedIdea(idea);
    setIsDialogOpen(true);
  };

  const confirmVote = async () => {
    if (!selectedIdea) return;

    setIsConfirming(true);
    setStoredParticipantId(participantId);

    // Simulating a backend API call
    try {
      const response = await new Promise<{ success: boolean; message: string }>(
        (resolve) =>
          setTimeout(() => {
            // Simulating different response codes
            if (storedParticipantId === "12345") {
              resolve({
                success: true,
                message: "Vote successfully recorded.",
              });
            } else if (storedParticipantId === "00000") {
              resolve({ success: false, message: "You have already voted." });
            } else {
              resolve({ success: false, message: "Invalid participant ID." });
            }
          }, 1000)
      );

      if (response.success) {
        toast({
          title: "Vote Confirmed",
          description: response.message,
        });
      } else {
        toast({
          title: "Vote Failed",
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
      setIsConfirming(false);
      setIsDialogOpen(false);
      setParticipantId("");
      setStoredParticipantId("");
    }
  };

  return (
    <>
      <div className="container mx-auto p-6 mt-24 min-h-[100svh]">
        <h1 className="text-4xl font-bold mb-8 text-center">Vote for Ideas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea, index) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col border-2 border-brand bg-background">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    {idea.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    By {idea.name}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm">{idea.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full rounded-full"
                    onClick={() => handleVote(idea)}
                  >
                    Vote for This Idea
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
                Confirm Your Vote
              </DialogTitle>
              <DialogDescription>
                Please enter your participant ID to vote for "
                {selectedIdea?.title}".
              </DialogDescription>
            </DialogHeader>
            <Input
              placeholder="Enter your participant ID"
              className="text-brand"
              value={participantId}
              onChange={(e) => setParticipantId(e.target.value)}
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
                onClick={confirmVote}
                disabled={!participantId || isConfirming}
              >
                {isConfirming ? "Confirming..." : "Confirm Vote"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Toaster />
    </>
  );
}
