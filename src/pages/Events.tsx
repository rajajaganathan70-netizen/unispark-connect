import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router";
import { Calendar, MapPin, Users, Trophy, Code, Presentation } from "lucide-react";

export default function Events() {
  const navigate = useNavigate();

  const featuredEvent = {
    title: "UniSpark Startup Pitch Competition 2024",
    date: "March 15, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "University Innovation Hub",
    description: "Present your startup idea to top investors and win up to $10,000 in seed funding. Network with fellow entrepreneurs and get expert feedback.",
    attendees: 150,
    type: "Pitch Event"
  };

  const events = [
    {
      title: "AI Hackathon: Build the Future",
      date: "March 22-24, 2024",
      time: "48 Hours",
      location: "Computer Science Building",
      description: "Join us for an intensive 48-hour hackathon focused on AI and machine learning solutions.",
      attendees: 200,
      type: "Hackathon",
      icon: Code
    },
    {
      title: "Startup Workshop: From Idea to MVP",
      date: "March 28, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Business School Auditorium",
      description: "Learn how to validate your idea and build your minimum viable product with industry experts.",
      attendees: 80,
      type: "Workshop",
      icon: Presentation
    },
    {
      title: "Web3 & Blockchain Hackathon",
      date: "April 5-7, 2024",
      time: "72 Hours",
      location: "Engineering Campus",
      description: "Build decentralized applications and explore the future of blockchain technology.",
      attendees: 180,
      type: "Hackathon",
      icon: Code
    },
    {
      title: "Investor Networking Night",
      date: "April 12, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "University Club",
      description: "Meet angel investors and VCs interested in student startups. Bring your pitch deck!",
      attendees: 60,
      type: "Pitch Event",
      icon: Trophy
    },
    {
      title: "Mobile App Development Sprint",
      date: "April 19-20, 2024",
      time: "24 Hours",
      location: "Innovation Lab",
      description: "Create innovative mobile applications in this fast-paced development sprint.",
      attendees: 120,
      type: "Hackathon",
      icon: Code
    },
    {
      title: "Product Design & UX Workshop",
      date: "April 26, 2024",
      time: "1:00 PM - 5:00 PM",
      location: "Design Studio",
      description: "Master the fundamentals of product design and user experience with hands-on exercises.",
      attendees: 50,
      type: "Workshop",
      icon: Presentation
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Hackathon":
        return "bg-blue-500";
      case "Pitch Event":
        return "bg-purple-500";
      case "Workshop":
        return "bg-pink-500";
      default:
        return "bg-gray-500";
    }
  };

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
              <button onClick={() => navigate("/events")} className="text-purple-600 font-semibold">Events</button>
              <button onClick={() => navigate("/team-up")} className="text-gray-700 hover:text-purple-600 transition-colors">Team Up</button>
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
            Events & Hackathons
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join exciting competitions, workshops, and networking events to grow your startup
          </p>
        </motion.div>

        {/* Featured Event */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="border-2 border-purple-300 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                Featured Event
              </Badge>
            </div>
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl mb-2">{featuredEvent.title}</CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredEvent.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {featuredEvent.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {featuredEvent.attendees} attendees
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-6">{featuredEvent.description}</CardDescription>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Register Now
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full border-2 hover:border-purple-300 transition-all shadow-md hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-lg ${getTypeColor(event.type)} flex items-center justify-center`}>
                      <event.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary">{event.type}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {event.attendees} attendees
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{event.description}</CardDescription>
                  <Button variant="outline" className="w-full">Register Now</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
