import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface IdeaSubmissionProps {
  round: 1 | 2;
}

export default function IdeaSubmission({ round }: IdeaSubmissionProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="container mx-auto p-6 min-h-[100svh] mt-24">
      <Card className="w-full max-w-2xl mx-auto border-2 border-brand">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Idea Submission</CardTitle>
          <CardDescription>Round {round}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {round === 1 ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="userId">User ID</Label>
                  <Input
                    id="userId"
                    placeholder="Enter your User ID"
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
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your idea"
                    required
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
  );
}
