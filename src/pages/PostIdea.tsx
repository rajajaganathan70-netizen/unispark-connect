import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router";
import { Lightbulb, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function PostIdea() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Idea Posted Successfully!", {
      description: "We'll match you with potential co-founders soon."
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
              <img src="https://harmless-tapir-303.convex.cloud/api/storage/e8782043-502f-42c7-80c7-40fe01ad8b24" alt="UniSpark" className="h-10 w-10" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">UniSpark</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => navigate("/events")} className="text-gray-700 hover:text-purple-600 transition-colors">Events</button>
              <button onClick={() => navigate("/team-up")} className="text-gray-700 hover:text-purple-600 transition-colors">Team Up</button>
              <button onClick={() => navigate("/investors")} className="text-gray-700 hover:text-purple-600 transition-colors">Investors</button>
              <Button onClick={() => navigate("/auth")} variant="outline">Sign In</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Post Your Startup Idea
              </h1>
              <p className="text-lg text-gray-600">
                Share your vision and find the perfect co-founders to bring it to life
              </p>
            </div>

            <Card className="border-2 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Tell Us About Your Idea</CardTitle>
                <CardDescription>Fill out the details below to get matched with talented co-founders</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Idea Title *</label>
                    <Input 
                      placeholder="e.g., AI-Powered Study Assistant for University Students" 
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Description *</label>
                    <Textarea 
                      placeholder="Describe your startup idea, the problem it solves, and your vision for the product..."
                      rows={6}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Skills Required *</label>
                    <Input 
                      placeholder="e.g., Web Development, UI/UX Design, Marketing, Data Science"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">Separate multiple skills with commas</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Preferred Team Size</label>
                    <Input 
                      placeholder="e.g., 3-4 members"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Target Launch Date (Optional)</label>
                    <Input 
                      type="date"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Additional Notes</label>
                    <Textarea 
                      placeholder="Any other information potential co-founders should know..."
                      rows={3}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  >
                    Post Idea & Find Co-Founders
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                💡 <strong>Demo Prototype:</strong> This is just a demonstration. No data is saved.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-2 border-green-300 shadow-xl text-center">
              <CardContent className="py-12">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-green-600">Idea Posted Successfully!</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                  Your idea is now live on UniSpark. We'll notify you when potential co-founders express interest.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => navigate("/team-up")}
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  >
                    Browse Co-Founders
                  </Button>
                  <Button 
                    onClick={() => setSubmitted(false)}
                    size="lg"
                    variant="outline"
                  >
                    Post Another Idea
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}
