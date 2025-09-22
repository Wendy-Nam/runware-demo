import { Runware } from '@runware/sdk-js';

export async function generateDemoImages(prompt = "Beautiful landscape") {
  console.log('🚀 Starting API call...');
  console.log('🔑 API Key:', process.env.NEXT_PUBLIC_RUNWARE_API_KEY ? 'EXISTS' : 'MISSING');
  console.log('🔑 API Key length:', process.env.NEXT_PUBLIC_RUNWARE_API_KEY?.length);
  console.log('🔑 Full API Key:', process.env.NEXT_PUBLIC_RUNWARE_API_KEY);
  
  if (!process.env.NEXT_PUBLIC_RUNWARE_API_KEY) {
    console.error('❌ No API key found');
    return [];
  }
  
  console.log('🔧 Creating Runware instance...');
  const runware = new Runware({ 
    apiKey: process.env.NEXT_PUBLIC_RUNWARE_API_KEY || '' 
  });
  console.log('✅ Runware instance created');
  
  try {
    console.log('🌐 Attempting API call...');
    
    // 15초 타임아웃 설정
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timeout after 15s')), 15000)
    );
    
    const imagePromise = runware.requestImages({
      positivePrompt: prompt,
      model: "runware:101@1", // 기본 모델로 변경
      width: 1024,
      height: 1024,
    });
    
    const images = await Promise.race([imagePromise, timeoutPromise]);
    
    console.log('✅ API Success:', images);
    console.log('✅ API Response Type:', typeof images);
    console.log('✅ Is Array:', Array.isArray(images));
    
    let result;
    if (Array.isArray(images)) {
      console.log('✅ Array length:', images.length);
      console.log('✅ First item:', images[0]);
      result = [images[0]?.imageURL];
    } else {
      console.log('✅ Single object:', images);
      result = [images?.imageURL];
    }
    
    console.log('✅ Final result:', result);
    return result;
  } catch (error) {
    console.error('❌ API Failed:', error);
    return [];
  }
}

export async function generateDemoVideos(prompt: string = "Flying bird in the sky") {
  console.log('🎬 Starting video generation...', prompt);
  
  try {
    const runware = new Runware({
      apiKey: process.env.NEXT_PUBLIC_RUNWARE_API_KEY || ''
    });
    
    console.log('✅ Runware instance created');

    const payload = {
      positivePrompt: prompt,
      model: "klingai:5@3",
      duration: 5,
      width: 1080,
      height: 1080
    };

    console.log('🎬 Video request payload:', payload);
    console.log('⏳ Video generation started... (this may take several minutes)');
    
    // SDK가 자체적으로 처리하도록 단순화
    const response = await runware.videoInference(payload);
    
    console.log('Video API response:', response);
    
    if (Array.isArray(response) && response.length > 0) {
      const videoURL = response[0]?.videoURL || response[0]?.outputURL;
      if (videoURL) {
        console.log(`Generated video: ${videoURL}`);
        return [videoURL];
      }
    } else if (response) {
      const videoURL = response.videoURL || response.outputURL;
      if (videoURL) {
        console.log(`Generated video: ${videoURL}`);
        return [videoURL];
      }
    }
    
    throw new Error('No video URL in response');
      
  } catch (error) {
    console.error('Video generation failed:', error);
    return [];
  }
}
 