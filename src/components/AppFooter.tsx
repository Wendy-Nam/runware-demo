'use client';
import { Footer } from 'react-daisyui';

export default function AppFooter() {
  return (
    <Footer className="bg-base-300 text-base-content p-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4">
          {/* Brand */}
          <div className="text-center text-xs text-base-content/60">
            © 2025 Runware • Built for Developers, Loved by Users
          </div>
        </div>
      </div>
    </Footer>
  );
}