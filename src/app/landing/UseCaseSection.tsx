'use client';
import { Film, ShoppingCart, Youtube, AppWindow } from 'lucide-react';
import { Card } from 'react-daisyui';

export default function UseCaseSection() {
  const useCases = [
    { icon: <Film size={28} strokeWidth={2.5} color='white' />, title: "Studios", desc: "Concept art and storyboards" },
    { icon: <ShoppingCart size={28} strokeWidth={2.5} color='white' />, title: "E-commerce", desc: "Product photos and ads" },
    { icon: <Youtube size={28} strokeWidth={2.5} color='white' />, title: "Creators", desc: "Thumbnails and social content" },
    { icon: <AppWindow size={28} strokeWidth={2.5} color='white' />, title: "Apps", desc: "AI avatars and personalization" }
  ];

  return (
    <section className="py-24 bg-base-200">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-base-content mb-4">
            Popular Use Cases
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            See how teams are already building with Runware.
          </p>
        </div>

        {/* Use Cases */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 border border-base-300/50">
                <Card.Body className="p-6 text-center">
                  <div className="inline-block bg-neutral/80 text-accent p-3 rounded-full mb-4">
                    {useCase.icon}
                  </div>
                  <h4 className="font-semibold text-base-content mb-2">{useCase.title}</h4>
                  <p className="text-sm text-base-content/70">{useCase.desc}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}