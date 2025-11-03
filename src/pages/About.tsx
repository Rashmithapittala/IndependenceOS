import React from "react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Heart, Users, Zap, Target, Award, Globe } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Patient First",
      description: "Every decision we make is guided by what's best for patient care and outcomes.",
      gradient: "from-primary to-primary/70",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "We work closely with healthcare providers to understand and solve real problems.",
      gradient: "from-[#93C5FD] to-[#5B8FB9]",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with AI and healthcare technology.",
      gradient: "from-[#A7C7E7] to-[#93C5FD]",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Building reliable, accurate systems that healthcare professionals can trust.",
      gradient: "from-primary/80 to-[#93C5FD]",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      bio: "Former Chief of Medicine at Stanford Hospital with 20 years of clinical experience.",
      initial: "SC",
      color: "from-primary to-primary/70",
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "Previously led engineering teams at major healthcare technology companies.",
      initial: "MR",
      color: "from-[#93C5FD] to-[#5B8FB9]",
    },
    {
      name: "Emily Watson",
      role: "VP of Product",
      bio: "Expert in healthcare UX with a background in clinical informatics.",
      initial: "EW",
      color: "from-[#A7C7E7] to-[#93C5FD]",
    },
    {
      name: "James Park",
      role: "VP of Engineering",
      bio: "Built scalable systems at cloud infrastructure companies for over 15 years.",
      initial: "JP",
      color: "from-primary/80 to-[#DBEAFE]",
    },
  ];

  const milestones = [
    { year: "2020", event: "Company Founded", description: "Started with a vision to transform healthcare" },
    { year: "2021", event: "First Healthcare Partner", description: "Launched pilot program with major hospital" },
    { year: "2023", event: "Series A Funding", description: "Raised $50M to scale operations" },
    { year: "2025", event: "500+ Organizations", description: "Serving healthcare providers nationwide" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFB' }}>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden" style={{ backgroundColor: '#F8FAFB' }}>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758691462668-046fd85ceac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxNzEzMDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Healthcare technology background"
            className="w-full h-full object-cover"
          />
          {/* Overlay - stronger overlay to make image less visible and text more readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFB]/85 via-[#F8FAFB]/80 to-[#F8FAFB]/90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/30"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative text-center">
          <h1 className="mb-6 text-6xl text-black">Our Story</h1>
          <p className="text-black/80 max-w-2xl mx-auto text-lg">
            We're on a mission to transform healthcare delivery through innovative AI-powered infrastructure that empowers medical professionals and improves patient outcomes.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 px-4 mt-8" style={{ backgroundColor: '#F8FAFB' }}>
        <div className="container mx-auto max-w-3xl">
          <div className="flex justify-center gap-4">
            <Card className="p-4 text-center bg-gradient-to-br from-primary to-primary/80 text-white hover:shadow-lg transition-all">
              <div className="mb-1 text-2xl">20+</div>
              <p className="text-white/90 text-xs">Healthcare Organizations</p>
            </Card>
            <Card className="p-4 text-center bg-gradient-to-br from-[#93C5FD] to-[#5B8FB9] text-white hover:shadow-lg transition-all">
              <div className="mb-1 text-2xl">1M+</div>
              <p className="text-white/90 text-xs">Patients Served</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4" style={{ backgroundColor: '#F8FAFB' }}>
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-8 text-4xl">Our Mission</h2>
          </div>
          
          <div className="space-y-8 text-center max-w-4xl mx-auto">
            <div className="relative p-8 bg-gradient-to-br from-secondary/50 to-accent/30 rounded-2xl">
              <p className="text-foreground text-lg leading-relaxed mb-6">
                Healthcare was never meant to feel this complicated.
                Physicians spend more time with paperwork than with patients, and individuals navigate a system that often feels opaque, reactive, and impersonal.
                <span className="block mt-4 font-medium">IndependenceOS was created to change that.</span>
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl">
              <p className="text-foreground text-lg leading-relaxed">
                We're building an AI-native operating system for healthcare — one that restores autonomy, trust, and intelligence to how care is delivered and experienced.
                It begins with empowering independent physicians to run thriving, data-driven practices — and evolves into empowering patients with clarity, access, and understanding of their own health.
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-accent/30 to-secondary/40 rounded-2xl">
              <p className="text-foreground text-lg leading-relaxed mb-6">
                Our vision goes beyond tools and dashboards.
                We want to reimagine the entire infrastructure of healthcare — how practices are built, how data flows, how care pathways adapt, and how every medical decision becomes smarter with context.
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                By combining operational automation, real-world data, and adaptive intelligence, we're building a system that doesn't replace doctors — it amplifies them.
                And we're creating experiences that don't overwhelm patients — they educate, reassure, and guide them.
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-primary/15 to-secondary/30 rounded-2xl border-2 border-primary/20">
              <p className="text-foreground text-lg leading-relaxed mb-6">
                Over time, IndependenceOS will grow into a living network of specialty-specific clouds — starting with pediatrics and expanding across every field — each infused with the collective intelligence of thousands of practices and millions of patient interactions.
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                From early diagnosis to ongoing wellness, from independent clinics to intelligent communities, our goal is simple:
                <span className="block mt-4 text-xl font-medium text-primary">to make healthcare feel human again — intelligent, efficient, and independent for everyone.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F8FAFB' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-all hover:-translate-y-2 group">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Journey</h2>
            <p className="text-muted-foreground">Key milestones in our mission</p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {milestone.year.slice(2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-primary to-primary/20 mt-2"></div>
                  )}
                </div>
                <Card className="flex-1 p-6 mb-8 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="text-primary mb-2">{milestone.year}</div>
                  <h4 className="mb-2">{milestone.event}</h4>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-accent/20 to-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-4">Leadership Team</h2>
            <p className="text-muted-foreground">Meet the people driving our mission forward</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 group">
                <div className="flex gap-4">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 transition-transform`}>
                    <span>{member.initial}</span>
                  </div>
                  <div>
                    <h3 className="mb-1">{member.name}</h3>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-4">Recognition & Awards</h2>
            <p className="text-muted-foreground">Honored to be recognized by industry leaders</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="mb-2">Best Healthcare Tech 2024</h4>
              <p className="text-muted-foreground">Healthcare Innovation Awards</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="mb-2">Top AI Company</h4>
              <p className="text-muted-foreground">TechCrunch Disruptor 50</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="mb-2">Best Place to Work</h4>
              <p className="text-muted-foreground">HealthTech Employers 2025</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
