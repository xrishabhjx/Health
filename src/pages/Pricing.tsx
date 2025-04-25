
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: 0,
    description: "Basic access to health resources",
    features: [
      "Access to free articles and guides",
      "Limited access to community forums",
      "1 free course sample",
      "Email support"
    ],
    popular: false,
    buttonText: "Get Started",
    buttonVariant: "outline" as const
  },
  {
    name: "Premium",
    price: 19.99,
    description: "Complete access to all courses",
    features: [
      "Full access to all courses",
      "Advanced progress tracking",
      "Unlimited access to resources",
      "Priority community support",
      "Monthly live Q&A sessions",
      "Downloadable materials"
    ],
    popular: true,
    buttonText: "Subscribe Now",
    buttonVariant: "default" as const
  },
  {
    name: "Professional",
    price: 49.99,
    description: "For health professionals and educators",
    features: [
      "All Premium features",
      "Certification programs",
      "Teaching tools and resources",
      "Client management system",
      "Custom branding options",
      "1-on-1 coaching sessions (2/month)"
    ],
    popular: false,
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const
  }
];

const Pricing = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (planName: string) => {
    toast({
      title: "Subscription functionality coming soon",
      description: "Please connect Supabase and Stripe to enable payments",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl font-bold mb-2">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that's right for your health journey. All plans include access to our supportive community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card 
                key={plan.name}
                className={cn(
                  "flex flex-col h-full",
                  plan.popular && "border-health-500 shadow-lg"
                )}
              >
                {plan.popular && (
                  <div className="bg-health-500 text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="flex items-baseline mt-2">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    {plan.price > 0 && (
                      <span className="text-muted-foreground ml-1">/month</span>
                    )}
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-health-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={plan.buttonVariant}
                    className={cn("w-full", plan.popular && "bg-health-600 hover:bg-health-700")}
                    onClick={() => handleSubscribe(plan.name)}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Need a custom plan for your organization?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We offer special enterprise packages for businesses, schools, and healthcare providers. 
              Contact our sales team to learn more about how we can help your organization.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
