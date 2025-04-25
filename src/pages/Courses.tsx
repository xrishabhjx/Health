
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { allCourses } from "@/data/courses";
import { CourseRequestDialog } from "@/components/CourseRequestDialog";

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-4">All Courses</h1>
            <p className="text-muted-foreground max-w-3xl">
              Browse our comprehensive collection of expert-led courses designed to help you achieve your health and wellness goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {allCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-muted-foreground mb-4">Don't see what you're looking for?</p>
            <CourseRequestDialog />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
