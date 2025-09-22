'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Card, Button, Loading } from 'react-daisyui';
import { generateDemoImages, generateDemoVideos } from '@/utils/runware';

interface MediaItem {
  id: number;
  url?: string;
  loading: boolean;
}

export default function LiveDemoSection() {
  const [imageItems, setImageItems] = useState<MediaItem[]>([]);
  const [videoItems, setVideoItems] = useState<MediaItem[]>([]);

  const addItem = async (type: 'image' | 'video') => {
    const id = Date.now();
    const setState = type === 'image' ? setImageItems : setVideoItems;
    
    setState(prev => [...prev, { id, loading: true }]);
    
    try {
      const results = type === 'image' 
        ? await generateDemoImages()
        : (await generateDemoVideos()).filter(Boolean);
      
      console.log('🎯 Generated results:', results);
      console.log('🎯 First result URL:', results[0]);
      
      setState(prev => 
        prev.map(item => 
          item.id === id ? { ...item, loading: false, url: results[0] } : item
        )
      );
    } catch {
      setState(prev => 
        prev.map(item => 
          item.id === id ? { ...item, loading: false } : item
        )
      );
    }
  };

  const MediaQueue = ({ items, title, type }: { 
    items: MediaItem[], 
    title: string, 
    type: 'image' | 'video',
  }) => (
    <Card className="bg-base-100 shadow-xl rounded-md">
      <Card.Body>
        <div className="flex justify-between items-center">
          <Card.Title>{title}</Card.Title>
          <Button size="sm" onClick={() => addItem(type)} className='rounded-md'>
            Generate {title}
          </Button>
        </div>
        <div className="flex overflow-x-auto gap-4 p-2 bg-base-200">
          {items.map(item => (
            <div key={item.id} className="flex-shrink-0 w-48 h-48 bg-base-200 rounded flex items-center justify-center">
              {item.loading ? (
                <div className='w-[200px] h-[200px] flex items-center justify-center border border-2 border-gray-200 bg-gray-100'>
                  <Loading size="lg" className='text-accent-content/80'/>
                </div>
              ) : item.url ? (
                type === 'image' ? (
                  <Image src={item.url} alt="" width={200} height={200} className="rounded w-full h-full object-cover" />
                ) : (
                  <video src={item.url} controls className="rounded w-full h-full object-cover" />
                )
              ) : (
                <span className="text-base-content/50">Failed</span>
              )}
            </div>
          ))}
          {items.length === 0 && (
            <div className="text-center w-full py-8 text-base-content/50">
              No {title.toLowerCase()} generated yet
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <div className="max-w-6xl mx-auto pt-6 space-y-6">
      <MediaQueue items={imageItems} title="Images" type="image"/>
      <MediaQueue items={videoItems} title="Videos" type="video"/>
    </div>
  );
}