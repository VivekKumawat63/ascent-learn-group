import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Users, BookOpen, Award } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Students learning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Learn Without
                <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                  {" "}Limits
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Access world-class courses from expert instructors. Build skills, 
                advance your career, and unlock your potential with our comprehensive 
                learning platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <Button className="btn-hero">
                  Browse Courses
                  <BookOpen className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            <div className="feature-card">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Expert Instructors</h3>
              <p className="text-sm text-muted-foreground">
                Learn from industry professionals with years of experience
              </p>
            </div>
            <div className="feature-card">
              <BookOpen className="h-8 w-8 text-success mb-4" />
              <h3 className="font-semibold mb-2">Practical Projects</h3>
              <p className="text-sm text-muted-foreground">
                Build real-world projects to enhance your portfolio
              </p>
            </div>
            <div className="feature-card">
              <Award className="h-8 w-8 text-warning mb-4" />
              <h3 className="font-semibold mb-2">Certificates</h3>
              <p className="text-sm text-muted-foreground">
                Earn recognized certificates upon course completion
              </p>
            </div>
            <div className="feature-card">
              <Play className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Lifetime Access</h3>
              <p className="text-sm text-muted-foreground">
                Access course materials anytime, anywhere, forever
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;