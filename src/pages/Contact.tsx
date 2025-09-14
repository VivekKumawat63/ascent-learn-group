import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  HelpCircle,
  Users,
  BookOpen
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: ""
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "support@edumarket.com",
      action: "mailto:support@edumarket.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our support team",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come to our office",
      contact: "123 Learning Street, San Francisco, CA 94105",
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "We're here to help",
      contact: "Monday - Friday: 9AM - 6PM PST",
      action: null
    }
  ];

  const faqCategories = [
    {
      icon: BookOpen,
      title: "Course Support",
      description: "Questions about course content, access, or technical issues"
    },
    {
      icon: Users,
      title: "Account & Billing",
      description: "Account management, payment issues, and subscription questions"
    },
    {
      icon: HelpCircle,
      title: "General Inquiry",
      description: "Partnership opportunities, media inquiries, and other questions"
    },
    {
      icon: MessageCircle,
      title: "Instructor Support",
      description: "Questions about becoming an instructor or course creation"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="section-container">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll 
            respond as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card 
                key={index}
                className="feature-card text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {info.description}
                  </p>
                  {info.action ? (
                    <a 
                      href={info.action}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {info.contact}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{info.contact}</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="h-5 w-5 mr-2" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="course-support">Course Support</SelectItem>
                        <SelectItem value="account-billing">Account & Billing</SelectItem>
                        <SelectItem value="instructor-support">Instructor Support</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Brief description of your inquiry"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your question or feedback..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full btn-hero"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Categories & Additional Info */}
          <div className="space-y-8">
            {/* FAQ Categories */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
              <div className="space-y-4">
                {faqCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <Card 
                      key={index}
                      className="feature-card animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <Icon className="h-6 w-6 text-primary mt-1" />
                          <div>
                            <h3 className="font-semibold mb-1">{category.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Quick Support */}
            <Card className="bg-gradient-to-r from-primary to-success text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="opacity-90 mb-4">
                  Check out our Help Center for instant answers to common questions, 
                  or browse our community forum where students and instructors help each other.
                </p>
                <div className="space-y-2">
                  <Button className="bg-white text-primary hover:bg-white/90 w-full">
                    Visit Help Center
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-full">
                    Community Forum
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="h-64 bg-secondary/50 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">
                      123 Learning Street, San Francisco, CA
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;