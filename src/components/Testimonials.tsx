
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  content: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    content:
      "HealthSmart has been a game-changer for me. The nutrition course helped me completely transform my relationship with food. I've lost weight and gained so much energy!",
    author: {
      name: "Sarah Johnson",
      role: "Nutrition Course Student",
    },
    rating: 5,
  },
  {
    content:
      "As a busy professional, I was struggling to find time for my health. The stress management course gave me practical tools I use every day to stay balanced.",
    author: {
      name: "Michael Chen",
      role: "Mental Wellness Student",
    },
    rating: 5,
  },
  {
    content:
      "I was a complete beginner to fitness, but the instructors made everything easy to understand. I'm now exercising regularly for the first time in my life!",
    author: {
      name: "Jessica Williams",
      role: "Fitness Course Student",
    },
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-2">What Our Students Say</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Join thousands of people who have transformed their health through HealthSmart courses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.author.avatar} />
                    <AvatarFallback className="bg-health-600 text-primary-foreground">
                      {testimonial.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.author.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.author.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
