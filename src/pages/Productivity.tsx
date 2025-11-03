import React from "react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Activity, Users, Zap, Database, BarChart3, TrendingUp, Clock, Target, Bell } from "lucide-react";

export function Productivity() {
  const features = [
    {
      title: "Multi-Level View",
      description: "Comprehensive visibility across all levels of your healthcare organization",
      icon: Activity,
      details: [
        "Organization-wide metrics",
        "Department-level insights",
        "Individual performance tracking",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Clinic Scoreboard",
      description: "Real-time performance metrics for all clinics in your network",
      icon: Users,
      details: [
        "Patient satisfaction scores",
        "Appointment completion rates",
        "Resource utilization metrics",
      ],
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      title: "Strike Accuracy",
      description: "Precision tracking for diagnostic and treatment outcomes",
      icon: Target,
      details: [
        "Diagnostic accuracy rates",
        "Treatment success metrics",
        "Quality assurance tracking",
      ],
      gradient: "from-teal-500 to-blue-500",
    },
    {
      title: "Personal Productivity",
      description: "Individual performance dashboards for healthcare professionals",
      icon: TrendingUp,
      details: [
        "Personal metrics tracking",
        "Goal setting and achievement",
        "Time management insights",
      ],
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Real-Time Analytics",
      description: "Live data processing and visualization for instant insights",
      icon: BarChart3,
      details: [
        "Live data streams",
        "Automated reporting",
        "Predictive analytics",
      ],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Efficiency Metrics",
      description: "Track and optimize operational efficiency across your organization",
      icon: Clock,
      details: [
        "Wait time analysis",
        "Resource allocation optimization",
        "Process bottleneck identification",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Data Integration",
      description: "Seamless integration with existing healthcare systems and databases",
      icon: Database,
      details: [
        "EHR system integration",
        "Lab results automation",
        "Billing system connectivity",
      ],
      gradient: "from-pink-500 to-red-500",
    },
    {
      title: "Performance Trends",
      description: "Historical analysis and trend forecasting for strategic planning",
      icon: Zap,
      details: [
        "Historical data analysis",
        "Trend forecasting",
        "Predictive modeling",
      ],
      gradient: "from-red-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden" style={{ backgroundColor: '#F8FAFB' }}>
        <div className="container mx-auto max-w-4xl relative text-center">
          <Badge className="mb-4 bg-primary text-white animate-pulse">Coming Soon</Badge>
          <h1 className="mb-6">Productivity Dashboard</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A real-time view of HROS plant trends, strike accuracy, client projections, and cloud adoption metrics. Transform your healthcare operations with data-driven insights.
          </p>
          <Button size="lg" className="group">
            <Bell className="mr-2 h-5 w-5" />
            Notify Me When Available
          </Button>
        </div>
      </section>

      {/* Preview Section with Mock Dashboard */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F8FAFB' }}>
        <div className="container mx-auto max-w-6xl">
          <Card className="p-8 bg-gradient-to-br from-card to-secondary/30 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 rounded-xl text-white">
                <div className="mb-2">Real-Time</div>
                <p className="text-white/80">Live updates every second</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-6 rounded-xl text-white">
                <div className="mb-2">Customizable</div>
                <p className="text-white/80">Tailored to your needs</p>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-blue-500 p-6 rounded-xl text-white">
                <div className="mb-2">Actionable</div>
                <p className="text-white/80">Insights you can act on</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-6 rounded-xl text-white">
                <div className="mb-2">Integrated</div>
                <p className="text-white/80">Works with your systems</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F8FAFB' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-4">Powerful Features</h2>
            <p className="text-muted-foreground">Everything you need to optimize healthcare operations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 group cursor-pointer">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F8FAFB' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Why Teams Love Our Dashboard</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2">Intuitive Interface</h4>
                    <p className="text-muted-foreground">Designed with healthcare professionals in mind. No training required.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2">Lightning Fast</h4>
                    <p className="text-muted-foreground">Real-time updates and instant insights at your fingertips.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2">Comprehensive Data</h4>
                    <p className="text-muted-foreground">All your metrics in one place, updated in real-time.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="text-primary mb-2">85%</div>
                <p className="text-muted-foreground">Efficiency Increase</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-accent/20 to-accent/30">
                <div className="text-primary mb-2">50%</div>
                <p className="text-muted-foreground">Time Saved</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/40">
                <div className="text-primary mb-2">95%</div>
                <p className="text-muted-foreground">User Satisfaction</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/20">
                <div className="text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Monitoring</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F8FAFB' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="p-12 bg-gradient-to-br from-primary to-primary/80 text-white">
            <h2 className="mb-4 text-white">Be the First to Know</h2>
            <p className="mb-8 text-white/90">
              Join our early access list and get notified when the Productivity Dashboard launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button variant="secondary" size="lg">
                Notify Me
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
