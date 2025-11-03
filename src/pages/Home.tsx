import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Activity, Users, Zap, Database, CheckCircle, TrendingUp, Shield, Calendar, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import ravinderImg from "figma:asset/7ae981ee052246e4de711cbd1bbce1628ae6e085.png";
import pulkitImg from "figma:asset/ea31a049dea35c8dc009c8267a6de1c52d2a28d2.png";
import rashmithaImg from "figma:asset/7e0fe239ca79bd444ed7432c065415e28992ba17.png";
import healthcareAiHero from "../assets/healthcare-ai-hero.png";

export function Home() {
  const platforms = [
    {
      name: "PracticeExchange",
      tagline: "Turning 18-month acquisitions into 30-day transitions — giving every physician an exit path and every buyer a clear way in.",
      image: "https://images.unsplash.com/photo-1643055419804-397de33fe331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJhY3RpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE4MDQ1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "PracticeKit",
      tagline: "The 'practice-in-a-box' for every specialty — world-class care delivered anywhere, powered by AI and data-driven workflows.",
      image: "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MTY5NTA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Payday",
      tagline: "Seamless payment processing and financial operations for healthcare — making transactions as simple as care should be.",
      image: "https://images.unsplash.com/photo-1758598304167-ebf66988f924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXltZW50JTIwdHJhbnNhY3Rpb24lMjBtb2JpbGV8ZW58MXx8fHwxNzYxODA0NTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Transformer",
      tagline: "An evolving workforce of AI agents trained on real healthcare knowledge — automating today's pain points, powering tomorrow's breakthroughs.",
      image: "https://images.unsplash.com/photo-1759844197486-5b3612c7d534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxNzMzNTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Rounds",
      tagline: "Re-telling healthcare's human story — celebrating doctors, demystifying care, and inspiring the next generation of health builders.",
      image: "https://images.unsplash.com/photo-1573152143286-0c422b4d2175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBuZXR3b3JrJTIwY29ubmVjdGlvbnxlbnwxfHx8fDE3NjE3OTc2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Foundry",
      tagline: "The intelligence layer that learns from every clinic — transforming messy medical data into actionable, real-time insight.",
      image: "https://images.unsplash.com/photo-1722684768315-11fc753354f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYXJ0aWNsZSUyMHB1YmxpY2F0aW9ufGVufDF8fHx8MTc2MTgwNDU5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const productivityFeatures = [
    { title: "Multi-Level View", icon: Activity },
    { title: "Clinic Scoreboard", icon: Users },
    { title: "Strike Accuracy", icon: Zap },
    { title: "Personal Productivity", icon: Database },
  ];

  const blogPosts = [
    { 
      title: "Building Scalable Healthcare Infrastructure", 
      author: "Dr. Sarah Chen", 
      date: "Oct 15, 2025",
      category: "Engineering",
      readTime: "5 min"
    },
    { 
      title: "The Future of Patient Data Management", 
      author: "Michael Rodriguez", 
      date: "Oct 10, 2025",
      category: "Data Science",
      readTime: "7 min"
    },
    { 
      title: "Optimizing Clinic Workflows with Analytics", 
      author: "Emily Watson", 
      date: "Oct 5, 2025",
      category: "Product",
      readTime: "6 min"
    },
  ];

  const jobListings = [
    {
      title: "Senior Full Stack Engineer — Remote",
      description: "Build scalable healthcare infrastructure solutions with cutting-edge technologies.",
      id: 1,
      type: "Engineering",
    },
    {
      title: "AI/ML Research Scientist — San Francisco",
      description: "Develop AI models to improve diagnostic accuracy and patient outcomes.",
      id: 2,
      type: "Research",
    },
    {
      title: "Product Designer — New York",
      description: "Create intuitive user experiences for healthcare professionals and patients.",
      id: 3,
      type: "Design",
    },
    {
      title: "DevOps Engineer — Remote",
      description: "Maintain and improve our high-availability healthcare infrastructure.",
      id: 4,
      type: "Engineering",
    },
  ];

  const teamMembers = [
    {
      name: "Ravinder Syal",
      role: "Founder",
      image: ravinderImg,
      calendlyUrl: "https://calendly.com/ravindersyal",
      linkedinUrl: "https://linkedin.com/in/ravindersyal",
      email: "ravinder@company.com",
    },
    {
      name: "Pulkit Tiwari",
      role: "Chief Technology Officer",
      image: pulkitImg,
      calendlyUrl: "https://calendly.com/pulkittiwari",
      linkedinUrl: "https://linkedin.com/in/pulkittiwari",
      email: "pulkit@company.com",
    },
    {
      name: "Rashmitha Pittala",
      role: "Forward Deployed Engineer",
      image: rashmithaImg,
      calendlyUrl: "https://calendly.com/rashmithapittala",
      linkedinUrl: "https://linkedin.com/in/rashmithapittala",
      email: "rashmitha@company.com",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden bg-transparent">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={healthcareAiHero}
            alt="Healthcare AI - Medical professionals and AI technology working together"
            className="w-full h-full object-cover"
          />
          {/* Overlay - stronger overlay to make image lighter and text more visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/95 to-background/99"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-white/40"></div>
        </div>

        {/* Animated Content */}
        <div className="relative h-full flex items-center justify-center px-4 bg-transparent backdrop-blur-0">
          <div className="container mx-auto max-w-5xl text-center bg-transparent shadow-none border-0 backdrop-blur-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                Transforming Healthcare
              </Badge>
            </motion.div>

            <motion.h1
              className="mb-8 text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Building the AI Infrastructure for Medicine
            </motion.h1>

            <motion.p
              className="text-foreground mb-10 max-w-3xl mx-auto text-lg md:text-xl font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              We're creating specialty-specific healthcare clouds powered by forward-deployed engineering teams, combining practice ownership with cutting-edge AI to optimize outcomes across 50+ medical verticals.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Button size="lg" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Expert Results
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Precision</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Quality Reputation</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted-foreground"
          >
            <ArrowRight className="h-6 w-6 rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Platform Section - Palantir Inspired */}
      <section className="py-32 px-4 bg-gradient-to-b from-background/95 to-background/98">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h1 className="mb-4 text-5xl">Our Platforms</h1>
          </div>

          <div className="space-y-0">
            {platforms.map((platform, index) => {
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden border-t border-border/50 hover:bg-secondary/30 transition-all duration-500 cursor-pointer"
                >
                  <div className="relative py-16 md:py-20 px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                      {/* Left side - Description */}
                      <div className="lg:col-span-3">
                        <p className="text-muted-foreground leading-relaxed">
                          {platform.tagline}
                        </p>
                      </div>

                      {/* Middle - Image */}
                      <div className="lg:col-span-4">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border/50 group-hover:border-primary/30 transition-all duration-500">
                          <ImageWithFallback
                            src={platform.image}
                            alt={platform.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>

                      {/* Right side - Platform Name */}
                      <div className="lg:col-span-5 flex items-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl group-hover:text-primary transition-colors duration-300 break-normal">
                          {platform.name}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Productivity Dashboard Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/30 to-accent/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary text-white">Coming Soon</Badge>
              <h1 className="mb-4 text-5xl">Productivity Dashboard</h1>
              <p className="text-muted-foreground mb-8">
                A real-time view of HROS plant trends, strike accuracy, client projections, and cloud adoption metrics.
              </p>
              <div className="space-y-4">
                {productivityFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span>{feature.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {productivityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                    <Icon className="h-10 w-10 text-primary mb-3" />
                    <h4>{feature.title}</h4>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="mb-4 text-5xl">Insights & Innovation</h1>
            <p className="text-muted-foreground">Latest insights from our team</p>
          </div>
          <div className="flex items-end justify-end mb-8">
            <Link to="/blog">
              <Button variant="outline" className="group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer group">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1652352568961-143b1ed17746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1vZGVybiUyMGludGVyaW9yfGVufDF8fHx8MTc2MTcyNjg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">{post.category}</Badge>
                  <h4 className="mb-2 line-clamp-2">{post.title}</h4>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{post.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/20 to-accent/15">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              Our Team
            </Badge>
            <h1 className="mb-6 text-5xl">Led by Healthcare & Technology Experts</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our leadership combines deep medical expertise with world-class engineering to build the future of healthcare infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="mb-1">{member.name}</h4>
                    <p className="text-muted-foreground mb-4">{member.role}</p>
                    
                    <div className="space-y-2">
                      <a
                        href={member.calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button variant="outline" size="sm" className="w-full hover:bg-primary hover:text-white">
                          <Calendar className="h-4 w-4 mr-2" />
                          Book a Meeting
                        </Button>
                      </a>
                      
                      <div className="flex gap-2">
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1"
                        >
                          <Button variant="outline" size="sm" className="w-full hover:bg-primary hover:text-white">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                        </a>
                        
                        <a
                          href={`mailto:${member.email}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1"
                        >
                          <Button variant="outline" size="sm" className="w-full hover:bg-primary hover:text-white">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/about">
              <Button size="lg" variant="outline" className="group">
                Meet the Full Team
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-4">Join the Team</h2>
            <p className="text-muted-foreground">All Openings / Remote Roles Available</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobListings.map((job) => (
              <Card key={job.id} className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer">
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <Badge variant="secondary" className="mt-1">{job.type}</Badge>
                  </div>
                  <h3 className="mb-3 group-hover:text-primary transition-colors">{job.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{job.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/careers">
              <Button size="lg" className="group">
                View All Positions
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
