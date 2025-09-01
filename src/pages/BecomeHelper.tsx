import { DollarSign, Clock, Users, Star, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BackButton } from "@/components/BackButton";

const BecomeHelper = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn ₹15,000-50,000/month",
      description: "Flexible income based on your availability and skills. Top helpers earn even more!"
    },
    {
      icon: Clock,
      title: "Work on Your Schedule",
      description: "Choose when and where you work. Perfect for students, freelancers, or anyone needing extra income."
    },
    {
      icon: Users,
      title: "Help Your Community",
      description: "Make a real difference in people's lives while building meaningful connections in your area."
    },
    {
      icon: Star,
      title: "Build Your Reputation",
      description: "Earn 5-star reviews and become a trusted helper with premium rates and priority bookings."
    }
  ];

  const categories = [
    { name: "Home Cleaning", rate: "₹200-500/hour", demand: "High" },
    { name: "Cooking & Meal Prep", rate: "₹300-800/hour", demand: "Very High" },
    { name: "Tutoring & Teaching", rate: "₹400-1000/hour", demand: "High" },
    { name: "Pet Care", rate: "₹150-400/hour", demand: "Medium" },
    { name: "Elderly Care", rate: "₹250-600/hour", demand: "Very High" },
    { name: "Home Repairs", rate: "₹300-800/hour", demand: "High" },
    { name: "Shopping & Errands", rate: "₹150-300/hour", demand: "Medium" },
    { name: "Event Support", rate: "₹200-500/hour", demand: "Medium" }
  ];

  const steps = [
    {
      step: "1",
      title: "Sign Up & Verify",
      description: "Create your profile, upload documents, and complete our verification process."
    },
    {
      step: "2", 
      title: "Choose Your Services",
      description: "Select the categories you want to offer and set your availability and rates."
    },
    {
      step: "3",
      title: "Get Your First Booking",
      description: "Receive requests from customers and start earning money helping others."
    },
    {
      step: "4",
      title: "Build Your Reputation",
      description: "Deliver excellent service, earn great reviews, and unlock premium opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Back Button */}
      <div className="px-4 pt-8">
        <BackButton />
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
            Become a Helper & Start Earning Today
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Turn your skills into income. Help your neighbors while building a flexible career 
            that works around your life.
          </p>
          <Button className="bg-brand-blue hover:bg-brand-blue/90 text-lg px-8 py-3">
            Start Your Application
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Why Join Get It Done?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to succeed as a helper in your community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-brand-blue/10 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-brand-blue" />
                  </div>
                  <CardTitle className="text-brand-blue text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Popular Service Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from high-demand services or offer multiple categories to maximize your earnings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="border-brand-blue/10 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-brand-blue">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Rate:</span>
                    <span className="font-semibold text-brand-blue">{category.rate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Demand:</span>
                    <Badge variant={category.demand === "Very High" ? "default" : category.demand === "High" ? "secondary" : "outline"}>
                      {category.demand}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              How to Get Started
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of helpers earning money on their own terms.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-brand-blue mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Helper Requirements
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple requirements to ensure quality and safety for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-brand-blue/10">
              <CardHeader>
                <CardTitle className="text-brand-blue">Basic Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>18+ years old</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Valid government ID</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Active phone number</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Bank account for payments</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-blue/10">
              <CardHeader>
                <CardTitle className="text-brand-blue">Preferred Qualifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>Previous service experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>Professional references</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>Relevant certifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>Local area knowledge</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-brand-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community of helpers and start building your flexible career today.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90">
              <Link to="/signup">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeHelper;