import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Simulate subscription
    setIsSubscribed(true);
    setEmail("");
    
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive our latest updates and course announcements.",
    });

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-success">
      <div className="section-container text-center">
        <div className="max-w-2xl mx-auto space-y-8 text-white">
          <div className="space-y-4">
            <Mail className="h-16 w-16 mx-auto opacity-90" />
            <h2 className="text-3xl sm:text-4xl font-bold">
              Stay Updated with Latest Courses
            </h2>
            <p className="text-xl opacity-90">
              Get notified about new courses, special offers, and learning resources. 
              Join 25,000+ learners who trust our newsletter.
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-foreground placeholder:text-muted-foreground border-0 flex-1"
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Subscribe Now
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center space-x-2 animate-scale-in">
              <CheckCircle className="h-6 w-6" />
              <span className="text-lg font-semibold">
                Thank you for subscribing!
              </span>
            </div>
          )}

          <div className="flex items-center justify-center space-x-8 text-sm opacity-75">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Unsubscribe anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Weekly updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;