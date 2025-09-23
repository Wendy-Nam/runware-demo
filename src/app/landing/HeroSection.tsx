'use client';
import { Hero, Button } from 'react-daisyui';
import { Play, Code, Zap, Rocket } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();
  
  const keyPoints = [
    { icon: Zap, text: "One API Call" },
    { icon: Code, text: "Zero Infrastructure" },
    { icon: Rocket, text: "Deploy Anywhere" }
  ];

  const buttons = [
    {
      text: "Run Demo",
      onClick: () => router.push('/demo'),
      className: "btn px-8 font-semibold rounded-sm",
      color: "neutral" as const,
      icon: <Play size={20} />
    },
    {
      text: "View Github",
      onClick: () => window.open('https://github.com/Wendy-Nam/runware-demo', '_blank'),
      className: "btn px-8 btn-outline rounded-sm"
    }
  ];

  return (
    <Hero className="h-full py-16 pt-36 bg-accent-content">
      <Hero.Content className="text-center text-white max-w-5xl">
        <div className="space-y-12 w-screen">
          <div className="text-center space-y-8">
            <div>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Runware Workshop<br />
                <span className="text-accent">Live Demo</span>
              </h1>
              <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto mb-6">
                Watch how easy it is to build production-ready AI apps with Runware.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm opacity-90 py-1">
              {keyPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <IconComponent size={16} />
                    <span className="font-medium">{point.text}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="flex gap-4 justify-center pt-4">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  size="lg"
                  color={button.color}
                  className={button.className}
                  onClick={button.onClick}
                  startIcon={button.icon}
                >
                  {button.text}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
}