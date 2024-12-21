import React from 'react';
import { StaticDelivrImage } from 'staticdelivr';  // Import StaticDelivrImage component

const SecondPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Second Page Example</h1>

      {/* Explanation about global baseURL */}
      <p>
        The images on this page are optimized using StaticDelivr, just like on the first page. The difference is, 
        we don’t need to repeat the base URL for each image. 
        This is because the <strong>base URL for StaticDelivr</strong> is set globally in the project configuration, 
        so any relative image path can be automatically resolved.
      </p>

      <p>
        Here’s how it works:
      </p>
      <ul>
        <li>
          The relative path in the `src` prop (like `/path/to/another-image.png`) is combined with the globally set base URL.
          This means you don’t need to manually set the full URL for each image in the app. StaticDelivr handles this automatically.
        </li>
        <li>
          For example, if the base URL is `https://your-site.com`, then `src="/path/to/another-image.png"` will be resolved as 
          `https://your-site.com/path/to/another-image.png`.
        </li>
      </ul>

      {/* Optimized image using StaticDelivr */}
      <p>
        <strong>Optimized image using StaticDelivr:</strong><br />
        The following image is served with optimizations like resizing, format conversion, and compression, all 
        based on the global settings. StaticDelivr ensures that the image is delivered with the best quality and performance.
      </p>
      <StaticDelivrImage
        src="/600x400/EEE/31343C.png"  // Relative path, baseURL will be applied automatically
        alt="Optimized Example"
      />

      {/* Absolute URL image with StaticDelivr optimization */}
      <p>
        <strong>Absolute URL image:</strong><br />
        This image comes from an external URL, and will be optimized directly without the need for a baseurl.
      </p>
      <StaticDelivrImage
        src="https://placehold.co/600x400/EEE/31343C.png"  // Absolute URL, no baseURL application
        alt="Absolute Example"
      />
    </div>
  );
};

export default SecondPage;
