
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { allCourses } from "@/data/courses";

// We'll use the first 3 courses as featured courses
const featuredCourses = allCourses.slice(0, 3);

const FeaturedCourses = () => {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Courses</h2>
            <p className="text-muted-foreground">
              Explore our most popular courses to start your health journey
            </p>
          </div>
          <Link to="/courses">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Courses
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
