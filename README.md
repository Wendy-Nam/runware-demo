# Runware Demo – AI Image & Video Generator

**AI Generation Demo**: Web application showcasing Runware's API capabilities with minimal code integration.

## 📋 Assessment Context

This project was built as part of Runware's Graduate Roles Assessment to evaluate:

- **Technical Integration** – API implementation with error handling
- **Developer Communication** – Clear code & documentation  
- **Presentation Skills** – Demo-ready app with smooth UX

## 🎯 Demo Flow

1. **Landing Page** – Runware's value proposition for developers
2. **Code Walkthrough** – `runware.ts` API integration explained
3. **Live Demo** – Real-time image & video generation

## ✨ Key Features

- **🖼️ One-click Image Generation** – Instant high-quality results
- **🎬 Video Generation** – Cinematic 5s clips powered by Kling AI  
- **⚡ Real-time Queue Handling** – Parallel processing with live updates
- **📱 Responsive UI** – Optimized across devices

## 🚀 Quick Start

```bash
git clone https://github.com/Wendy-Nam/runware-demo.git
cd runware-demo
npm install
# Add API key to .env.local: NEXT_PUBLIC_RUNWARE_API_KEY=your_key
npm run dev
# Visit http://localhost:3000/demo
```

## 🔧 Technical Implementation

**Stack**: Next.js 15 + TypeScript + TailwindCSS/DaisyUI  
**Architecture**: Two-file separation → `runware.ts` (API logic) + `LiveDemoSection.tsx` (UI)  
**AI Models**:
- Images → `runware:101@1` (SDXL, 1024×1024, 15s timeout)
- Videos → `klingai:5@3` (1080×1080, 5s duration)

**Design Choices**: Fixed prompts ("Beautiful landscape", "Flying bird"), parallel request handling, type-safe API calls

## 🎬 Demo Experience

- **Images** → "Beautiful landscape" generated instantly
- **Videos** → "Flying bird in the sky" 5s cinematic clip  
- **Queue System** → Multiple requests with progress indicators
- **Feedback** → Real-time logs showing usage & status

## 📁 Project Structure

```
src/
├── app/demo/           # Interactive demo
├── app/landing/        # Landing page  
├── utils/runware.ts    # API integration
└── components/         # Reusable UI components
```

## 📚 Resources

- [Runware Docs](https://docs.runware.ai) • [Playground](https://my.runware.ai/playground) • [Runware SDK (JS)](https://github.com/Runware/sdk-js)

---

**Built for Runware Graduate Roles Assessment**
