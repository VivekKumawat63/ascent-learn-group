import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Frontend Developer",
    company: "TechCorp",
    content: "EduMarket transformed my career! The web development course was comprehensive and practical. I went from complete beginner to landing my dream job in just 6 months. The instructors are incredibly knowledgeable and supportive.",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Data Scientist",
    company: "DataFlow Inc",
    content: "The data science course exceeded my expectations. The real-world projects and hands-on approach helped me build a strong portfolio. I'm now working as a data scientist at a Fortune 500 company!",
    rating: 5,
    avatar: "MC"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Digital Marketing Manager",
    company: "GrowthLabs",
    content: "As someone who wanted to transition into digital marketing, this platform provided exactly what I needed. The courses are up-to-date with current trends and the strategies actually work in real business scenarios.",
    rating: 5,
    avatar: "ER"
  },
  {
    id: "4",
    name: "David Kim",
    role: "Product Manager",
    company: "StartupXYZ",
    content: "The business management course gave me the skills and confidence to lead my team effectively. The content is practical and immediately applicable. Highly recommend for anyone looking to advance their career!",
    rating: 5,
    avatar: "DK"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our students who have transformed their careers with our courses
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="testimonial-card text-center relative">
            <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />
            
            <div className="space-y-6">
              {/* Stars */}
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= currentTestimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-gradient-to-r from-primary to-success text-white text-lg font-semibold">
                    {currentTestimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-semibold text-foreground">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentTestimonial.role} at {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 p-0"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 p-0"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid - Show smaller testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-secondary text-xs font-semibold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;