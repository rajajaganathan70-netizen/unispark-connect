import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router";
import { Users, Calendar, TrendingUp, Shield, Lightbulb, UserPlus, Rocket } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Verified University Students",
      description: "Only for verified university students - a trusted community"
    },
    {
      icon: Users,
      title: "Find Co-Founders Instantly",
      description: "Match with skilled teammates who share your vision"
    },
    {
      icon: Calendar,
      title: "Join Hackathons & Pitch Events",
      description: "Participate in exciting competitions and showcase your ideas"
    },
    {
      icon: TrendingUp,
      title: "Connect With Investors",
      description: "Get noticed by student-friendly investors and mentors"
    }
  ];

  const steps = [
    {
      icon: Lightbulb,
      title: "Post Your Idea",
      description: "Share your vision and what you're building"
    },
    {
      icon: UserPlus,
      title: "Build a Team",
      description: "Find co-founders with complementary skills"
    },
    {
      icon: Rocket,
      title: "Pitch to Investors",
      description: "Get funding and mentorship for your startup"
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
              <button onClick={() => navigate("/team-up")} className="text-gray-700 hover:text-purple-600 transition-colors">Team Up</button>
              <button onClick={() => navigate("/investors")} className="text-gray-700 hover:text-purple-600 transition-colors">Investors</button>
              <Button onClick={() => navigate("/auth")} variant="outline">Sign In</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Find Co-Founders, Join Hackathons, Connect With Investors
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            UniSpark helps students with ideas match with skilled teammates and get noticed by investors — all inside your university.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={() => navigate("/team-up")} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
              Find Co-Founder
            </Button>
            <Button onClick={() => navigate("/events")} size="lg" variant="outline">
              View Events
            </Button>
            <Button onClick={() => navigate("/investors")} size="lg" variant="outline">
              Investor Connect
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Why UniSpark */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Why UniSpark?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full border-2 hover:border-green-300 transition-all shadow-md hover:shadow-xl">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <Card className="text-center border-2 hover:border-green-300 transition-all shadow-md hover:shadow-xl">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-green-600 mb-2">Step {index + 1}</div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-green-600 to-emerald-600 border-0 shadow-2xl">
            <CardHeader className="text-center py-12">
              <CardTitle className="text-4xl font-bold text-white mb-4">
                Ready to Start Your Startup Journey?
              </CardTitle>
              <CardDescription className="text-xl text-white/90 mb-8">
                Join thousands of student entrepreneurs building the future
              </CardDescription>
              <div className="flex flex-wrap justify-center gap-4">
                <Button onClick={() => navigate("/post-idea")} size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                  Post Your Idea
                </Button>
                <Button onClick={() => navigate("/team-up")} size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Find Your Team
                </Button>
              </div>
            </CardHeader>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">© 2024 UniSpark. Hackathon Demo Prototype.</p>
            <p className="text-sm">This is a static prototype for demonstration purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
