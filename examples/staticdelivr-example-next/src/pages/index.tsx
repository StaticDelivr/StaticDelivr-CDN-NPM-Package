import React from 'react';
import Link from 'next/link';
import { StaticDelivrImage } from 'staticdelivr';
import Image from 'next/image';  // Using Next.js optimized Image component

const HomePage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>StaticDelivr Example</h1>
      
      {/* Regular locally hosted image */}
      <p>
        <strong>Locally hosted image:</strong><br />
        This is a standard image hosted on your website. The image is not optimized.
      </p>
      <Image
        src="/600x400/EEE/31343C.png"  // Ensure this image is placed in the 'public' folder
        alt="Unoptimized hosted on your own website"
        width={600}
        height={400}
      />
      
      {/* Optimized image using StaticDelivr */}
      <p>
        <strong>Optimized image using StaticDelivr:</strong><br />
        This image is hosted on the same path (`/600x400/EEE/31343C.png`), but it is optimized and served via StaticDelivr.
      </p>
      <StaticDelivrImage 
        src="/600x400/EEE/31343C.png" 
        alt="Optimized Example" 
      />
      
      {/* Image with an absolute URL */}
      <p>
        <strong>Absolute URL image:</strong><br />
        This image comes from an external URL, and will be optimized directly without the need for a baseurl.
      </p>
      <StaticDelivrImage 
        src="https://placehold.co/600x400/EEE/31343C.png" 
        alt="Absolute Example" 
      />
      
      {/* Link to another page */}
      <div style={{ marginTop: '20px' }}>
        <Link href="/second" style={{ color: '#007bff', textDecoration: 'none' }}>
            Go to Second Page
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
