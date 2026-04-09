import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-void w-full pt-32 pb-12 px-6 md:px-24 border-t border-cured_concrete/20 z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-0">
        
        {/* Brand / Logo */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-2xl font-serif tracking-super-wide text-alabaster uppercase">
            MONOLITH
          </Link>
          <p className="text-micro text-cured_concrete uppercase tracking-widest">
            Engineered Permanence.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 text-sm font-sans tracking-widest uppercase">
          
          <div className="flex flex-col gap-4">
            <span className="text-cured_concrete text-micro mb-2">Platform</span>
            <Link href="/" className="text-alabaster hover:text-cured_concrete transition-colors">Home</Link>
            <Link href="/properties" className="text-alabaster hover:text-cured_concrete transition-colors">Properties</Link>
            <Link href="/discipline" className="text-alabaster hover:text-cured_concrete transition-colors">Discipline</Link>
          </div>

          <div className="flex flex-col gap-4">
             <span className="text-cured_concrete text-micro mb-2">Connect</span>
            <Link href="/inquiries" className="text-alabaster hover:text-cured_concrete transition-colors">Inquiries</Link>
            <a href="#" className="text-alabaster hover:text-cured_concrete transition-colors">Instagram</a>
            <a href="#" className="text-alabaster hover:text-cured_concrete transition-colors">LinkedIn</a>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-32 flex flex-col md:flex-row justify-between items-center text-micro text-cured_concrete tracking-widest uppercase border-t border-cured_concrete/20 pt-8 gap-4 md:gap-0">
        <span>&copy; {new Date().getFullYear()} Monolith Structural Firm. All rights reserved.</span>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-alabaster transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-alabaster transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
