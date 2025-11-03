import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-gradient-to-br from-fuchsia-50 via-purple-50 to-indigo-50">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-28 lg:py-32 flex items-center min-h-[90vh]">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-fuchsia-700 ring-1 ring-fuchsia-200 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-fuchsia-500" />
            Modern • Aesthetic • Animated
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-gray-900"
          >
            Elevate Your Nails with
            <span className="block bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Luna Nails Studio
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-gray-600 max-w-xl"
          >
            A minimalist, modern sanctuary for self-care. Experience luxurious manicures, bespoke nail art, and serene spa pedicures — all crafted to let your beauty shine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#booking" className="inline-flex items-center justify-center rounded-full bg-fuchsia-600 px-6 py-3 text-white shadow-lg shadow-fuchsia-600/30 hover:bg-fuchsia-700 transition">
              Book an Appointment
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-fuchsia-700 ring-1 ring-fuchsia-200 hover:bg-fuchsia-50 transition">
              View Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
