import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router";
import { Lightbulb, Code, Palette, TrendingUp, DollarSign, Target, User, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function TeamUp() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"idea" | "skill">("idea");

  const skills = [
    { name: "UI/UX Design", icon: Palette, color: "from-pink-500 to-rose-500" },
    { name: "Web Development", icon: Code, color: "from-blue-500 to-cyan-500" },
    { name: "App Development", icon: Code, color: "from-purple-500 to-indigo-500" },
    { name: "Marketing", icon: TrendingUp, color: "from-orange-500 to-amber-500" },
    { name: "Finance", icon: DollarSign, color: "from-green-500 to-emerald-500" },
    { name: "Strategy", icon: Target, color: "from-red-500 to-pink-500" }
  ];

  const ideas = [
    {
      title: "EcoTrack - Sustainability App",
      description: "Mobile app to track personal carbon footprint and suggest eco-friendly alternatives",
      skills: ["App Development", "UI/UX Design", "Marketing"],
      teamSize: "3-4 members",
      owner: "Sarah Chen"
    },
    {
      title: "StudyBuddy - AI Tutor Platform",
      description: "AI-powered platform that provides personalized tutoring for university students",
      skills: ["Web Development", "AI/ML", "UI/UX Design"],
      teamSize: "4-5 members",
      owner: "Michael Rodriguez"
    },
    {
      title: "LocalBiz Connect",
      description: "Platform connecting local businesses with student freelancers for projects",
      skills: ["Web Development", "Marketing", "Finance"],
      teamSize: "3-4 members",
      owner: "Emily Watson"
    },
    {
      title: "FitCampus - Campus Fitness Network",
      description: "Social fitness app for university students to find workout partners and classes",
      skills: ["App Development", "UI/UX Design", "Marketing"],
      teamSize: "3-4 members",
      owner: "David Kim"
    }
  ];

  const profiles = [
    {
      name: "Alex Johnson",
      skills: ["Web Development", "Backend"],
      bio: "Full-stack developer passionate about building scalable solutions",
      university: "MIT",
      year: "Junior"
    },
    {
      name: "Priya Patel",
      skills: ["UI/UX Design", "Product Design"],
      bio: "Designer focused on creating intuitive user experiences",
      university: "Stanford",
      year: "Senior"
    },
    {
      name: "James Lee",
      skills: ["Marketing", "Growth"],
      bio: "Growth hacker with experience in startup marketing strategies",
      university: "Berkeley",
      year: "Senior"
    },
    {
      name: "Sofia Martinez",
      skills: ["App Development", "iOS"],
      bio: "iOS developer building beautiful mobile experiences",
      university: "CMU",
      year: "Junior"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
              <img src="https://harmless-tapir-303.convex.cloud/api/storage/e8782043-502f-42c7-80c7-40fe01ad8b24" alt="UniSpark" className="h-10 w-10" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">UniSpark</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => navigate("/events")} className="text-gray-700 hover:text-purple-600 transition-colors">Events</button>
              <button onClick={() => navigate("/team-up")} className="text-purple-600 font-semibold">Team Up</button>
              <button onClick={() => navigate("/investors")} className="text-gray-700 hover:text-purple-600 transition-colors">Investors</button>
              <Button onClick={() => navigate("/auth")} variant="outline">Sign In</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Find Your Co-Founder
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Match with talented students to build your startup dream team
          </p>
        </motion.div>

        {/* Tab Selector */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            onClick={() => setActiveTab("idea")}
            variant={activeTab === "idea" ? "default" : "outline"}
            size="lg"
            className={activeTab === "idea" ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
          >
            <Lightbulb className="w-5 h-5 mr-2" />
            I Have an Idea
          </Button>
          <Button
            onClick={() => setActiveTab("skill")}
            variant={activeTab === "skill" ? "default" : "outline"}
            size="lg"
            className={activeTab === "skill" ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
          >
            <Code className="w-5 h-5 mr-2" />
            I Have Skills
          </Button>
        </div>

        {/* I Have an Idea Section */}
        {activeTab === "idea" && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="mb-12 border-2 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Post Your Idea</CardTitle>
                <CardDescription>Tell us about your startup idea and find the perfect co-founders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Idea Title</label>
                  <Input placeholder="e.g., AI-Powered Study Assistant" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Problem You're Solving</label>
                  <Textarea placeholder="Describe the problem your startup will solve..." rows={4} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Skills Needed</label>
                  <Input placeholder="e.g., Web Development, UI/UX Design, Marketing" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Team Size</label>
                  <Input placeholder="e.g., 3-4 members" />
                </div>
                <Button onClick={() => navigate("/post-idea")} size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Find Builders
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* I Have Skills Section */}
        {activeTab === "skill" && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="mb-12 border-2 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">What Are Your Skills?</CardTitle>
                <CardDescription>Select your skills to find projects that need your expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Card className="cursor-pointer border-2 hover:border-purple-400 transition-all shadow-md hover:shadow-lg">
                        <CardContent className="p-6 text-center">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mx-auto mb-3`}>
                            <skill.icon className="w-6 h-6 text-white" />
                          </div>
                          <p className="font-semibold">{skill.name}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Join a Project
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Co-Founder Matching Area */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Available Ideas */}
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Available Ideas
            </h2>
            <div className="space-y-4">
              {ideas.map((idea, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="border-2 hover:border-purple-300 transition-all shadow-md hover:shadow-xl">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{idea.title}</CardTitle>
                          <CardDescription className="text-sm text-gray-600 mb-3">{idea.description}</CardDescription>
                        </div>
                        <Lightbulb className="w-8 h-8 text-purple-500 flex-shrink-0 ml-2" />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {idea.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {idea.owner}
                        </span>
                        <span>{idea.teamSize}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">Express Interest</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Available Talent */}
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Available Talent
            </h2>
            <div className="space-y-4">
              {profiles.map((profile, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="border-2 hover:border-purple-300 transition-all shadow-md hover:shadow-xl">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                          {profile.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-1">{profile.name}</CardTitle>
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <MapPin className="w-3 h-3" />
                            {profile.university} • {profile.year}
                          </div>
                          <CardDescription className="mb-3">{profile.bio}</CardDescription>
                          <div className="flex flex-wrap gap-2">
                            {profile.skills.map((skill, i) => (
                              <Badge key={i} variant="secondary">{skill}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        <Mail className="w-4 h-4 mr-2" />
                        Connect
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
