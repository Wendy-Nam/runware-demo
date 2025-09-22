'use client';
import { Footer } from 'react-daisyui';

export default function AppFooter() {
  return (
    <Footer className="bg-base-300 text-base-content p-8 w-full">
      <div className="w-full flex justify-center">
        <div className="text-xs text-base-content/60">
          © 2025 Runware • Built for Developers, Loved by Users
        </div>
      </div>
    </Footer>
  );
}