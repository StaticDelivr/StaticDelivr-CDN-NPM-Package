const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticDelivrImage } = require('staticdelivr');  // Importing StaticDelivrImage

// Define a simple React component using React.createElement (no JSX)
const App = () => {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Optimized Image Example'),
    React.createElement(StaticDelivrImage, {
      src: 'image.jpg',
      width: 500,
      height: 300,
      quality: 85,
      format: 'webp',
      alt: 'An optimized image',
      className: 'image-class'
    })
  );
};

// Server-side rendering (for example, if you want to send HTML to the browser)
const html = ReactDOMServer.renderToString(React.createElement(App));

// Simulate sending this HTML from a server
console.log(html);  // You'd send this HTML to the browser in a real server app
