import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Clock, 
  Users, 
  ShoppingCart,
  BookOpen 
} from "lucide-react";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const discountPercentage = course.originalPrice 
    ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
    : 0;

  return (
    <div className="course-card group">
      {/* Course Image */}
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        {course.featured && (
          <Badge className="absolute top-3 left-3 bg-warning text-warning-foreground">
            Featured
          </Badge>
        )}
        {discountPercentage > 0 && (
          <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
            {discountPercentage}% OFF
          </Badge>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>

      {/* Course Content */}
      <div className="p-6 space-y-4">
        {/* Category & Level */}
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {course.category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {course.level}
          </Badge>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {course.description}
          </p>
        </div>

        {/* Instructor */}
        <p className="text-sm font-medium text-foreground">
          {course.instructor}
        </p>

        {/* Course Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{course.studentsCount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${
                  star <= Math.floor(course.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : star <= course.rating
                    ? "fill-yellow-400/50 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium">{course.rating}</span>
          <span className="text-sm text-muted-foreground">
            ({course.studentsCount.toLocaleString()} students)
          </span>
        </div>

        {/* Price & Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">
                ${course.price}
              </span>
              {course.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${course.originalPrice}
                </span>
              )}
            </div>
          </div>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline">
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Link to={`/courses/${course.id}`}>
              <Button size="sm">
                <BookOpen className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;