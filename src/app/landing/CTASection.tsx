'use client';
import { Card, Button } from 'react-daisyui';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const ctaData = {
    title: "Ready to Build?",
    description: `Start creating with AI that's fast, affordable, and sustainable. 1000+ images for the price of a coffee.`,
    button: {
      text: "Start Building Now",
      arrow: <ArrowRight size={20} strokeWidth={2.5} />
    }
  };

  return (
    <section className="py-32 bg-accent/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <Card className="bg-base-100 shadow-lg">
          <Card.Body className="p-8 text-center">
            <h2 className="text-4xl font-bold mb-4 text-accent-content">
              {ctaData.title}
            </h2>
            <p className="text-lg text-base-content/80 max-w-xl mx-auto mb-6">
              {ctaData.description}
            </p>
            
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/80 text-accent-content border-none rounded-md px-8"
            >
              {ctaData.button.text}
              {ctaData.button.arrow}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}