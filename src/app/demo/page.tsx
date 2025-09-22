import LiveDemoSection from '@/app/demo/LiveDemoSection';
import CodeBlock from '@/app/demo/CodeBlock';

export default function DemoPage() {
  return (
    <div className='min-h-screen bg-accent/10 py-12'>
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <h2 className="text-4xl font-bold text-center text-accent">
          Live Workshop Demo
        </h2>
        <CodeBlock />
        <LiveDemoSection />
      </div>
    </div>
  );
}