'use client';
import { Card, Button } from 'react-daisyui';
import { ArrowRight, Rocket, Code } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-32 bg-accent/10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Main CTA */}
          <Card className="bg-base-100 shadow-lg">
            <Card.Body className="p-8">
              <div className="mb-6">
                <h2 className="text-4xl font-bold mb-4 text-accent-content">
                  Ready to Build?
                </h2>
                <p className="text-lg text-base-content/80 max-w-xl mx-auto">
                  Start creating with AI that&apos;s fast, affordable, and sustainable.<br/> 
                  1000 images for the price of a coffee.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/80 text-accent-content border-none rounded-md px-8"
                >
                  <Code size={20} strokeWidth={2.5} />
                  Start Building Now
                  <ArrowRight size={20} strokeWidth={2.5} />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}