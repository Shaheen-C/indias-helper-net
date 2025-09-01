import { CheckCircle, Shield, Clock, Users, Award, HeartHandshake } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhyUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Helpers",
      description: "All our helpers are background-checked and verified for your safety and peace of mind."
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Get help within 30 minutes in major cities. Fast, reliable service when you need it most."
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee. If you're not happy, we'll make it right or refund your money."
    },
    {
      icon: Users,
      title: "Trusted Community",
      description: "Join thousands of satisfied customers who trust Get It Done for their daily needs."
    },
    {
      icon: HeartHandshake,
      title: "Fair Pricing",
      description: "Transparent, competitive pricing with no hidden fees. Pay only for what you get."
    },
    {
      icon: CheckCircle,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you with any questions or concerns."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "10,000+", label: "Verified Helpers" },
    { number: "500,000+", label: "Tasks Completed" },
    { number: "4.8/5", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
            Why Choose Get It Done?
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're not just another service platform. We're your trusted partner in making life easier, 
            one task at a time.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've built our platform with your needs in mind, ensuring every interaction 
              is safe, reliable, and satisfying.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-brand-blue/10 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <CardTitle className="text-brand-blue">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8">
            Built on Trust & Safety
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue">Secure Platform</h3>
              <p className="text-muted-foreground">
                End-to-end encryption and secure payment processing protect your data and transactions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue">Verified Community</h3>
              <p className="text-muted-foreground">
                Every helper undergoes thorough verification including ID checks and skill assessments.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto">
                <HeartHandshake className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue">Fair & Transparent</h3>
              <p className="text-muted-foreground">
                Clear pricing, honest reviews, and fair dispute resolution ensure everyone wins.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-brand-blue">Ready to Experience the Difference?</h3>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of satisfied customers who've made their lives easier with Get It Done.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                <Link to="/signup">Get Started Today</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/become-helper">Become a Helper</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;