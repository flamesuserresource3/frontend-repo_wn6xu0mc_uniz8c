import Spline from '@splinetool/react-spline';
import { Rocket, Calendar, Zap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      {/* Festive colorful glows */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full bg-pink-400/30 blur-3xl" />
      <div className="pointer-events-none absolute top-20 -right-10 h-64 w-64 rounded-full bg-purple-400/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 h-full mx-auto max-w-6xl px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700 shadow-sm"
        >
          <Zap className="h-3.5 w-3.5 text-yellow-500" />
          <span>Auto-post to every platform • 5,000+ global events</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-gray-900"
        >
          Put your brand on autopilot for every social moment
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-gray-700"
        >
          Our AI links your social accounts and schedules on-brand images & videos for global holidays and niche observances — posted perfectly on time, every time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3"
        >
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-5 py-3 text-sm font-semibold shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/50">
            <Rocket className="h-4 w-4" />
            Join the waitlist
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-5 py-3 text-sm font-semibold shadow border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
            <Calendar className="h-4 w-4" />
            See how it works
          </a>
        </motion.div>

        {/* Floating festive icons */}
        <motion.div
          aria-hidden
          className="absolute bottom-28 left-10 hidden md:block"
          animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex items-center gap-2 rounded-xl bg-white/80 backdrop-blur px-3 py-2 shadow border border-gray-200">
            <Sparkles className="h-4 w-4 text-pink-500" />
            <span className="text-xs font-medium text-gray-700">Festive posts, handled</span>
          </div>
        </motion.div>

        <motion.div
          aria-hidden
          className="absolute top-32 right-10 hidden md:block"
          animate={{ y: [0, 12, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex items-center gap-2 rounded-xl bg-white/80 backdrop-blur px-3 py-2 shadow border border-gray-200">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span className="text-xs font-medium text-gray-700">On-brand visuals</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
