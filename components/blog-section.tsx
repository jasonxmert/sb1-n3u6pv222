import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Understanding Global Postal Code Systems",
    excerpt: "Learn about different postal code formats and systems used around the world...",
    date: "2024-03-20",
    author: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1579547944212-c4f4961a8dd8?auto=format&fit=crop&q=80&w=640",
  },
  {
    title: "The Evolution of Address Systems",
    excerpt: "Explore how address systems have evolved from ancient times to the digital age...",
    date: "2024-03-18",
    author: "Michael Chen",
    image: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?auto=format&fit=crop&q=80&w=640",
  },
  {
    title: "Digital Mapping and Location Services",
    excerpt: "Discover how modern technology is revolutionizing location-based services...",
    date: "2024-03-15",
    author: "Alex Thompson",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=640",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Latest from our Blog</h2>
        <p className="text-muted-foreground">
          Stay updated with the latest insights about postal systems and location services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2 hover:text-primary cursor-pointer">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
              </div>
              <Button variant="ghost" className="w-full group">
                Read More
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}