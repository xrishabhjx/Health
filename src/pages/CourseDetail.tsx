
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Users, BookOpen, Heart, ArrowLeft, Star } from "lucide-react";
import { CourseProps } from "@/components/CourseCard";
import { useCart } from "@/components/CartProvider";

// Import the same course data we use on other pages
import { allCourses } from "@/data/courses";

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [course, setCourse] = useState<CourseProps | null>(null);
  const { addToCart } = useCart();
  
  useEffect(() => {
    // Find the course that matches the slug from the URL
    const foundCourse = allCourses.find(c => c.slug === slug);
    setCourse(foundCourse || null);
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 py-12">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Course not found</h2>
            <p className="text-muted-foreground mb-6">The course you're looking for doesn't exist or has been removed.</p>
            <Link to="/courses">
              <Button>Browse All Courses</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(course);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-muted py-8">
          <div className="container px-4 md:px-6">
            <Link to="/courses" className="inline-flex items-center text-sm mb-4 hover:text-primary transition-colors">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to courses
            </Link>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <Badge className="mb-3">{course.category}</Badge>
                <h1 className="text-3xl font-bold mb-3">{course.title}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 font-medium">{course.rating.toFixed(1)}</span>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <span className="text-muted-foreground text-sm">
                    {Math.floor(Math.random() * 200) + 50} students enrolled
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">
                  {course.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <Card className="flex items-center p-3 w-full md:w-auto">
                    <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="font-medium">{course.duration}</p>
                    </div>
                  </Card>
                  <Card className="flex items-center p-3 w-full md:w-auto">
                    <BookOpen className="h-5 w-5 text-muted-foreground mr-2" />
                    <div>
                      <p className="text-xs text-muted-foreground">Lessons</p>
                      <p className="font-medium">{Math.floor(Math.random() * 10) + 5} modules</p>
                    </div>
                  </Card>
                  <Card className="flex items-center p-3 w-full md:w-auto">
                    <Users className="h-5 w-5 text-muted-foreground mr-2" />
                    <div>
                      <p className="text-xs text-muted-foreground">Difficulty</p>
                      <p className="font-medium">{course.difficulty}</p>
                    </div>
                  </Card>
                </div>
              </div>
              
              <div className="w-full md:w-80">
                <Card className="p-6">
                  <div className="text-2xl font-bold mb-4">${course.price.toFixed(2)}</div>
                  <Button className="w-full mb-3">Enroll Now</Button>
                  <Button variant="outline" className="w-full mb-6" onClick={handleAddToCart}>Add to Cart</Button>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Start anytime</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Learn at your own pace</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Access to community</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="h-4 w-4 mr-2" />
                      <span>Lifetime access</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container px-4 md:px-6 py-12">
          <h2 className="text-2xl font-semibold mb-6">Course Overview</h2>
          <p className="mb-6">
            This comprehensive course covers all essential aspects of {course.category.toLowerCase()}. 
            Designed for {course.difficulty.toLowerCase()} level students, you'll learn practical skills 
            and develop a deep understanding of the subject matter through video lectures, reading materials, 
            and hands-on exercises.
          </p>
          
          <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
            {Array(6).fill(0).map((_, i) => (
              <li key={i} className="flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                <span>Learning objective {i + 1}</span>
              </li>
            ))}
          </ul>
          
          <Link to="/courses">
            <Button variant="outline">View Similar Courses</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
