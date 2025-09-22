'use client';
import { Clock, Zap, Server, Container, Database, Wrench, Repeat, KeyRound, Package, Rocket } from 'lucide-react';
import { Card } from 'react-daisyui';

export default function BeforeAfterSection() {
  const traditionalSteps = [
    { text: "Set up GPU servers and configure environment", icon: <Server size={20} /> },
    { text: "Resolve Docker, CUDA, and driver compatibility", icon: <Container size={20} /> }, 
    { text: "Download models and manage storage", icon: <Database size={20} /> },
    { text: "Build API server, queues, error handling from scratch", icon: <Wrench size={20} /> },
    { text: "Ongoing updates, scaling, and monitoring", icon: <Repeat size={20} /> }
  ];

  const runwareSteps = [
    { text: "Get your API key", icon: <KeyRound size={20} /> },
    { text: "Install Runware SDK", icon: <Package size={20} /> },
    { text: "Run code and see your first result", icon: <Rocket size={20} /> }
  ];

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
          
          {/* Traditional Way */}
          <Card className="shadow-lg border border-base-300/50">
            <Card.Body className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-error/10 rounded-lg">
                  <Clock size={28} className="text-error" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-base-content">Traditional Way</h3>
                  <p className="text-error font-semibold">Takes weeks</p>
                </div>
              </div>
              <div className="space-y-3">
                {traditionalSteps.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-base-200/50 rounded-lg">
                    <div className="text-error">{item.icon}</div>
                    <span className="text-base-content/80">{item.text}</span>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>

          {/* Runware Way */}
          <Card className="bg-base-100 shadow-lg border border-success/50 ring-2 ring-success/20">
            <Card.Body className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-success/10 rounded-lg">
                  <Zap size={28} className="text-success" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-base-content">The Runware Way</h3>
                  <p className="text-success font-semibold">Just minutes</p>
                </div>
              </div>
              <div className="space-y-3">
                {runwareSteps.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-base-200/50 rounded-lg">
                    <div className="text-success">{item.icon}</div>
                    <span className="text-base-content/80">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center bg-success/10 border border-success/20 rounded-lg p-4">
                <h4 className="font-bold text-success">Now just focus on building!</h4>
              </div>
            </Card.Body>
          </Card>

        </div>
      </div>
    </section>
  );
}
