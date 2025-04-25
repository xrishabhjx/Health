import { BookOpen, Award, Users, Clock, Heart, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    name: "Expert-Led Courses",
    description:
      "Learn from certified health professionals and educators with years of experience.",
    icon: Award,
    color: "text-health-600",
    bgColor: "bg-health-100",
  },
  {
    name: "Community Support",
    description:
      "Connect with a community of learners on the same health journey as you.",
    icon: Users,
    color: "text-education-600",
    bgColor: "bg-education-100",
  },
  {
    name: "Learn at Your Pace",
    description:
      "Access course content anytime, anywhere, and learn at your own pace.",
    icon: Clock,
    color: "text-health-600",
    bgColor: "bg-health-100",
  },
  {
    name: "Comprehensive Resources",
    description:
      "Get access to a wide range of resources including videos, articles, and exercises.",
    icon: BookOpen,
    color: "text-education-600",
    bgColor: "bg-education-100",
  },
  {
    name: "Track Your Progress",
    description:
      "Monitor your learning progress and health improvements with our tracking tools.",
    icon: Heart,
    color: "text-health-600",
    bgColor: "bg-health-100",
  },
  {
    name: "Achievement Badges",
    description:
      "Earn badges and certificates as you complete courses and achieve health goals.",
    icon: Star,
    color: "text-education-600",
    bgColor: "bg-education-100",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Why Choose HealthSmart</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our platform offers a unique blend of education, community, and tools to help you achieve your health goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={cn(
                  "rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4",
                  feature.bgColor
                )}
              >
                <feature.icon className={cn("h-6 w-6", feature.color)} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
