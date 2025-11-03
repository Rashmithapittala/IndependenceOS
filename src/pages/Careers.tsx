import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { MapPin, Briefcase, Clock, Users, Heart, Zap, Coffee, Laptop, DollarSign, Plane } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { VoiceAgent } from "../components/VoiceAgent";

export function Careers() {
  const jobListings = [
    {
      id: 1,
      title: "Senior Full Stack Engineer",
      location: "Remote",
      type: "Full-time",
      department: "Engineering",
      description: "Build scalable healthcare infrastructure solutions with cutting-edge technologies.",
      requirements: ["5+ years experience", "React/Node.js expertise", "Healthcare domain knowledge"],
    },
    {
      id: 2,
      title: "AI/ML Research Scientist",
      location: "San Francisco, CA",
      type: "Full-time",
      department: "Research",
      description: "Develop AI models to improve diagnostic accuracy and patient outcomes.",
      requirements: ["PhD in CS/ML", "Published research", "Python/TensorFlow"],
    },
    {
      id: 3,
      title: "Product Designer",
      location: "New York, NY",
      type: "Full-time",
      department: "Design",
      description: "Create intuitive user experiences for healthcare professionals and patients.",
      requirements: ["3+ years UX/UI design", "Healthcare experience preferred", "Figma proficiency"],
    },
    {
      id: 4,
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      department: "Engineering",
      description: "Maintain and improve our high-availability healthcare infrastructure.",
      requirements: ["Kubernetes/Docker", "AWS/GCP experience", "CI/CD expertise"],
    },
    {
      id: 5,
      title: "Clinical Data Analyst",
      location: "Boston, MA",
      type: "Full-time",
      department: "Data Science",
      description: "Analyze clinical data to derive insights that improve patient care.",
      requirements: ["Healthcare analytics background", "SQL/Python", "Statistical analysis"],
    },
    {
      id: 6,
      title: "Forward Deployed Engineer",
      location: "Chicago, IL",
      type: "Full-time",
      department: "Engineering",
      description: "Work on-site with healthcare partners to implement and optimize solutions.",
      requirements: ["Strong communication skills", "Full-stack development", "Travel 50%"],
    },
  ];

  const benefits = [
    { icon: DollarSign, title: "Competitive Salary", description: "Top of market compensation" },
    { icon: Heart, title: "Health Coverage", description: "Premium medical, dental, vision" },
    { icon: Laptop, title: "Remote First", description: "Work from anywhere" },
    { icon: Coffee, title: "Unlimited PTO", description: "Take time when you need it" },
    { icon: Users, title: "Learning Budget", description: "$5,000 annually" },
    { icon: Plane, title: "Team Retreats", description: "Quarterly off-sites" },
    { icon: Zap, title: "Equity", description: "Meaningful ownership" },
    { icon: Clock, title: "Flexible Hours", description: "Work your way" },
  ];

  const departmentColors: { [key: string]: string } = {
    Engineering: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    Research: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    Design: "bg-pink-500/10 text-pink-600 border-pink-500/20",
    "Data Science": "bg-teal-500/10 text-teal-600 border-teal-500/20",
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-secondary to-primary/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                Join Our Mission
              </Badge>
              <h1 className="mb-6">Join the Team</h1>
              <p className="text-muted-foreground mb-8 max-w-xl">
                We're building the future of healthcare infrastructure. Join us in creating technology that makes a real difference in people's lives.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm">
                  <div className="text-primary mb-1">Remote First</div>
                  <p className="text-muted-foreground">Work anywhere</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm">
                  <div className="text-primary mb-1">Top Pay</div>
                  <p className="text-muted-foreground">Competitive</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm">
                  <div className="text-primary mb-1">Impact</div>
                  <p className="text-muted-foreground">Healthcare</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxNjM5MDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team workspace"
                className="relative w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="mb-2">Open Positions</h2>
              <p className="text-muted-foreground">Find your next opportunity</p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">All Openings</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">Remote Roles</Badge>
            </div>
          </div>
          <div className="space-y-6">
            {jobListings.map((job) => (
              <Card key={job.id} className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer border-l-4 border-l-transparent hover:border-l-primary">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="group-hover:text-primary transition-colors">{job.title}</h3>
                      <Badge className={departmentColors[job.department] || "bg-primary/10 text-primary"}>
                        {job.department}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{job.type}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-secondary/50">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="lg:self-start group-hover:shadow-lg transition-all">
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/30 to-accent/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-4">Benefits & Perks</h2>
            <p className="text-muted-foreground">We take care of our team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-all hover:-translate-y-2 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Voice Agent Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/30 to-accent/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="mb-4">Apply via Voice</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience our AI-powered application process. Speak with our voice agent to learn about positions and submit your application.
            </p>
          </div>
          <VoiceAgent mode="inline" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="p-12 bg-gradient-to-br from-primary to-primary/80 text-white">
            <h2 className="mb-4 text-white">Don't See the Right Role?</h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
            </p>
            <Button variant="secondary" size="lg">
              Send General Application
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
