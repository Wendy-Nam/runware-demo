'use client';
import { Film, ShoppingCart, Youtube, AppWindow } from 'lucide-react';
import { Card } from 'react-daisyui';

export default function UseCaseSection() {
  const useCases = [
    { icon: Film, title: "Studios", desc: "Concept art and storyboards" },
    { icon: ShoppingCart, title: "E-commerce", desc: "Product photos and ads" },
    { icon: Youtube, title: "Creators", desc: "Thumbnails and social content" },
    { icon: AppWindow, title: "Apps", desc: "AI avatars and personalization" }
  ];

  const UseCaseCard = ({ useCase }: { useCase: typeof useCases[0] }) => {
    const IconComponent = useCase.icon;
    return (
      <Card className="bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 border border-base-300/50">
        <Card.Body className="p-6 text-center">
          <div className="inline-block bg-neutral/80 text-accent p-3 rounded-full mb-4">
            <IconComponent size={28} strokeWidth={2.5} color='white' />
          </div>
          <h4 className="font-semibold text-base-content mb-2">{useCase.title}</h4>
          <p className="text-sm text-base-content/70">{useCase.desc}</p>
        </Card.Body>
      </Card>
    );
  };

  return (
    <section className="py-24 bg-base-200">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-base-content mb-4">
            Popular Use Cases
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            See how teams are already building with Runware.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} />
          ))}
        </div>
      </div>
    </section>
  );
}