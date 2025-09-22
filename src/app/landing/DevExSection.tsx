'use client';
import { Code, Zap, Settings, MessageSquare } from 'lucide-react';
import { Card } from 'react-daisyui';

export default function DevExSection() {
  const features = [
    {
      icon: <Code size={24} className="text-accent" />,
      title: "Just Copy & Paste",
      description: "No configuration needed",
      quote: "Works with your existing REST API or WebSocket setup immediately."
    },
    {
      icon: <Zap size={24} className="text-accent" />,
      title: "Instant Results",
      description: "See images as they generate",
      quote: "Real-time streaming keeps users engaged while images create."
    },
    {
      icon: <Settings size={24} className="text-accent" />,
      title: "Any Model, Same Code", 
      description: "Change one parameter to switch models",
      quote: "Access 312K+ models, LoRA, and ControlNet without code changes."
    },
    {
      icon: <MessageSquare size={24} className="text-accent" />,
      title: "Debug Fast",
      description: "Clear error messages, not cryptic codes",
      quote: "Diverse SDK support and helpful errors save hours of debugging."
    }
  ];

  const FeatureCard = ({ feature }: { feature: typeof features[0] }) => (
    <Card className="bg-neutral-focus transition-shadow duration-300 border-neutral-content/30 border-b-2 rounded-none">
      <Card.Body className="p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-accent/10">
            {feature.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-neutral-content">
              {feature.title}
            </h3>
            <p className="text-neutral-content/80">
              {feature.description}
            </p>
          </div>
        </div>
        <div className="bg-neutral-content/5 p-4 rounded-md text-sm mt-auto">
          <p className="text-neutral-content/70 italic">
            &ldquo;{feature.quote}&rdquo;
          </p>
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <section className="py-24 bg-neutral text-neutral-content">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-neutral-content mb-4">
            Built for Developers
          </h2>
          <p className="text-lg text-neutral-content/70 max-w-2xl mx-auto">
            Skip the setup. Skip the complexity. Just build what matters.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
