import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  BookOpen, 
  Award,
  Globe,
  TrendingUp,
  Linkedin,
  Twitter
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Active Students", value: "50,000+" },
    { icon: BookOpen, label: "Total Courses", value: "500+" },
    { icon: Award, label: "Certificates Issued", value: "25,000+" },
    { icon: Globe, label: "Countries Served", value: "100+" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description: "Former tech executive with 15+ years in education technology. Passionate about democratizing access to quality education.",
      avatar: "SJ",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Michael Chen",
      role: "Chief Academic Officer",
      description: "PhD in Computer Science from Stanford. Led curriculum development at major tech companies and universities.",
      avatar: "MC",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Marketing",
      description: "Marketing strategist with expertise in EdTech. Helped scale multiple educational platforms to millions of users.",
      avatar: "ER",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "David Kim",
      role: "Chief Technology Officer",
      description: "Full-stack engineer and former startup founder. Built scalable learning platforms serving millions of students.",
      avatar: "DK",
      linkedin: "#",
      twitter: "#"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in course quality, instructor expertise, and student support."
    },
    {
      icon: Heart,
      title: "Accessibility",
      description: "Education should be accessible to everyone, regardless of background, location, or financial situation."
    },
    {
      icon: Users,
      title: "Community",
      description: "Learning is better together. We foster a supportive community of learners and educators."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously evolve our platform using the latest technology to enhance the learning experience."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-success text-white">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Empowering Learners Worldwide
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            EduMarket is on a mission to democratize education and make high-quality learning 
            accessible to everyone, everywhere. Join our community of passionate learners and 
            expert instructors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <BookOpen className="h-5 w-5 mr-2" />
              Explore Courses
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Join Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-8">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="feature-card text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To democratize access to high-quality education by connecting passionate learners 
                  with expert instructors through innovative technology and exceptional learning experiences.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Eye className="h-8 w-8 text-success" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where anyone, anywhere can transform their life through learning. We envision 
                  a global community where knowledge knows no boundaries and every individual has the 
                  opportunity to reach their full potential.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index}
                    className="feature-card animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate educators, technologists, and innovators working together 
              to transform the future of learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="feature-card text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Avatar className="h-24 w-24 mx-auto mb-6">
                  <AvatarFallback className="bg-gradient-to-r from-primary to-success text-white text-xl font-semibold">
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <Badge variant="secondary" className="mb-4">
                  {member.role}
                </Badge>
                <p className="text-sm text-muted-foreground mb-6">
                  {member.description}
                </p>
                
                <div className="flex justify-center space-x-3">
                  <Button variant="ghost" size="sm" className="p-2">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondary/20">
        <div className="section-container max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                EduMarket was born out of a simple yet powerful belief: everyone deserves access to 
                quality education, regardless of their circumstances. Founded in 2020 by a team of 
                education enthusiasts and technology experts, we started with a mission to bridge 
                the gap between learners and expert knowledge.
              </p>
              <p>
                What began as a small platform with just 10 courses has grown into a thriving 
                community of over 50,000 students and hundreds of expert instructors. We've helped 
                thousands of people advance their careers, learn new skills, and pursue their passions.
              </p>
              <p>
                Today, EduMarket continues to innovate in the education space, leveraging cutting-edge 
                technology to create personalized, engaging, and effective learning experiences. 
                Our commitment remains unchanged: to empower every learner to achieve their goals 
                and transform their lives through education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="section-container text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of students who are already transforming their careers 
              and achieving their goals with EduMarket.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                <BookOpen className="h-5 w-5 mr-2" />
                Browse Courses
              </Button>
              <Button variant="outline" size="lg">
                Become an Instructor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;