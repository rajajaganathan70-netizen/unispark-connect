import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router";
import { Calendar, MapPin, Users, Trophy, Code, Presentation, Sparkles } from "lucide-react";

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

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "Hackathon":
        return "bg-blue-100 text-blue-700 hover:bg-blue-200";
      case "Pitch Event":
        return "bg-purple-100 text-purple-700 hover:bg-purple-200";
      case "Workshop":
        return "bg-pink-100 text-pink-700 hover:bg-pink-200";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
              <img src="https://harmless-tapir-303.convex.cloud/api/storage/5178ae7a-f761-4842-be18-5fb520d6f4b9" alt="UniSpark" className="h-10 w-10" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">UniSpark</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => navigate("/events")} className="text-green-600 font-semibold">Events</button>
              <button onClick={() => navigate("/team-up")} className="text-gray-700 hover:text-green-600 transition-colors">Team Up</button>
              <button onClick={() => navigate("/investors")} className="text-gray-700 hover:text-green-600 transition-colors">Investors</button>
              <Button onClick={() => navigate("/auth")} variant="outline">Sign In</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Discover Amazing Events</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
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
          className="mb-16"
        >
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
            
            <CardHeader className="relative z-10 pb-4">
              <div className="flex items-start justify-between mb-4">
                <Badge className="bg-yellow-400 text-yellow-900 border-0 hover:bg-yellow-500">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Featured Event
                </Badge>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl md:text-4xl text-white mb-4">{featuredEvent.title}</CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-white/90 mb-4">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                      <Calendar className="w-4 h-4" />
                      {featuredEvent.date}
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                      <MapPin className="w-4 h-4" />
                      {featuredEvent.location}
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                      <Users className="w-4 h-4" />
                      {featuredEvent.attendees} attendees
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-white/90 text-lg mb-6 max-w-3xl">{featuredEvent.description}</p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg">
                Register Now
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Events Grid */}
          <div>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl ${getTypeColor(event.type)} flex items-center justify-center shadow-md`}>
                        <event.icon className="w-7 h-7 text-white" />
                      </div>
                      <Badge className={getTypeBadgeColor(event.type)}>{event.type}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-3 line-clamp-2">{event.title}</CardTitle>
                    <CardDescription className="text-sm mb-4 line-clamp-2">{event.description}</CardDescription>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full hover:bg-green-50 hover:text-green-600 hover:border-green-300 transition-colors">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}