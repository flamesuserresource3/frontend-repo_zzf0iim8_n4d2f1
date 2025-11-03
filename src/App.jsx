import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import BookingSection from './components/BookingSection';

function App() {
  return (
    <div className="min-h-screen antialiased text-gray-900 bg-white">
      {/* Simple top nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold">
            <span className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Luna Nails</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-fuchsia-700">Services</a>
            <a href="#gallery" className="hover:text-fuchsia-700">Gallery</a>
            <a href="#booking" className="inline-flex items-center rounded-full bg-fuchsia-600 px-4 py-2 text-white hover:bg-fuchsia-700 transition">Book</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <HeroSection />
        <ServicesSection />
        <div id="gallery">
          <GallerySection />
        </div>
        <BookingSection />
      </main>

      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Luna Nails Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-fuchsia-700">Services</a>
            <a href="#gallery" className="hover:text-fuchsia-700">Gallery</a>
            <a href="#booking" className="hover:text-fuchsia-700">Book</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
