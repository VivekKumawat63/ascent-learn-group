import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingCart, 
  ArrowRight,
  BookOpen 
} from "lucide-react";
import { courses } from "@/data/courses";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  courseId: string;
  quantity: number;
}

const Cart = () => {
  const { toast } = useToast();
  
  // Mock cart data - in a real app, this would come from context/state management
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { courseId: "1", quantity: 1 },
    { courseId: "2", quantity: 1 },
    { courseId: "3", quantity: 1 },
  ]);

  const cartCourses = cartItems.map(item => ({
    ...courses.find(course => course.id === item.courseId)!,
    quantity: item.quantity
  }));

  const subtotal = cartCourses.reduce((sum, course) => sum + (course.price * course.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  const updateQuantity = (courseId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(courseId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.courseId === courseId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    setCartItems(prevItems => prevItems.filter(item => item.courseId !== courseId));
    
    toast({
      title: "Removed from cart",
      description: `${course?.title} has been removed from your cart.`,
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-16">
        <div className="section-container">
          <div className="text-center space-y-6 max-w-md mx-auto">
            <ShoppingCart className="h-24 w-24 mx-auto text-muted-foreground" />
            <h1 className="text-3xl font-bold">Your cart is empty</h1>
            <p className="text-muted-foreground">
              Looks like you haven't added any courses to your cart yet. 
              Explore our courses and find something you love!
            </p>
            <Link to="/courses">
              <Button className="btn-hero">
                <BookOpen className="h-4 w-4 mr-2" />
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="section-container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">
            {cartItems.length} {cartItems.length === 1 ? 'course' : 'courses'} in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartCourses.map((course) => (
              <div key={course.id} className="course-card p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Course Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full md:w-32 h-24 object-cover rounded-lg"
                    />
                  </div>

                  {/* Course Info */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-lg line-clamp-2">
                          {course.title}
                        </h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(course.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        by {course.instructor}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        {course.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {course.level}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">Qty:</span>
                        <div className="flex items-center border border-border rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(course.id, course.quantity - 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="px-3 py-1 text-sm">{course.quantity}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(course.id, course.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-lg font-semibold text-primary">
                          ${(course.price * course.quantity).toFixed(2)}
                        </div>
                        {course.originalPrice && (
                          <div className="text-sm text-muted-foreground line-through">
                            ${(course.originalPrice * course.quantity).toFixed(2)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <div className="text-center pt-6">
              <Link to="/courses">
                <Button variant="outline">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="course-card p-6 space-y-6">
                <h2 className="text-xl font-semibold">Order Summary</h2>

                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax:</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link to="/checkout">
                  <Button className="w-full btn-hero">
                    Proceed to Checkout
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>

                {/* Security Info */}
                <div className="text-center space-y-2">
                  <div className="text-xs text-muted-foreground">
                    🔒 Secure checkout with 30-day money-back guarantee
                  </div>
                  <div className="text-xs text-muted-foreground">
                    💳 We accept all major credit cards
                  </div>
                </div>

                {/* Savings */}
                {cartCourses.some(course => course.originalPrice) && (
                  <div className="bg-success/10 p-3 rounded-lg">
                    <div className="text-sm font-medium text-success text-center">
                      🎉 You're saving $
                      {cartCourses
                        .reduce((savings, course) => 
                          savings + ((course.originalPrice || course.price) - course.price) * course.quantity, 0
                        )
                        .toFixed(2)
                      } on this order!
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;