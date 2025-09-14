import { 
  BookOpen, 
  Users, 
  Award, 
  Clock, 
  Headphones, 
  TrendingUp 
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Expert Curriculum",
      description: "Courses designed by industry experts with real-world experience and cutting-edge knowledge.",
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Join a vibrant community of learners, share knowledge, and grow together.",
    },
    {
      icon: Award,
      title: "Recognized Certificates",
      description: "Earn certificates that are valued by employers and recognized across industries.",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Learn at your own pace with lifetime access to course materials and resources.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team and community forums.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "98% of our students report career advancement within 6 months of course completion.",
    },
  ];

  return (
    <section className="py-20">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Why Choose EduMarket?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to providing the highest quality education experience 
            that transforms careers and changes lives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="feature-card text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-success mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 py-16 bg-gradient-to-r from-primary to-success rounded-2xl text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">50,000+</div>
              <div className="text-lg opacity-90">Active Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-lg opacity-90">Expert Courses</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">98%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-lg opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;