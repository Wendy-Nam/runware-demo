# Part 2 — Building with Runware (Live Demo)

**Presenter**: Seo-A  
**Role**: Candidate for Runware Graduate Role  
**Topic**: Runware Live Technical Demo

---

## Opening

"Let's see Runware in action. With just a few lines of code, we'll generate images and videos in parallel — showing how its value translates directly into applications."

---

## Tech Stack Intro

"Let me quickly introduce the tech stack I used: the Runware JavaScript SDK with Next.js.

I chose Next.js for three reasons:

1. **Fast prototyping** – it's React-based, which makes iteration quick.
2. **Rich UI ecosystem** – I could use existing React design libraries to cut down UI development time.
3. **Built-in routing** – I could separate the landing page and demo page without extra router setup.

And the core of this demo really comes down to just two files:

- `app/utils/runware.ts` for the API logic
- `app/demo/LiveDemoSection.tsx` for the UI integration and rendering."

---

## SDK Key Advantage

"The biggest strength of the Runware SDK is its **WebSocket persistent connection**.

Unlike traditional REST APIs, where each request opens a new connection, Runware keeps the connection alive.

That means long-running tasks like video generation are automatically handled — no manual polling, no state checks.

All of that complexity is managed by the SDK behind the scenes."

---

## Demo Intro

"Now let's see it in action. I'll focus on three things:

1. **Asynchronous parallel image generation**
2. **Parallel video generation alongside images**
3. **How easy it is to switch models**

First, I'll grab a new API key and drop it into `.env.local`.

On the dashboard here, you can see usage logs update in real time — showing cost and model info for each request.

By the way, Runware uses a credit-based system, so there's no surprise billing — another big plus."

---

## Parallel Requests Demo

"Let's generate two images and two videos at the same time.

[Click image button twice]

[Click video button twice]

Since video rendering takes longer, let me explain the code while it runs."

---

## Code Walkthrough

"At the top of the demo page you see a simple MVP code snippet.

The real logic is in `runware.ts`, where I slightly adapted the official SDK async example.

Error handling is simplified here — just console logs and a UI 'fail' message for the demo.

If you look at lines 14–38 of `LiveDemoSection.tsx`, you'll see `generateDemoImages()` and `generateDemoVideos()` in action.

The `addItem` function updates React state with each result, so progressive streaming maps directly into the UI.

As soon as the state changes, a new `MediaItem` component renders automatically."

---

## Results

"Here we go — the images are done, and the video has finished rendering too.

Looks great: a bird flying freely in the sky.

And if we check the dashboard again, we can see the requests logged instantly.

Images are very affordable, and even high-quality video comes at a reasonable cost."

---

## Model Switching Demo

"Finally, let's switch models.

I've prepared another model ID in the code comments. All I need to do is change that string and rerun.

[Swap model ID and rerun]

You can clearly see the difference: Runware's default model looks vivid and realistic, while the Civitai model has more painterly, stylized textures.

If you've worked with AI APIs before, you know that switching providers usually means rewriting handlers and re-integrating the whole stack.

With Runware, it's literally **one line** — just swap the model name."

---

## Closing

"So, to recap, today I showed you:

- How easy it is to integrate Runware's API with the JavaScript SDK
- Parallel async generation for images and video
- One-line model switching
- And a transparent, affordable pricing system

Runware makes complex AI media workflows simple and efficient.

Thank you."

---

## Technical Notes

- **File References**: 
  - `src/app/utils/runware.ts` - API logic implementation
  - `src/app/demo/LiveDemoSection.tsx` - UI integration (lines 14-38)
- **Key Demo Points**: 
  - WebSocket persistent connection advantage
  - Credit-based pricing transparency
  - One-line model switching capability
- **Target Audience**: Developers looking for AI API solutions