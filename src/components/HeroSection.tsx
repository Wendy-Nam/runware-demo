'use client';
import { Hero, Button } from 'react-daisyui';
import { Play, Code, Zap, Rocket } from 'lucide-react';
import { useRouter } from 'next/navigation';

// URL Constants
const URLS = {
  GITHUB_REPO: 'https://github.com/runware/sdk-js',
  DOCS: 'https://docs.runware.ai',
  DEMO_PAGE: '/demo',
  QUICKSTART_SECTION: '#quickstart'
} as const;

export default function HeroSection() {
  const router = useRouter();

  return (
    <Hero className="h-full py-16 pt-36 bg-accent-content">
      <Hero.Content className="text-center text-white max-w-5xl">
        <div className="space-y-12">
          {/* Main content - centered */}
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
            
            {/* Simple key points */}
            <div className="flex flex-wrap justify-center gap-8 text-sm opacity-90 py-1">
              <div className="flex items-center gap-2">
                <Zap size={16} className="" />
                <span className="font-medium">One API Call</span>
              </div>
              <div className="flex items-center gap-2">
                <Code size={16} className="" />
                <span className="font-medium">Zero Infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket size={16} className="" />
                <span className="font-medium">Deploy Anywhere</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4 justify-center pt-4">
              <Button 
                color="neutral" 
                size="lg"
                className="px-8 font-semibold rounded-sm"
                onClick={() => router.push(URLS.DEMO_PAGE)}
                startIcon={<Play size={20} />}
              >
                Run Demo
              </Button>
              <Button 
                size="lg"
                className='px-8 btn-outline rounded-sm'
                onClick={() => window.open(URLS.GITHUB_REPO, '_blank')}
              >
                View Github
              </Button>
            </div>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
}