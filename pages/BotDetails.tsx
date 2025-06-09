
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Star, Users, MessageSquare, Settings, ArrowLeft, Shield, Zap, Music } from "lucide-react";

const BotDetails = () => {
  const [selectedPlan, setSelectedPlan] = useState<'rent' | 'buy'>('rent');

  const bot = {
    id: 1,
    name: "ModGuard Pro",
    description: "Advanced moderation bot with AI-powered spam detection and auto-moderation features for Discord servers.",
    longDescription: "ModGuard Pro is the ultimate Discord moderation solution, featuring cutting-edge AI technology to automatically detect and prevent spam, toxic behavior, and rule violations. With comprehensive logging, custom commands, and real-time monitoring, your server will be protected 24/7.",
    price: "$9.99/month",
    oneTimePrice: "$49.99",
    features: [
      "AI-Powered Spam Detection",
      "Auto Moderation System", 
      "Custom Command Builder",
      "Comprehensive Logging",
      "Real-time Monitoring",
      "Multi-language Support"
    ],
    rating: 4.8,
    users: "25K+",
    category: "Moderation",
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg", 
      "/placeholder.svg"
    ],
    reviews: [
      {
        user: "ServerOwner123",
        rating: 5,
        comment: "Amazing bot! Reduced spam by 95% in our server.",
        date: "2024-01-15"
      },
      {
        user: "ModTeamLead",
        rating: 5,
        comment: "The AI detection is incredibly accurate. Highly recommended!",
        date: "2024-01-10"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Browse
            </Button>
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">BotHost</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Login</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Bot Header */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-start space-x-4 mb-6">
              <div className="h-20 w-20 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h1 className="text-3xl font-bold">{bot.name}</h1>
                  <Badge variant="secondary">{bot.category}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">{bot.description}</p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{bot.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{bot.users} users</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>Active support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <Card className="lg:sticky lg:top-4">
            <CardHeader>
              <CardTitle>Choose Your Plan</CardTitle>
              <CardDescription>Select how you want to use this bot</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant={selectedPlan === 'rent' ? 'default' : 'outline'}
                    onClick={() => setSelectedPlan('rent')}
                    className="h-16 flex flex-col"
                  >
                    <span className="text-sm">Rent</span>
                    <span className="font-bold">{bot.price}</span>
                  </Button>
                  <Button
                    variant={selectedPlan === 'buy' ? 'default' : 'outline'}
                    onClick={() => setSelectedPlan('buy')}
                    className="h-16 flex flex-col"
                  >
                    <span className="text-sm">Buy</span>
                    <span className="font-bold">{bot.oneTimePrice}</span>
                  </Button>
                </div>
                <Button className="w-full" size="lg">
                  {selectedPlan === 'rent' ? 'Start Rental' : 'Purchase Now'}
                </Button>
                <div className="text-xs text-muted-foreground text-center">
                  {selectedPlan === 'rent' 
                    ? 'Cancel anytime • 24/7 support' 
                    : 'One-time payment • Lifetime access'
                  }
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="screenshots">Screenshots</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About {bot.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {bot.longDescription}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
                <CardDescription>Everything included with {bot.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {bot.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <Zap className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="screenshots" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Screenshots</CardTitle>
                <CardDescription>See {bot.name} in action</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {bot.screenshots.map((screenshot, index) => (
                    <div key={index} className="aspect-video bg-muted rounded-lg border">
                      <img 
                        src={screenshot} 
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Reviews</CardTitle>
                <CardDescription>What users are saying about {bot.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bot.reviews.map((review, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{review.user}</span>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BotDetails;
