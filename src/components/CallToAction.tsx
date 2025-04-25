
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-health-600 to-education-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mb-8">
            Join thousands of students who have already transformed their lives through our expert-led courses. 
            Start your health journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup">
              <Button className="bg-white text-health-600 hover:bg-opacity-90 hover:text-health-700" size="lg">
                Get Started
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-health-600" size="lg">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
