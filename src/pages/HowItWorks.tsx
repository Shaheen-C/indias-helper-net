import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, UserCheck, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Post Your Task",
      description: "Describe what you need help with, set your budget, and choose when you need it done.",
      details: ["Add task details and requirements", "Set your preferred time and budget", "Choose from our service categories"]
    },
    {
      icon: UserCheck,
      title: "Get Matched",
      description: "Our verified helpers in your area will review your task and send you offers.",
      details: ["Receive offers from qualified helpers", "View profiles, ratings, and reviews", "Compare prices and availability"]
    },
    {
      icon: MessageSquare,
      title: "Chat & Confirm",
      description: "Chat with helpers, ask questions, and choose the best one for your needs.",
      details: ["Communicate directly through our platform", "Clarify task details and expectations", "Confirm booking with your chosen helper"]
    },
    {
      icon: CheckCircle,
      title: "Get It Done",
      description: "Your helper completes the task, you make payment, and leave a review.",
      details: ["Track progress in real-time", "Secure payment after completion", "Rate and review your experience"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="px-8 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How <span className="text-primary">Get It Done</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting help with your daily tasks has never been easier. Follow these simple steps to connect with trusted helpers in your area.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full text-primary-foreground font-bold text-xl mb-4">
                      {index + 1}
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto lg:mx-0">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <Card className="border-2 hover:border-primary/20 transition-colors">
                      <CardHeader>
                        <CardTitle className="text-2xl">{step.title}</CardTitle>
                        <CardDescription className="text-lg">{step.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Arrow (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex justify-center my-8">
                    <ArrowRight className="h-8 w-8 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Helpers Section */}
      <section className="px-8 py-16 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Become a Helper?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our community of helpers and start earning money by helping others with their daily tasks.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Sign Up & Verify</h3>
              <p className="text-sm text-muted-foreground">Complete your profile and identity verification</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Browse & Bid</h3>
              <p className="text-sm text-muted-foreground">Find tasks that match your skills and send offers</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Complete & Earn</h3>
              <p className="text-sm text-muted-foreground">Finish tasks, get paid, and build your reputation</p>
            </div>
          </div>

          <Button size="lg" className="px-8 py-3 text-lg">
            Start Helping Today
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Post your first task and experience the convenience of having trusted help at your fingertips.
          </p>
          <Button size="lg" className="px-8 py-3 text-lg">
            Post Your First Task
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;