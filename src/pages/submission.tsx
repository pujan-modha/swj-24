import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  // CardDescription,
} from "@/components/ui/card";
import { useState } from "react";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

interface IdeaSubmissionProps {
  round: 1 | 2;
}

export default function IdeaSubmission({ round }: IdeaSubmissionProps) {
  const [participantCode, setParticipantCode] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res: any = await axios.post(
        "https://swj-server.ayushcodings.me/api/v1/idea/add",
        { title, description, ownerCode: participantCode }
      );
      toast({
        title: res.data.data.name,
        description: `Your idea has been submitted successfully!`,
        variant: "default",
        className: "bg-green-500",
      });
      setParticipantCode("");
      setTitle("");
      setDescription("");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response.data.message,
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <div className="container mx-auto p-6 min-h-[70svh] mt-24">
        <Card className="w-full max-w-2xl mx-auto border-2 bg-brand/10 border-brand">
          <CardHeader>
            <CardTitle className="text-3xl text-brand text-center font-bold">
              Idea Submission
            </CardTitle>
            {/* <CardDescription className="text-lg">Round {round}</CardDescription> */}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {round === 1 ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="userId">Participant Code</Label>
                    <Input
                      id="userId"
                      placeholder="Enter your Participant Code"
                      required
                      maxLength={6}
                      minLength={6}
                      value={participantCode}
                      onChange={(e) =>
                        setParticipantCode(e.target.value.toUpperCase())
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter the title of your idea"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your idea"
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="min-h-[150px] border-2 border-brand"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="teamId">Team ID</Label>
                    <Input
                      id="teamId"
                      placeholder="Enter your Team ID"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter the title of your idea"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="file">File Upload</Label>
                    <Input id="file" type="file" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your idea"
                      required
                      className="min-h-[150px] border-2 border-brand"
                    />
                  </div>
                </>
              )}
              <Button type="submit" className="w-full rounded-full">
                Submit Idea
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Toaster />
    </>
  );
}
