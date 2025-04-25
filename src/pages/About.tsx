import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Award, Coffee } from "lucide-react";
import { JoinCommunityDialog } from "@/components/JoinCommunityDialog";

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & Health Director",
      bio: "Board-certified nutritionist with 15+ years of experience in clinical practice.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=150&h=150&auto=format&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Head of Fitness",
      bio: "Certified personal trainer and physiotherapist specializing in rehabilitation.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?q=80&w=150&h=150&auto=format&fit=crop",
    },
    {
      name: "Amara Wilson",
      role: "Mental Wellness Expert",
      bio: "Psychologist with expertise in stress management and mindfulness practices.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop",
    },
    {
      name: "James Rodriguez",
      role: "Chief Technology Officer",
      bio: "Health tech innovator focused on creating accessible wellness solutions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight mb-6">Our Mission</h1>
              <p className="text-xl text-muted-foreground mb-8">
                At HealthSmart, we believe everyone deserves access to quality health education and tools for a balanced lifestyle. 
                Our mission is to empower individuals to take control of their wellbeing through accessible, evidence-based courses 
                and a supportive community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/courses">
                  <Button size="lg">Explore Our Courses</Button>
                </Link>
                <JoinCommunityDialog />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="h-12 w-12 rounded-full health-gradient flex items-center justify-center mb-4">
                  <Heart size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Holistic Approach</h3>
                <p className="text-muted-foreground">
                  We address wellness as a whole, integrating physical, mental, and nutritional health.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="h-12 w-12 rounded-full health-gradient flex items-center justify-center mb-4">
                  <Award size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Evidence-Based</h3>
                <p className="text-muted-foreground">
                  Our content is rooted in scientific research and verified by health professionals.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="h-12 w-12 rounded-full health-gradient flex items-center justify-center mb-4">
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Inclusive Community</h3>
                <p className="text-muted-foreground">
                  We welcome people of all backgrounds, abilities, and health goals.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="h-12 w-12 rounded-full health-gradient flex items-center justify-center mb-4">
                  <Coffee size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Sustainable Habits</h3>
                <p className="text-muted-foreground">
                  We focus on long-term lifestyle changes rather than quick fixes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full overflow-hidden h-32 w-32 border-4 border-background">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to start your wellness journey?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Join thousands of others who have transformed their lives with our courses and community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button variant="secondary" size="lg">Sign Up Now</Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="border-primary-foreground hover:bg-primary-foreground hover:text-primary" size="lg">
                  Browse Courses
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
