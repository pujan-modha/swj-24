import { useEffect, useState } from "react";
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
import axios from "axios";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Idea {
  _id: string;
  name: string;
  title: string;
  description: string;
  owner: string;
  ownerCode: string;
  votes: [string];
}

export default function VotingForIdeas() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [participantId, setParticipantId] = useState("");
  const [isConfirming, setIsConfirming] = useState(false);

  const handleVote = async (idea: Idea) => {
    setSelectedIdea(idea);
    setIsDialogOpen(true);
  };

  const fetchIdeas = async () => {
    const res = await axios.get(
      "https://swj-server.ayushcodings.me/api/v1/idea/getAll"
    );
    setIdeas(res.data.data);
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  const confirmVote = async () => {
    if (!selectedIdea) return;

    setIsConfirming(true);

    // Simulating a backend API call
    try {
      const response: any = await axios.post(
        "https://swj-server.ayushcodings.me/api/v1/idea/vote",
        {
          ideaId: selectedIdea._id,
          voterCode: participantId,
        }
      );
      toast({
        title: "Vote Confirmed",
        description: `Voted as ${response.data.data.name} for ${selectedIdea.title}`,
        variant: "default",
        className: "bg-green-500",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response.data.message,
        variant: "destructive",
      });
    } finally {
      setIsConfirming(false);
      setIsDialogOpen(false);
      setParticipantId("");
    }
  };

  return (
    <>
      <div className="container mx-auto p-6 mt-24 min-h-[100svh]">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Voting will start soon
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea, index) => (
            <motion.div
              key={idea._id}
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
                    By {idea.owner.name}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ScrollArea className="h-36">
                    <p className="text-sm">{idea.description}</p>
                  </ScrollArea>
                </CardContent>
                <CardFooter className="hidden">
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
                Please enter your participant code to vote for "
                {selectedIdea?.title}".
              </DialogDescription>
            </DialogHeader>
            <Input
              placeholder="Enter your participant code"
              className="text-brand"
              value={participantId}
              maxLength={6}
              minLength={6}
              onChange={(e) => setParticipantId(e.target.value.toUpperCase())}
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
