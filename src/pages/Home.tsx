import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, Shield, Star } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Get It Done,{" "}
            <span className="text-primary">Your Way</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with trusted local helpers for all your daily tasks. From cleaning to repairs, 
            groceries to pet care - we've got you covered across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {user ? (
              <>
                <Button size="lg" className="px-8 py-3 text-lg">
                  Find a Helper
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                  <Link to="/become-helper">Become a Helper</Link>
                </Button>
              </>
            ) : (
              <>
                <Button size="lg" className="px-8 py-3 text-lg" asChild>
                  <Link to="/signup">Find a Helper</Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg" asChild>
                  <Link to="/become-helper">Become a Helper</Link>
                </Button>
              </>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Verified Helpers</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" />
              <span>Rated & Reviewed</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search Section */}
      <section className="px-8 py-12 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">What do you need help with?</h2>
          
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for services like 'house cleaning', 'plumber', 'grocery shopping'..."
              className="w-full pl-12 pr-4 py-4 text-lg border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Popular Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              "House Cleaning", "Plumbing", "Grocery Shopping", "Pet Care", 
              "Cooking", "Laundry", "Gardening", "Tutoring", "Moving Help", 
              "Tech Support", "Beauty Services", "Handyman"
            ].map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="justify-center py-2 px-3 hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Get It Done?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Trusted & Verified</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All helpers go through identity verification and background checks for your safety and peace of mind.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Quick & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Book services in minutes and get help when you need it. Same-day availability for urgent tasks.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Quality Assured</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rate and review every service. Our community-driven ratings ensure consistently high quality.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers across India who trust Get It Done for their daily needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Button variant="secondary" size="lg" className="px-8 py-3 text-lg">
                Post Your First Task
              </Button>
            ) : (
              <Button variant="secondary" size="lg" className="px-8 py-3 text-lg" asChild>
                <Link to="/signup">Post Your First Task</Link>
              </Button>
            )}
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;