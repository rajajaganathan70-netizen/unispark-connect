import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router";
import { TrendingUp, Briefcase, Target, Lightbulb, CheckCircle, Users } from "lucide-react";

export default function Investors() {
  const navigate = useNavigate();

  const investors = [
    {
      name: "Sarah Mitchell",
      firm: "Campus Ventures",
      focus: ["EdTech", "AI", "SaaS"],
      stage: "Student Projects",
      description: "Former founder turned investor, passionate about supporting student entrepreneurs"
    },
    {
      name: "David Chen",
      firm: "Early Stage Capital",
      focus: ["Mobile Apps", "Consumer Tech", "Social"],
      stage: "Early Idea",
      description: "Angel investor with 15+ years experience in tech startups"
    },
    {
      name: "Maria Rodriguez",
      firm: "Innovation Fund",
      focus: ["HealthTech", "Sustainability", "Impact"],
      stage: "Prototype",
      description: "Impact investor focused on startups solving real-world problems"
    },
    {
      name: "James Park",
      firm: "Tech Accelerator",
      focus: ["AI/ML", "Web3", "Developer Tools"],
      stage: "Student Projects",
      description: "Technical investor and mentor for early-stage tech companies"
    },
    {
      name: "Emily Watson",
      firm: "Student Ventures",
      focus: ["Marketplace", "E-commerce", "Fintech"],
      stage: "Early Idea",
      description: "Specializes in student-founded companies with strong market potential"
    },
    {
      name: "Robert Kim",
      firm: "University Angels",
      focus: ["EdTech", "Productivity", "Collaboration"],
      stage: "Prototype",
      description: "University alumni investing back in the next generation of founders"
    }
  ];

  const startups = [
    {
      logo: "📚",
      title: "StudySync",
      pitch: "AI-powered collaborative study platform for university students",
      stage: "Prototype",
      team: "4 members"
    },
    {
      logo: "🌱",
      title: "GreenCampus",
      pitch: "Sustainability tracking app for university campuses",
      stage: "Early Idea",
      team: "3 members"
    },
    {
      logo: "💼",
      title: "CareerLaunch",
      pitch: "Job matching platform connecting students with startups",
      stage: "MVP",
      team: "5 members"
    },
    {
      logo: "🎨",
      title: "DesignHub",
      pitch: "Marketplace for student designers and freelance projects",
      stage: "Prototype",
      team: "3 members"
    }
  ];

  const steps = [
    {
      icon: Lightbulb,
      title: "Students Upload Idea",
      description: "Share your startup vision and progress on the platform"
    },
    {
      icon: Target,
      title: "Platform Filters Top Ideas",
      description: "Our algorithm highlights the most promising student startups"
    },
    {
      icon: Users,
      title: "Investors Browse & Connect",
      description: "Investors discover and reach out to promising student founders"
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
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">UniSpark</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => navigate("/events")} className="text-gray-700 hover:text-purple-600 transition-colors">Events</button>
              <button onClick={() => navigate("/team-up")} className="text-gray-700 hover:text-purple-600 transition-colors">Team Up</button>
              <button onClick={() => navigate("/investors")} className="text-purple-600 font-semibold">Investors</button>
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
          <h1 className="text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Investor Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with student-friendly investors who believe in your vision
          </p>
        </motion.div>

        {/* Featured Investors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Featured Investors
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investors.map((investor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full border-2 hover:border-green-300 transition-all shadow-md hover:shadow-xl">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                        {investor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <Badge variant="secondary">{investor.stage}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-1">{investor.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <Briefcase className="w-4 h-4" />
                      {investor.firm}
                    </div>
                    <CardDescription className="mb-3">{investor.description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {investor.focus.map((area, i) => (
                        <Badge key={i} className="bg-green-100 text-green-700 hover:bg-green-200">{area}</Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Request Review</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Startup Discovery Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Startup Discovery Showcase
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {startups.map((startup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full border-2 hover:border-purple-300 transition-all shadow-md hover:shadow-xl">
                  <CardHeader className="text-center">
                    <div className="text-5xl mb-3">{startup.logo}</div>
                    <CardTitle className="text-xl mb-2">{startup.title}</CardTitle>
                    <CardDescription className="mb-3">{startup.pitch}</CardDescription>
                    <div className="flex justify-center gap-2">
                      <Badge variant="secondary">{startup.stage}</Badge>
                      <Badge variant="outline">{startup.team}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">View Pitch</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            How Investor Connect Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center border-2 hover:border-purple-300 transition-all shadow-md hover:shadow-xl">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-green-600 mb-2">Step {index + 1}</div>
                    <CardTitle className="text-xl mb-3">{step.title}</CardTitle>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-green-600 to-emerald-600 border-0 shadow-2xl">
            <CardHeader className="text-center py-12">
              <CardTitle className="text-4xl font-bold text-white mb-4">
                Ready to Get Funded?
              </CardTitle>
              <CardDescription className="text-xl text-white/90 mb-8">
                Share your startup idea and connect with investors today
              </CardDescription>
              <Button onClick={() => navigate("/post-idea")} size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Submit Your Startup
              </Button>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="border-2 border-yellow-300 bg-yellow-50">
            <CardContent className="py-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-2">Demo Prototype Disclaimer</h3>
                  <p className="text-sm text-yellow-800">
                    This is a demonstration prototype for a hackathon. Actual investment transactions are not handled through this platform. 
                    All investor profiles and startup listings are for illustrative purposes only.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
