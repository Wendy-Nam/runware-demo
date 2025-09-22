import { Runware } from '@runware/sdk-js';

const API_KEY = process.env.NEXT_PUBLIC_RUNWARE_API_KEY;
const REQUEST_TIMEOUT = 15000;

// Generate images using Runware API
export async function generateDemoImages(prompt = "Beautiful landscape") {
  try {
    const runware = createRunwareInstance();
    
    const imagePromise = runware.requestImages({
      positivePrompt: prompt,
      model: "runware:101@1",
      width: 1024,
      height: 1024,
    });
    
    const images = await withTimeout(imagePromise, REQUEST_TIMEOUT);
    return extractURL(images, 'imageURL');
  } catch (error) {
    console.log('Image generation failed:', error);
    return [];
  }
}

// Generate videos using Runware API
export async function generateDemoVideos(prompt = "Flying bird in the sky") {
  try {
    const runware = createRunwareInstance();
    
    const response = await runware.videoInference({
      positivePrompt: prompt,
      model: "klingai:5@3",
      duration: 5,
      width: 1080,
      height: 1080
    });
    
    return extractURL(response, 'videoURL') || extractURL(response, 'outputURL');
  } catch (error) {
    console.log('Video generation failed:', error);
    return [];
  }
}

// Create Runware instance with API key validation
const createRunwareInstance = () => {
  if (!API_KEY) {
    throw new Error('Runware API key not found');
  }
  return new Runware({ apiKey: API_KEY });
};

// Add timeout to any Promise
const withTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> => {
  const timeout = new Promise<never>((_, reject) => 
    setTimeout(() => reject(new Error(`Request timeout after ${ms}ms`)), ms)
  );
  return Promise.race([promise, timeout]);
};

// Extract URL from API response (array or object)
const extractURL = (response: unknown, urlKey: string): string[] => {
  if (Array.isArray(response) && response.length > 0) {
    const url = (response[0] as Record<string, unknown>)?.[urlKey];
    return typeof url === 'string' ? [url] : [];
  }
  const url = (response as Record<string, unknown>)?.[urlKey];
  return typeof url === 'string' ? [url] : [];
};
