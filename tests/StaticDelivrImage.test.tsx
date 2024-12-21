import React from 'react';
import { render } from '@testing-library/react';
import { StaticDelivrImage } from '../src/StaticDelivrImage';
import { config } from '../src/config';

describe('StaticDelivrImage', () => {
  beforeEach(() => {
    config.set({ baseURL: 'https://example.com/images/' });
  });

  it('renders an image with optimized URL for local paths', () => {
    const { getByAltText } = render(
      <StaticDelivrImage src="local/image.png" width={800} height={600} quality={80} format="webp" alt="Test Image" />
    );
    const img = getByAltText('Test Image');
    expect(img).toHaveAttribute(
      'src',
      'https://cdn.staticdelivr.com/img/images?url=https%3A%2F%2Fexample.com%2Fimages%2Flocal%2Fimage.png&w=800&h=600&q=80&format=webp'
    );
  });

  it('renders an image without modifying absolute URLs', () => {
    const { getByAltText } = render(
      <StaticDelivrImage src="https://other-cdn.com/image.jpg" width={400} height={300} quality={90} format="jpeg" alt="External Image" />
    );
    const img = getByAltText('External Image');
    expect(img).toHaveAttribute(
      'src',
      'https://cdn.staticdelivr.com/img/images?url=https%3A%2F%2Fother-cdn.com%2Fimage.jpg&w=400&h=300&q=90&format=jpeg'
    );
  });

  it('renders an image with optimized URL for local paths with leading slashes', () => {
    const { getByAltText } = render(
      <StaticDelivrImage src="/path/image.png" width={500} height={400} quality={70} format="png" alt="Leading Slash Image" />
    );
    const img = getByAltText('Leading Slash Image');
    expect(img).toHaveAttribute(
      'src',
      'https://cdn.staticdelivr.com/img/images?url=https%3A%2F%2Fexample.com%2Fimages%2Fpath%2Fimage.png&w=500&h=400&q=70&format=png'
    );
  });
});
