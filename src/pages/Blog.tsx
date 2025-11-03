import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { useState } from "react";

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      title: "Building Scalable Healthcare Infrastructure with AI",
      excerpt: "How we're leveraging artificial intelligence to create robust and scalable healthcare solutions that can grow with your organization.",
      author: "Dr. Sarah Chen",
      date: "October 15, 2025",
      category: "Engineering",
      readTime: "5 min read",
      featured: true,
    },
    {
      title: "The Future of Patient Data Management",
      excerpt: "Exploring new approaches to managing patient data securely while ensuring accessibility for healthcare providers.",
      author: "Michael Rodriguez",
      date: "October 10, 2025",
      category: "Data Science",
      readTime: "7 min read",
      featured: false,
    },
    {
      title: "Optimizing Clinic Workflows with Real-Time Analytics",
      excerpt: "Case study on how real-time data analytics transformed operations at a major metropolitan hospital network.",
      author: "Emily Watson",
      date: "October 5, 2025",
      category: "Product",
      readTime: "6 min read",
      featured: true,
    },
    {
      title: "Security Best Practices in Healthcare Technology",
      excerpt: "A comprehensive guide to implementing security measures that protect patient data without compromising usability.",
      author: "James Park",
      date: "September 28, 2025",
      category: "Security",
      readTime: "8 min read",
      featured: false,
    },
    {
      title: "Machine Learning in Diagnostic Support Systems",
      excerpt: "How machine learning algorithms are assisting healthcare professionals in making more accurate diagnoses.",
      author: "Dr. Amanda Lee",
      date: "September 20, 2025",
      category: "AI Research",
      readTime: "10 min read",
      featured: false,
    },
    {
      title: "Designing for Healthcare: UX Principles",
      excerpt: "User experience design principles specific to healthcare applications and how they improve patient outcomes.",
      author: "David Kim",
      date: "September 15, 2025",
      category: "Design",
      readTime: "4 min read",
      featured: false,
    },
  ];

  const categories = ["All", "Engineering", "Data Science", "Product", "Security", "AI Research", "Design"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden" style={{ backgroundColor: '#F8FAFB' }}>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              Engineering Blog
            </Badge>
            <h1 className="mb-6">From the Engineering Blog</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Insights, stories, and technical deep-dives from our team building the future of healthcare infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 px-4" style={{ backgroundColor: '#F8FAFB' }}>
          <div className="container mx-auto max-w-6xl">
            <Card className="overflow-hidden hover:shadow-2xl transition-all group cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto relative overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1652352568961-143b1ed17746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1vZGVybiUyMGludGVyaW9yfGVufDF8fHx8MTc2MTcyNjg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-white">Featured</Badge>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 w-fit">{featuredPost.category}</Badge>
                  <h2 className="mb-4">{featuredPost.title}</h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="w-fit group">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-12 px-4 sticky top-16 z-40 border-b border-border" style={{ backgroundColor: 'rgba(248, 250, 251, 0.95)', backdropFilter: 'blur(8px)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === selectedCategory ? "default" : "outline"} 
                className={`cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors ${
                  category === selectedCategory ? "bg-primary text-primary-foreground" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F8FAFB' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer group flex flex-col">
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <ImageWithFallback
                    src={index % 2 === 0 
                      ? "https://images.unsplash.com/photo-1758574437870-f83c160efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYxNjQ0NzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      : "https://images.unsplash.com/photo-1758685848543-5c8ba81bc822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjBsYWJ8ZW58MXx8fHwxNzYxNjQyNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    }
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 w-fit">{post.category}</Badge>
                  <h3 className="mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{post.author}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full mt-4 group/btn">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F8FAFB' }}>
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-white">Subscribe to our Newsletter</h2>
          <p className="text-white/90 mb-8">Get the latest posts delivered right to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
