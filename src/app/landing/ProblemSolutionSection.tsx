'use client';
import { useState, useEffect } from 'react';
import { Wifi, Battery, Signal, Play, Pause, Clock, Code, DollarSign, Server, Zap, Wrench, TrendingUp, Shield } from 'lucide-react';
import { Button } from 'react-daisyui';

export default function ProblemSolutionSection() {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const conversations = [
    {
      conceptualPain: "Performance",
      conceptualDescription: "Response delays → User churn",
      chatPain: "With existing APIs, image generation takes about 15 seconds and users just leave while waiting. It's also embarrassing during demos... Is there a faster alternative?",
      solution: "0.6–4.0s per model, no cold starts.",
      solutionTitle: "⚡ Feels Instant",
      avatar: Clock,
      solutionAvatar: Zap,
      category: "Performance",
      avatarColor: "text-red-500 bg-red-100",
      solutionAvatarColor: "text-yellow-500 bg-yellow-100",
      benefit: "→ Users stay engaged"
    },
    {
      conceptualPain: "Developer Experience",
      conceptualDescription: "Rewrite entire codebase when switching models",
      chatPain: "I'm trying to switch to a different model from our current service, but the API syntax is different so I have to rewrite the code. I've been working on this for two days - is there an easier way?",
      solution: "One SDK for images, videos, inpainting. Switch models with a single parameter",
      solutionTitle: "🛠️ One API, All Models",
      avatar: Code,
      solutionAvatar: Wrench,
      category: "Developer Experience",
      avatarColor: "text-blue-500 bg-blue-100",
      solutionAvatarColor: "text-blue-600 bg-blue-100",
      benefit: "→ Maximize dev productivity"
    },
    {
      conceptualPain: "Pricing",
      conceptualDescription: "Unpredictable monthly cost fluctuations",
      chatPain: "Our current cloud AI service bill came out about 3x higher than last month and I can't figure out why. Hidden costs make it hard to plan our budget.",
      solution: "$0.0006/image, affordable pricing structure for startups",
      solutionTitle: "💰 Predictable Growth",
      avatar: DollarSign,
      solutionAvatar: TrendingUp,
      category: "Pricing",
      avatarColor: "text-green-500 bg-green-100",
      solutionAvatarColor: "text-green-600 bg-green-100",
      benefit: "→ Predictable growth"
    },
    {
      conceptualPain: "Infrastructure",
      conceptualDescription: "Server management delays product development",
      chatPain: "We had an outage on our self-hosted GPU servers over the weekend and I had to do recovery work. I feel like I'm spending more time on infrastructure management than product development. Is there a more stable approach?",
      solution: "Auto-scaling, redundancy, 99.9% SLA",
      solutionTitle: "🛡️ Production-Ready",
      avatar: Server,
      solutionAvatar: Shield,
      category: "Infrastructure",
      avatarColor: "text-purple-500 bg-purple-100",
      solutionAvatarColor: "text-purple-600 bg-purple-100",
      benefit: "→ Zero ops worries"
    }
  ];

  const PainPointCard = ({ conv, index, isSelected, onClick }: {
    conv: typeof conversations[0];
    index: number;
    isSelected: boolean;
    onClick: () => void;
  }) => {
    const AvatarIcon = conv.avatar;
    return (
      <div
        onClick={onClick}
        className={`
          cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105
          ${isSelected 
            ? 'bg-red-50 border-red-300 shadow-lg scale-105' 
            : 'bg-white border-gray-100 hover:border-red-200 hover:shadow-md'
          }
        `}
      >
        <div className="flex items-start gap-3">
          <div className={`
            w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
            ${isSelected ? conv.avatarColor : 'bg-gray-100 text-gray-500'}
          `}>
            <AvatarIcon size={20} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-gray-800 font-semibold px-2 py-1 rounded-full">
                {conv.category}
              </span>
              {isSelected && (
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full animate-pulse">
                  Active
                </span>
              )}
            </div>
            <p className="text-gray-500 text-sm">{conv.conceptualDescription}</p>
          </div>
        </div>
      </div>
    );
  };

  const ChatMessage = ({ children, delay, className = "" }: {
    children: React.ReactNode;
    delay: string;
    className?: string;
  }) => (
    <div className={`animate-chatMessage ${className}`} style={{ animationDelay: delay }}>
      {children}
    </div>
  );

  // Auto play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setSelectedQuestion((prev) => (prev + 1) % conversations.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, conversations.length]);

  return (
    <section className="py-20 bg-base-300 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-base-content">
            Real Problems. Real Solutions.
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            See how Runware solves the <span className="font-semibold text-accent-content">exact issues you face daily</span> as a developer.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Question List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Developer Pain Points</h3>
                <Button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-xl transition-colors"
                >
                  {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                  {isAutoPlaying ? 'Pause' : 'Auto Play'}
                </Button>
              </div>

              {conversations.map((conv, index) => (
                <PainPointCard
                  key={index}
                  conv={conv}
                  index={index}
                  isSelected={selectedQuestion === index}
                  onClick={() => setSelectedQuestion(index)}
                />
              ))}
            </div>

            {/* Right Side - Phone Mockup with Answer */}
            <div className="lg:sticky lg:top-8 lg:h-fit">
              <div className="bg-gray-900 rounded-3xl p-3 shadow-2xl mx-auto max-w-md transform transition-all duration-500 hover:scale-105">
                {/* Phone Header */}
                <div className="bg-gray-800 rounded-t-2xl px-4 py-3 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-1">
                    <Signal size={12} />
                    <Wifi size={12} />
                  </div>
                  <div className="font-medium">Developer Community</div>
                  <div className="flex items-center gap-1">
                    <span>100%</span>
                    <Battery size={12} />
                  </div>
                </div>

                {/* Chat Container */}
                <div className="bg-white rounded-b-2xl overflow-hidden p-4 relative" style={{ height: 'calc(4 * 120px + 80px)' }}>
                  <div className="space-y-4 h-full flex flex-col">
                    {/* User Question */}
                    <ChatMessage delay="0.2s" className="flex items-start gap-2">
                      <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                        D
                      </div>
                      <div className="flex-1">
                        <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
                          <p className="text-sm text-gray-800">{conversations[selectedQuestion].chatPain}</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1 ml-2">now</div>
                      </div>
                    </ChatMessage>

                    {/* Runware Answer */}
                    <ChatMessage delay="0.8s" className="flex items-start gap-2 justify-end">
                      <div className="flex-1">
                        <div className="bg-accent-content text-white rounded-2xl rounded-tr-sm px-4 py-4 ml-auto max-w-xs shadow-lg min-h-[160px] flex flex-col">
                          <ChatMessage delay="1.2s" className="mb-3 p-2 bg-white/20 rounded-lg border border-white/30">
                            <h4 className="text-sm font-bold text-white">
                              {conversations[selectedQuestion].solutionTitle}
                            </h4>
                          </ChatMessage>
                          
                          <ChatMessage delay="1.4s" className="text-sm leading-relaxed flex-1">
                            {conversations[selectedQuestion].solution}
                          </ChatMessage>
                          
                          <ChatMessage delay="1.6s" className="mt-3 pt-2 border-t border-white/20">
                            <p className="text-xs text-blue-100">
                              {conversations[selectedQuestion].benefit}
                            </p>
                          </ChatMessage>
                        </div>
                        <ChatMessage delay="1.8s" className="text-xs text-gray-400 mt-1 mr-2 text-right">
                          just now ✓✓
                        </ChatMessage>
                      </div>
                      <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                        R
                      </div>
                    </ChatMessage>

                    {/* Hint overlay */}
                    <div className="absolute bottom-6 left-4 right-4 z-10 pointer-events-none">
                      <div className="py-2 opacity-50">
                        <p className="text-xs text-accent-content text-center">← Click on the pain points!</p>
                      </div>
                    </div>

                    {/* Spacer to push progress indicator to bottom */}
                    <div className="flex-1"></div>

                    {/* Progress indicator */}
                    <div className="pt-4">
                      <div className="flex justify-center gap-2">
                        {conversations.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === selectedQuestion ? 'bg-accent w-6' : 'bg-gray-300'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes chatMessage {
          0% { 
            opacity: 0; 
            transform: translateY(10px) scale(0.98); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        .animate-chatMessage {
          animation: chatMessage 0.5s ease-out both;
        }
      `}</style>
    </section>
  );
}