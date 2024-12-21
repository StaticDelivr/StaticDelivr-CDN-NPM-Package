import { AppProps } from 'next/app';
import { StaticDelivr } from 'staticdelivr';

StaticDelivr.set({ baseURL: 'https://placehold.co' });  // Set your StaticDelivr base URL globally

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
