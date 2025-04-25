
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md health-gradient flex items-center justify-center">
                <Heart size={18} className="text-white" />
              </div>
              <span className="font-bold text-xl">HealthSmart</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Empowering healthier lives through education, community, and expert guidance.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-primary text-sm">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses?category=nutrition" className="text-muted-foreground hover:text-primary text-sm">
                  Nutrition
                </Link>
              </li>
              <li>
                <Link to="/courses?category=fitness" className="text-muted-foreground hover:text-primary text-sm">
                  Fitness
                </Link>
              </li>
              <li>
                <Link to="/courses?category=mental-health" className="text-muted-foreground hover:text-primary text-sm">
                  Mental Health
                </Link>
              </li>
              <li>
                <Link to="/courses?category=sleep" className="text-muted-foreground hover:text-primary text-sm">
                  Sleep
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-primary text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t text-muted-foreground text-sm">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p>© 2025 HealthSmart. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="#" className="hover:text-primary">Facebook</Link>
              <Link to="#" className="hover:text-primary">Twitter</Link>
              <Link to="#" className="hover:text-primary">Instagram</Link>
              <Link to="#" className="hover:text-primary">LinkedIn</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
