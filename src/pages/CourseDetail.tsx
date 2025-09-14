import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Star, 
  Clock, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  PlayCircle,
  CheckCircle,
  ArrowLeft
} from "lucide-react";
import { courses, reviews } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";
import { useToast } from "@/hooks/use-toast";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("description");

  const course = courses.find(c => c.id === id);
  const courseReviews = reviews.filter(r => r.courseId === id);
  const relatedCourses = courses
    .filter(c => c.id !== id && c.category === course?.category)
    .slice(0, 3);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Button onClick={() => navigate("/courses")}>
            Back to Courses
          </Button>
        </div>
      </div>
    );
  }

  const addToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${course.title} has been added to your cart.`,
    });
  };

  const discountPercentage = course.originalPrice 
    ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen py-8">
      <div className="section-container">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/courses")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Courses
        </Button>

        {/* Course Header */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Course Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">{course.category}</Badge>
                <Badge variant="outline">{course.level}</Badge>
                {course.featured && (
                  <Badge className="bg-warning text-warning-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              
              <h1 className="text-4xl font-bold text-foreground">
                {course.title}
              </h1>
              
              <p className="text-xl text-muted-foreground">
                {course.description}
              </p>

              {/* Instructor */}
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-gradient-to-r from-primary to-success text-white text-lg font-semibold">
                    {course.instructor.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-lg">Instructor</p>
                  <p className="text-muted-foreground">{course.instructor}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{course.studentsCount.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating} ({courseReviews.length} reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Course Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="course-card">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-6 space-y-6">
                  {/* Price */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl font-bold text-primary">
                        ${course.price}
                      </span>
                      {course.originalPrice && (
                        <>
                          <span className="text-lg text-muted-foreground line-through">
                            ${course.originalPrice}
                          </span>
                          <Badge className="bg-destructive text-destructive-foreground">
                            {discountPercentage}% OFF
                          </Badge>
                        </>
                      )}
                    </div>
                    {course.originalPrice && (
                      <p className="text-sm text-muted-foreground">
                        Limited time offer ends soon!
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    <Button className="w-full btn-hero" onClick={addToCart}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="w-full">
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Preview Course
                    </Button>
                  </div>

                  {/* What's Included */}
                  <div className="space-y-3">
                    <h4 className="font-semibold">This course includes:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>{course.duration} of on-demand video</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>Downloadable resources</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>Lifetime access</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>Certificate of completion</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>30-day money-back guarantee</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({courseReviews.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">About This Course</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {course.description} This comprehensive course is designed to take you from beginner to advanced level, 
                  providing you with practical skills and real-world experience that you can immediately apply in your career.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3">What You'll Learn</h4>
                <ul className="space-y-2">
                  {course.tags.map((tag, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>Master {tag} concepts and best practices</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">Requirements</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Basic computer skills and internet access</li>
                  <li>• No prior experience required - we'll teach you everything</li>
                  <li>• Willingness to learn and practice</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="syllabus" className="mt-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Course Curriculum</h3>
              <div className="space-y-4">
                {course.syllabus.map((section, index) => (
                  <div key={index} className="border border-border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold">{section.title}</h4>
                      <Badge variant="outline">{section.duration}</Badge>
                    </div>
                    <ul className="space-y-2">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="flex items-center space-x-2 text-muted-foreground">
                          <PlayCircle className="h-4 w-4" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">Student Reviews</h3>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">{course.rating}</span>
                  <span className="text-muted-foreground">
                    ({courseReviews.length} reviews)
                  </span>
                </div>
              </div>
              
              <div className="space-y-6">
                {courseReviews.map((review) => (
                  <div key={review.id} className="border border-border rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarFallback>{review.userAvatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h5 className="font-semibold">{review.userName}</h5>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Courses */}
        {relatedCourses.length > 0 && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Related Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCourses.map((relatedCourse) => (
                <CourseCard key={relatedCourse.id} course={relatedCourse} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;