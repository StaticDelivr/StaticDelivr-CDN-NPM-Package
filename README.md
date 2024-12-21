# StaticDelivr

StaticDelivr is a lightweight React library for optimizing image delivery by leveraging StaticDelivr's CDN. It simplifies image optimization with support for resizing, quality adjustments, and format conversions, ensuring your application delivers the best possible image performance.

## Features

- Seamless integration with React.
- Dynamic resizing and quality optimization of images.
- Automatic format conversion to modern formats like WebP and AVIF.
- Easy configuration with customizable base URL.
- Support for both absolute and relative image paths.

## Installation

Install the package via npm:

```bash
npm install staticdelivr
```

Or using yarn:

```bash
yarn add staticdelivr
```

## Usage

### Basic Usage

```tsx
import React from 'react';
import { StaticDelivrImage, StaticDelivr } from 'staticdelivr';

// Configure the base URL for relative image paths
StaticDelivr.set({ baseURL: 'https://example.com/images/' });

const App = () => (
  <div>
    <StaticDelivrImage
      src="local/image.png"
      width={800}
      height={600}
      quality={80}
      format="webp"
      alt="Optimized Image"
    />
  </div>
);

export default App;
```

### Props

| Prop        | Type                            | Required | Description                                                  |
| ----------- | ------------------------------- | -------- | ------------------------------------------------------------ |
| `src`       | `string`                        | Yes      | The source URL of the image.                                 |
| `width`     | `number`                        | No       | Desired width of the image.                                  |
| `height`    | `number`                        | No       | Desired height of the image.                                 |
| `quality`   | `number` (0-100)                | No       | Quality of the image (default is 100).                       |
| `format`    | `'webp', 'jpeg', 'png', 'avif'` | No       | Image format (e.g., `webp`, `jpeg`, `png`, `avif`).          |
| `alt`       | `string`                        | No       | Alternative text for the image (default is an empty string). |
| `className` | `string`                        | No       | Additional CSS classes for styling the image.                |

### Configuring the Base URL

The base URL is used for resolving relative image paths and is configured globally. This means once you set it using `StaticDelivr.set()`, it will apply across your entire application unless changed.

```tsx
StaticDelivr.set({ baseURL: 'https://example.com/images/' });
```

This configuration is especially useful when working with relative URLs. If a relative path is provided in the `src` prop, it will be automatically resolved using the global `baseURL`. If you pass an absolute URL to the `src` prop, the base URL will not be applied.

#### Example: Configuring in a Global Application File

You can configure the base URL globally in a file like `_app.tsx` in a Next.js application:

```tsx
// pages/_app.tsx
import React from 'react';
import { StaticDelivr } from 'staticdelivr';

StaticDelivr.set({ baseURL: 'https://example.com/images/' });

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
```

### Example: Absolute URLs

```tsx
<StaticDelivrImage
  src="https://other-cdn.com/image.jpg"
  width={400}
  height={300}
  quality={90}
  format="jpeg"
  alt="External Image"
/>
```

### Example: Relative URLs

```tsx
<StaticDelivrImage
  src="/path/to/image.jpg"
  width={500}
  height={400}
  quality={70}
  format="png"
  alt="Local Image"
/>
```

### Easy Integration

StaticDelivr is designed to be straightforward to integrate into your application. You can directly replace your existing `<img>` tags or components like the Next.js `<Image>` tag with `StaticDelivrImage`, making it a seamless transition for projects looking to optimize image delivery.

For example, in a Next.js application, if your images are stored in the `public` directory, they are typically accessed as:

```tsx
<img src="/images/photo.jpg" alt="Example" />
```

By using `StaticDelivrImage` and configuring the `baseURL` to your website's domain, you can optimize these images effortlessly:

```tsx
StaticDelivr.set({ baseURL: 'https://example.com' });

<StaticDelivrImage
  src="/images/photo.jpg"
  width={800}
  height={600}
  quality={85}
  format="webp"
  alt="Example"
/>
```

Here, the `baseURL` ensures that relative paths (e.g., `/images/photo.jpg`) are resolved to `https://example.com/images/photo.jpg`, streamlining image optimization and delivery.

## Development

### Running Tests

To run the test suite:

```bash
npm test
```

### Linting

Ensure code quality by running:

```bash
npm run lint
```

### Building the Package

Build the library for distribution:

```bash
npm run build
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

StaticDelivr is inspired by the need for efficient and reliable image delivery solutions. Special thanks to all the contributors at StaticDelivr.

