"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

  const handleVote = (idea: Idea) => {
    // Handle voting logic here
    console.log(`Voted for idea: ${idea.title}`);
    // You might want to send a request to your backend here
  };

  return (
    <div className="container mx-auto p-6 min-h-[100svh] mt-24">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Vote for Ideas
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ideas.map((idea, index) => (
          <motion.div
            key={idea.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col border-2 border-brand bg-background">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle className="text-xl font-bold">
                    {idea.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    By {idea.name}
                  </p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="default"
                      className="rounded-full"
                      size="sm"
                      onClick={() => setSelectedIdea(idea)}
                    >
                      Vote
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="border-2 border-brand">
                    <DialogHeader>
                      <DialogTitle className="text-white">Confirm Your Vote</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to vote for "{selectedIdea?.title}
                        " by {selectedIdea?.name}?
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button
                        variant="default"
                        className="rounded-full"
                        onClick={() => setSelectedIdea(null)}
                      >
                        Cancel
                      </Button>
                      <Button
                      className="rounded-full"
                        onClick={() => {
                          if (selectedIdea) handleVote(selectedIdea);
                          setSelectedIdea(null);
                        }}
                      >
                        Confirm Vote
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm">{idea.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
