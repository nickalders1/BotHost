
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bot, Star, Users, MessageSquare, Search, Filter } from "lucide-react";

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const allBots = [
    {
      id: 1,
      name: "ModGuard Pro",
      description: "Advanced moderation bot with AI-powered spam detection and auto-moderation features.",
      price: "$9.99/month",
      oneTimePrice: "$49.99",
      features: ["AI Spam Detection", "Auto Moderation", "Custom Commands", "Logging"],
      rating: 4.8,
      users: "25K+",
      category: "Moderation"
    },
    {
      id: 2,
      name: "MusicMaster",
      description: "High-quality music bot with playlist support and premium audio quality.",
      price: "$4.99/month",
      oneTimePrice: "$24.99",
      features: ["HD Audio", "Playlist Support", "Queue Management", "Multi-Platform"],
      rating: 4.9,
      users: "50K+",
      category: "Music"
    },
    {
      id: 3,
      name: "GameHub",
      description: "Interactive gaming bot with mini-games, tournaments, and leaderboards.",
      price: "$7.99/month",
      oneTimePrice: "$39.99",
      features: ["Mini Games", "Tournaments", "Leaderboards", "Rewards System"],
      rating: 4.7,
      users: "15K+",
      category: "Gaming"
    },
    {
      id: 4,
      name: "ServerStats",
      description: "Comprehensive analytics and statistics tracking for your Discord server.",
      price: "$3.99/month",
      oneTimePrice: "$19.99",
      features: ["Member Analytics", "Activity Tracking", "Custom Reports", "Export Data"],
      rating: 4.6,
      users: "8K+",
      category: "Analytics"
    },
    {
      id: 5,
      name: "WelcomeBot",
      description: "Beautiful welcome messages and member onboarding automation.",
      price: "$2.99/month",
      oneTimePrice: "$14.99",
      features: ["Custom Welcome", "Role Assignment", "Verification", "Templates"],
      rating: 4.5,
      users: "30K+",
      category: "Utility"
    },
    {
      id: 6,
      name: "EconomyPlus",
      description: "Complete economy system with currency, shops, and trading features.",
      price: "$6.99/month",
      oneTimePrice: "$34.99",
      features: ["Virtual Currency", "Shop System", "Trading", "Bank Features"],
      rating: 4.7,
      users: "18K+",
      category: "Economy"
    }
  ];

  const categories = ["all", "Moderation", "Music", "Gaming", "Analytics", "Utility", "Economy"];

  const filteredBots = allBots.filter(bot => {
    const matchesSearch = bot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         bot.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || bot.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">BotHost</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Dashboard</Button>
            <Button variant="ghost">Support</Button>
            <Button variant="outline">Login</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Browse Discord Bots</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover and rent premium Discord bots to enhance your server experience
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search bots..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredBots.length} of {allBots.length} bots
          </p>
        </div>

        {/* Bots Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBots.map((bot) => (
            <Card key={bot.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="secondary">{bot.category}</Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{bot.rating}</span>
                  </div>
                </div>
                <CardTitle className="flex items-center space-x-2">
                  <Bot className="h-6 w-6" />
                  <span>{bot.name}</span>
                </CardTitle>
                <CardDescription>{bot.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{bot.users}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>Active</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {bot.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-primary rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {bot.features.length > 3 && (
                    <div className="text-sm text-muted-foreground">
                      +{bot.features.length - 3} more features
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <div className="flex justify-between items-center w-full">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Rent</p>
                    <p className="font-bold text-lg">{bot.price}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Buy</p>
                    <p className="font-bold text-lg">{bot.oneTimePrice}</p>
                  </div>
                </div>
                <div className="flex space-x-2 w-full">
                  <Button variant="outline" className="flex-1">View Details</Button>
                  <Button className="flex-1">Get Started</Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredBots.length === 0 && (
          <div className="text-center py-12">
            <Bot className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No bots found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
