import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { BackButton } from "@/components/BackButton";

const FAQ = () => {
  const generalFAQs = [
    {
      question: "How does Get It Done work?",
      answer: "Get It Done connects you with verified local helpers for everyday tasks. Simply post your task, browse helper profiles, choose the right person for your needs, and book their services. Payment is secure and processed through our platform."
    },
    {
      question: "Is Get It Done available in my city?",
      answer: "We're currently operating in major Indian cities including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, and Pune. We're rapidly expanding to new cities every month. Check our app or website for the latest coverage areas."
    },
    {
      question: "How are helpers verified?",
      answer: "All helpers undergo a comprehensive verification process including ID verification, background checks, skill assessments, and reference checks. We also monitor ongoing performance through customer reviews and ratings."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy with the service, contact our support team within 24 hours. We'll work to resolve the issue or provide a full refund."
    }
  ];

  const customerFAQs = [
    {
      question: "How much does it cost to use Get It Done?",
      answer: "There's no cost to browse helpers or post tasks. You only pay the agreed-upon rate for the service plus a small platform fee (typically 5-10%). Pricing varies by service type and duration."
    },
    {
      question: "How do I pay for services?",
      answer: "We accept all major payment methods including UPI, credit/debit cards, net banking, and digital wallets. Payment is held securely until the task is completed to your satisfaction."
    },
    {
      question: "Can I cancel a booking?",
      answer: "Yes, you can cancel bookings with varying fees depending on timing. Free cancellation up to 2 hours before the scheduled time. Cancellations within 2 hours may incur a small fee to compensate the helper."
    },
    {
      question: "What if the helper doesn't show up?",
      answer: "If a helper doesn't show up or cancels last minute, we'll immediately help you find a replacement or provide a full refund. We also have penalties in place for helpers who frequently cancel."
    },
    {
      question: "Are my personal details safe?",
      answer: "Yes, we take privacy seriously. Personal information is encrypted and only shared with your chosen helper for the specific task. We never sell or share your data with third parties."
    }
  ];

  const helperFAQs = [
    {
      question: "How much can I earn as a helper?",
      answer: "Earnings vary by service type, location, and time commitment. Helpers typically earn ₹15,000-50,000 per month. Top-rated helpers in high-demand categories can earn even more. You set your own rates within market guidelines."
    },
    {
      question: "How do I get paid?",
      answer: "Payments are transferred to your bank account within 24-48 hours after task completion. We support all major Indian banks and digital payment methods. There are no hidden fees - you keep 85-95% of what customers pay."
    },
    {
      question: "Can I choose my own schedule?",
      answer: "Absolutely! You have complete control over when and where you work. Set your availability, block time slots, and only accept bookings that fit your schedule."
    },
    {
      question: "What happens if there's a dispute?",
      answer: "Our support team mediates all disputes fairly. We review evidence from both parties, including photos, messages, and service details. Our goal is always to find a fair resolution for everyone involved."
    },
    {
      question: "Do I need insurance?",
      answer: "While not mandatory, we recommend helpers have basic liability insurance. We provide guidance on insurance options and may offer group insurance plans in the future."
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start Chat",
      available: "24/7"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us for immediate help",
      action: "Call Now",
      available: "6 AM - 11 PM"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send Email",
      available: "24-48 hour response"
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
          <HelpCircle className="w-16 h-16 text-brand-blue mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find answers to common questions about using Get It Done. 
            Can't find what you're looking for? Our support team is here to help.
          </p>
        </div>
      </section>

      {/* General FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">General Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {generalFAQs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`general-${index}`}
                className="bg-white border border-brand-blue/10 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-blue hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Customer FAQs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">For Customers</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {customerFAQs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`customer-${index}`}
                className="bg-brand-cream border border-brand-blue/10 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-blue hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Helper FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">For Helpers</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {helperFAQs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`helper-${index}`}
                className="bg-white border border-brand-blue/10 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-blue hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our friendly support team is always ready to assist you with any questions or concerns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="border-brand-blue/10 text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-brand-blue" />
                  </div>
                  <CardTitle className="text-brand-blue">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Available: {option.available}
                  </div>
                  <Button variant="outline" className="w-full">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-brand-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Quick Links</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/how-it-works">How It Works</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/why-us">Why Choose Us</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/become-helper">Become a Helper</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;