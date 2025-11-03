import { Link } from "react-router-dom";
import { Activity, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-card to-secondary/20 mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <span className="text-primary">Independent OS</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Building the AI infrastructure for medicine. Empowering healthcare with cutting-edge technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4">Product</h4>
            <div className="space-y-2">
              <Link to="/platform" className="block text-muted-foreground hover:text-foreground transition-colors">
                Platform
              </Link>
              <Link to="/productivity" className="block text-muted-foreground hover:text-foreground transition-colors">
                Productivity
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4">Company</h4>
            <div className="space-y-2">
              <Link to="/blog" className="block text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link to="/careers" className="block text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </Link>
              <Link to="/privacy" className="block text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">© 2025 Independent OS — The People of Healthcare</p>
          <p className="text-muted-foreground">Made with care for better healthcare</p>
        </div>
      </div>
    </footer>
  );
}
