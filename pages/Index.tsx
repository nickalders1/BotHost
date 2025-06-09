
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Server, Shield, Zap, Star, Users, MessageSquare, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredBots = [
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
    }
  ];

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
            <Link to="/browse">
              <Button variant="ghost">Browse Bots</Button>
            </Link>
            <Button variant="ghost">Pricing</Button>
            <Button variant="ghost">Support</Button>
            <Link to="/auth">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/auth">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Premium Discord Bots
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rent or buy high-quality, pre-built Discord bots. Get your server enhanced in minutes, not months.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/browse">
              <Button size="lg" className="text-lg px-8">
                Browse Bots
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose BotHost?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Instant Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get your bot running in seconds. No coding, no complex setup - just add to your server.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>99.9% Uptime</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reliable hosting with premium infrastructure. Your bots stay online 24/7.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Settings className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Easy Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Intuitive dashboard to manage all your bots, settings, and billing in one place.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Bots */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Bots</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredBots.map((bot) => (
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
                    {bot.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-primary rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
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
                    <Button variant="outline" className="flex-1">Rent</Button>
                    <Button className="flex-1">Buy Now</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Perfect for small servers</CardDescription>
                <div className="text-3xl font-bold">$5<span className="text-lg font-normal">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• 1 Bot</li>
                  <li>• Basic Support</li>
                  <li>• 99% Uptime</li>
                  <li>• Standard Features</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
            <Card className="border-primary">
              <CardHeader>
                <Badge className="w-fit mb-2">Most Popular</Badge>
                <CardTitle>Pro</CardTitle>
                <CardDescription>Great for growing communities</CardDescription>
                <div className="text-3xl font-bold">$15<span className="text-lg font-normal">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• 3 Bots</li>
                  <li>• Priority Support</li>
                  <li>• 99.9% Uptime</li>
                  <li>• Premium Features</li>
                  <li>• Custom Configurations</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large communities</CardDescription>
                <div className="text-3xl font-bold">$50<span className="text-lg font-normal">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Unlimited Bots</li>
                  <li>• 24/7 Support</li>
                  <li>• 99.99% Uptime</li>
                  <li>• All Features</li>
                  <li>• Custom Development</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">BotHost</span>
              </div>
              <p className="text-muted-foreground">
                The premier platform for Discord bot hosting and management.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/browse">Browse Bots</Link></li>
                <li>Pricing</li>
                <li>Features</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Documentation</li>
                <li>Contact Us</li>
                <li>Status</li>
                <li>Discord</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 BotHost. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
