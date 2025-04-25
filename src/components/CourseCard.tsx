
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Star, Clock, ShoppingCart } from "lucide-react";
import { useCart } from "@/components/CartProvider";

export interface CourseProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  rating: number;
  slug: string;
}

const CourseCard = ({ course }: { course: CourseProps }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(course);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-video w-full relative overflow-hidden bg-muted">
        {course.image ? (
          <img 
            src={course.image} 
            alt={course.title}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <Heart className="h-12 w-12 text-muted-foreground/30" />
          </div>
        )}
        <Badge className="absolute top-2 right-2" variant="secondary">
          {course.category}
        </Badge>
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold line-clamp-2">{course.title}</CardTitle>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="h-4 w-4 fill-yellow-500" />
            <span className="text-xs font-medium">{course.rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{course.duration}</span>
          <span>•</span>
          <Badge variant="outline" className="text-xs font-normal">
            {course.difficulty}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2 text-sm mt-2">
          {course.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="font-medium">
          ${course.price.toFixed(2)}
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="px-2" 
            onClick={handleAddToCart}
            title="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
          <Link to={`/course/${course.slug}`}>
            <Button size="sm">View Course</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
