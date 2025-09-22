'use client';
import { Clock, Zap, Server, Container, Database, Wrench, Repeat, KeyRound, Package, Rocket } from 'lucide-react';
import { Card } from 'react-daisyui';

export default function BeforeAfterSection() {
  const comparisonData = [
    {
      title: "Traditional Way",
      subtitle: "Takes weeks",
      icon: <Clock size={28} />,
      colorClass: "error",
      cardClass: "shadow-lg border border-base-300/50",
      steps: [
        { text: "Set up GPU servers and configure environment", icon: <Server size={20} /> },
        { text: "Resolve Docker, CUDA, and driver compatibility", icon: <Container size={20} /> }, 
        { text: "Download models and manage storage", icon: <Database size={20} /> },
        { text: "Build API server, queues, error handling from scratch", icon: <Wrench size={20} /> },
        { text: "Ongoing updates, scaling, and monitoring", icon: <Repeat size={20} /> }
      ]
    },
    {
      title: "The Runware Way",
      subtitle: "Just minutes", 
      icon: <Zap size={28} />,
      colorClass: "success",
      cardClass: "bg-base-100 shadow-lg border border-success/50 ring-2 ring-success/20",
      steps: [
        { text: "Get your API key", icon: <KeyRound size={20} /> },
        { text: "Install Runware SDK", icon: <Package size={20} /> },
        { text: "Run code and see your first result", icon: <Rocket size={20} /> }
      ],
      footer: "Now just focus on building!"
    }
  ];

  const StepCard = ({ data }: { data: typeof comparisonData[0] }) => (
    <Card className={`${data.cardClass} rounded-lg`}>
      <Card.Body className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 bg-${data.colorClass}/10 rounded-lg`}>
            <div className={`text-${data.colorClass}`}>{data.icon}</div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-base-content">{data.title}</h3>
            <p className={`text-${data.colorClass} font-semibold`}>{data.subtitle}</p>
          </div>
        </div>
        <div className="space-y-3">
          {data.steps.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-base-200/50 rounded-lg">
              <div className={`text-${data.colorClass}`}>{item.icon}</div>
              <span className="text-base-content/80">{item.text}</span>
            </div>
          ))}
        </div>
        {data.footer && (
          <div className={`mt-6 text-center bg-${data.colorClass}/10 border border-${data.colorClass}/20 rounded-lg p-4`}>
            <h4 className={`font-bold text-${data.colorClass}`}>{data.footer}</h4>
          </div>
        )}
      </Card.Body>
    </Card>
  );

  return (
    <section className="py-24 bg-base-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-base-content mb-4">
            Weeks vs. Minutes
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Stop wasting time on infrastructure setup.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {comparisonData.map((data, index) => (
            <StepCard key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}
