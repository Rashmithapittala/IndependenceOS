import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Shield, Lock, Eye, FileText, CheckCircle, AlertCircle } from "lucide-react";

export function Privacy() {
  const sections = [
    {
      icon: Shield,
      title: "Data Protection",
      content: "We employ industry-leading security measures to protect your personal and medical information. All data is encrypted both in transit and at rest using AES-256 encryption.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lock,
      title: "HIPAA Compliance",
      content: "Our platform is fully HIPAA compliant. We adhere to all regulations regarding the handling, storage, and transmission of protected health information (PHI).",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Eye,
      title: "Data Access",
      content: "You have complete control over your data. You can request access to, correction of, or deletion of your personal information at any time through our secure portal.",
      gradient: "from-teal-500 to-green-500",
    },
    {
      icon: FileText,
      title: "Third-Party Sharing",
      content: "We never sell your data to third parties. Information is only shared with your explicit consent or as required by law for healthcare operations.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-accent/50 to-primary/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative text-center">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            Legal
          </Badge>
          <h1 className="mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-2">Last updated: October 29, 2025</p>
          <p className="text-muted-foreground">Your privacy is our priority</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 -mt-10">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 mb-12 bg-gradient-to-br from-card to-secondary/20 shadow-xl">
            <div className="flex gap-4 mb-6">
              <Shield className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="mb-4">Our Commitment to Privacy</h2>
                <p className="text-muted-foreground mb-4">
                  At Independent OS, we understand the sensitive nature of healthcare data. Your privacy and the security of your information are our top priorities. This policy explains how we
                  collect, use, protect, and share your information.
                </p>
                <p className="text-muted-foreground">
                  We are committed to transparency in our data practices and maintaining the trust you place in us to handle your healthcare information responsibly.
                </p>
              </div>
            </div>
          </Card>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3">{section.title}</h3>
                  <p className="text-muted-foreground">{section.content}</p>
                </Card>
              );
            })}
          </div>

          {/* Detailed Sections */}
          <div className="space-y-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h2>Information We Collect</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>We collect several types of information to provide and improve our services:</p>
                <div className="space-y-3 ml-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Personal identification information (name, email address, phone number)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Healthcare information necessary for providing our services</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Technical data (IP address, browser type, device information)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Usage data (how you interact with our platform)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Cookies and tracking technologies for functionality and analytics</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <h2>How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>We use the collected information for various purposes:</p>
                <div className="space-y-3 ml-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>To provide, maintain, and improve our healthcare services</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>To process transactions and send related information</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>To send administrative information, updates, and security alerts</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>To respond to your comments, questions, and provide customer support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>To monitor and analyze usage patterns and trends</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>To detect, prevent, and address technical issues and security threats</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <h2>Data Security</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>We implement comprehensive security measures to protect your data:</p>
                <div className="space-y-3 ml-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>End-to-end encryption for all data transmission</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Regular security audits and penetration testing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Access controls and authentication protocols</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Employee training on data privacy and security</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Incident response and breach notification procedures</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Regular backups and disaster recovery planning</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h2>Your Rights</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>You have the following rights regarding your personal information:</p>
                <div className="space-y-3 ml-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Right to access your personal data</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Right to correct inaccurate or incomplete data</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Right to request deletion of your data</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Right to restrict or object to data processing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Right to data portability</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Right to withdraw consent at any time</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-accent/20 to-secondary/30 border-primary/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-primary" />
                </div>
                <h2>Contact Us</h2>
              </div>
              <p className="text-muted-foreground mb-4">If you have questions about this Privacy Policy or our data practices, please contact us:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-card rounded-lg">
                  <p className="text-muted-foreground mb-1">Email</p>
                  <p>privacy@independentos.com</p>
                </div>
                <div className="p-4 bg-card rounded-lg">
                  <p className="text-muted-foreground mb-1">Phone</p>
                  <p>1-800-PRIVACY</p>
                </div>
                <div className="p-4 bg-card rounded-lg">
                  <p className="text-muted-foreground mb-1">Address</p>
                  <p>123 Healthcare Blvd, SF 94102</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
