import React from "react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CheckCircle, Activity, Users, Zap, Database, Shield, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

export function Platform() {
  const features = [
    {
      title: "Specialty Clinics",
      description: "Six verticalized healthcare solutions designed to meet the specific needs of different medical specialties.",
      icon: Activity,
      benefits: [
        "Customized workflows for each specialty",
        "Integrated patient management",
        "Real-time analytics and reporting",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Engineering Pods",
      description: "Dedicated engineering teams focused on specific healthcare challenges and solutions.",
      icon: Users,
      benefits: [
        "Agile development methodology",
        "Direct collaboration with healthcare providers",
        "Rapid prototyping and deployment",
      ],
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      title: "Forward Deployed Engineers",
      description: "Embedded engineers working directly with healthcare organizations to drive innovation.",
      icon: Zap,
      benefits: [
        "On-site technical expertise",
        "Custom solution development",
        "Continuous optimization and support",
      ],
      gradient: "from-teal-500 to-blue-500",
    },
    {
      title: "LocalInfranet",
      description: "Public, transactional infrastructure that makes healthcare data accessible and actionable.",
      icon: Database,
      benefits: [
        "Easy data importing and exporting",
        "Secure transaction processing",
        "Seamless system integration",
      ],
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Hipster Infra",
      description: "High-availability infrastructure designed to ensure continuous operation of critical healthcare systems.",
      icon: Shield,
      benefits: [
        "99.99% uptime guarantee",
        "Automated failover and recovery",
        "Enterprise-grade security",
      ],
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/15"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative text-center">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            Enterprise Platform
          </Badge>
          <h1 className="mb-6">Our Platform</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive healthcare infrastructure platform designed to empower medical professionals with cutting-edge AI and cloud technology.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-24">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <ImageWithFallback
                        src={index % 2 === 0 
                          ? "https://images.unsplash.com/photo-1758691462668-046fd85ceac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxNzEzMDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          : "https://images.unsplash.com/photo-1758574437870-f83c160efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYxNjQ0NzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        }
                        alt={feature.title}
                        className="relative w-full h-80 object-cover rounded-2xl shadow-xl"
                      />
                    </div>
                  </div>
                  
                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="mb-4">{feature.title}</h2>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    <ul className="space-y-3 mb-6">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/30 to-accent/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-4">Built for Scale</h2>
            <p className="text-muted-foreground">Enterprise-grade infrastructure you can rely on</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-primary mb-2">99.99%</div>
              <h4 className="mb-2">Uptime SLA</h4>
              <p className="text-muted-foreground">Guaranteed availability for critical healthcare operations</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-primary mb-2">&lt; 100ms</div>
              <h4 className="mb-2">Response Time</h4>
              <p className="text-muted-foreground">Lightning-fast performance for real-time applications</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-primary mb-2">SOC 2 Type II</div>
              <h4 className="mb-2">Compliant</h4>
              <p className="text-muted-foreground">Full HIPAA and SOC 2 compliance certification</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
