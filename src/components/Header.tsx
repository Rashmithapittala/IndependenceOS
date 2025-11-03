import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Activity } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled 
          ? "shadow-sm" 
          : "border-transparent shadow-none"
      }`}
      style={{
        background: isScrolled ? 'rgba(248, 250, 251, 0.95)' : 'rgba(248, 250, 251, 0)',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        borderColor: isScrolled ? 'rgba(209, 213, 219, 0.5)' : 'transparent',
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <span className="text-primary group-hover:text-primary/80 transition-colors">
              Independence OS <span className="text-muted-foreground">(Beta)</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="flex items-center gap-8">
            <Link to="/about" className="text-foreground hover:text-primary transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </Link>
            <Link to="/platform" className="text-foreground hover:text-primary transition-colors relative group">
              Platform
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </Link>
            <Link to="/productivity" className="text-foreground hover:text-primary transition-colors relative group">
              Productivity
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors relative group">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </Link>
            <Link to="/careers" className="text-foreground hover:text-primary transition-colors relative group">
              Careers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-in fade-in slide-in-from-top-5">
            <Link to="/about" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/platform" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Platform
            </Link>
            <Link to="/productivity" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Productivity
            </Link>
            <Link to="/blog" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link to="/careers" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Careers
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
