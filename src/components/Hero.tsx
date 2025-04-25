
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Your path to better health starts here
            </div>
            <h1 className="font-bold">
              Transform Your Health With Expert-Led <span className="health-text-gradient">Education</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl">
              Learn from certified professionals, track your progress, and build healthy habits that last.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/courses">
                <Button size="lg" className="gap-2">
                  Start Learning
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full md:h-[420px] lg:h-[500px]">
              <div className="absolute top-0 left-0 h-full w-full rounded-xl bg-gradient-to-br from-health-300 via-health-100 to-education-100 opacity-70" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="h-48 w-48 md:h-64 md:w-64 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <Heart className="h-24 w-24 md:h-32 md:w-32 text-health-500" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
