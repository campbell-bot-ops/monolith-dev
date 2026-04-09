import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Navigation from '@/components/Navigation';
import dynamic from 'next/dynamic';
import NoiseOverlay from '@/components/NoiseOverlay';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';
import { BlueprintProvider } from '@/context/BlueprintContext';

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const AudioPlayer = dynamic(() => import('@/components/AudioPlayer'), { ssr: false });
import Preloader from '@/components/Preloader';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500'],
  variable: '--font-cormorant' 
});

export const metadata = {
  title: 'MONOLITH | Engineered Permanence',
  description: 'Ultra-premium structural development firm.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-void text-alabaster font-sans selection:bg-alabaster selection:text-void antialiased min-h-screen">
        <BlueprintProvider>
          <div className="fixed inset-0 structural-grid pointer-events-none z-0" />
          <Preloader />
          <CustomCursor />
          <NoiseOverlay />
          <AudioPlayer />
          <SmoothScroll>
            <Navigation />
            {children}
            <Marquee text="ENGINEERED PERMANENCE // RESIDENCES // ARCHITECTURE" />
            <Footer />
          </SmoothScroll>
        </BlueprintProvider>
      </body>
    </html>
  );
}
