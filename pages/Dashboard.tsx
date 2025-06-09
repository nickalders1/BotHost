
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Server, Activity, Settings, Plus, BarChart3 } from "lucide-react";

const Dashboard = () => {
  const userBots = [
    {
      id: 1,
      name: "ModGuard Pro",
      status: "online",
      servers: 5,
      uptime: "99.9%",
      type: "rental",
      plan: "Premium"
    },
    {
      id: 2,
      name: "MusicMaster",
      status: "online", 
      servers: 12,
      uptime: "99.8%",
      type: "owned",
      plan: "Basic"
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
            <Button variant="ghost">Browse Bots</Button>
            <Button variant="ghost">Support</Button>
            <Button variant="outline">Account</Button>
            <Button>Logout</Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Manage your Discord bots</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New Bot
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Bots</CardTitle>
              <Bot className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">+1 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Servers</CardTitle>
              <Server className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">17</div>
              <p className="text-xs text-muted-foreground">+5 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Uptime</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">99.8%</div>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Cost</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$14.98</div>
              <p className="text-xs text-muted-foreground">Next billing: Dec 15</p>
            </CardContent>
          </Card>
        </div>

        {/* Bots List */}
        <Card>
          <CardHeader>
            <CardTitle>Your Bots</CardTitle>
            <CardDescription>Manage and monitor your Discord bots</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userBots.map((bot) => (
                <div key={bot.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Bot className="h-10 w-10 text-primary" />
                    <div>
                      <h3 className="font-semibold">{bot.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Badge variant={bot.status === 'online' ? 'default' : 'secondary'}>
                          {bot.status}
                        </Badge>
                        <span>{bot.servers} servers</span>
                        <span>Uptime: {bot.uptime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{bot.type}</Badge>
                    <Badge>{bot.plan}</Badge>
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
