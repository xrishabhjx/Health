
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, FileText, Video, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const Resources = () => {
  // Sample resources data
  const resources = [
    {
      id: 1,
      title: "Nutrition Fundamentals Guide",
      description: "A comprehensive guide to understanding basic nutrition principles.",
      type: "PDF",
      icon: FileText,
      downloadUrl: "#",
    },
    {
      id: 2,
      title: "30-Day Fitness Challenge Workbook",
      description: "Track your progress with our structured fitness plan.",
      type: "Workbook",
      icon: BookOpen,
      downloadUrl: "#",
    },
    {
      id: 3,
      title: "Mindfulness Meditation Series",
      description: "A collection of guided meditations for mental wellness.",
      type: "Audio",
      icon: Video,
      downloadUrl: "#",
    },
    {
      id: 4,
      title: "Sleep Improvement Checklist",
      description: "Simple steps to enhance your sleep quality and routine.",
      type: "PDF",
      icon: FileText,
      downloadUrl: "#",
    },
    {
      id: 5,
      title: "Healthy Recipes Collection",
      description: "50+ nutritious recipes for every meal of the day.",
      type: "PDF",
      icon: FileText,
      downloadUrl: "#",
    },
    {
      id: 6,
      title: "Stress Management Techniques",
      description: "Practical strategies for managing daily stress.",
      type: "Video",
      icon: Video,
      downloadUrl: "#",
    },
  ];

  // Get unique resource types for filter buttons
  const resourceTypes = Array.from(new Set(resources.map(resource => resource.type)));
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Filter resources based on active filter
  const filteredResources = activeFilter 
    ? resources.filter(resource => resource.type === activeFilter)
    : resources;

  // Handle resource download
  const handleDownload = (resource: any) => {
    toast.success(`Downloading ${resource.title}`);
    // In a real app, this would initiate the actual download
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-4">Health Resources</h1>
            <p className="text-muted-foreground max-w-3xl mb-6">
              Access our collection of free health and wellness resources, including guides, worksheets, and more to support your journey.
            </p>
            
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Button 
                variant={activeFilter === null ? "default" : "outline"} 
                onClick={() => setActiveFilter(null)}
              >
                All Resources
              </Button>
              {resourceTypes.map(type => (
                <Button
                  key={type}
                  variant={activeFilter === type ? "default" : "outline"}
                  onClick={() => setActiveFilter(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {filteredResources.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No resources match your filter.</p>
              <Button 
                variant="link" 
                onClick={() => setActiveFilter(null)} 
                className="mt-2"
              >
                View all resources
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredResources.map((resource) => (
                <div 
                  key={resource.id} 
                  className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <resource.icon size={20} className="text-primary" />
                    </div>
                    <Badge variant="secondary">{resource.type}</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {resource.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => handleDownload(resource)}
                  >
                    <Download size={16} />
                    Download Resource
                  </Button>
                </div>
              ))}
            </div>
          )}

          <div className="bg-muted rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Need specialized resources?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Our premium members get access to our complete library of resources, 
              personalized recommendations, and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/pricing">
                <Button variant="default" size="lg">View Membership Options</Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => toast.info("Support team has been notified. We'll contact you shortly.")}
              >
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
