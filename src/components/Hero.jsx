import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-white via-indigo-50/40 to-white">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft color glows */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]">
        <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-fuchsia-300/30 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-amber-300/25 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 grid items-center gap-10 md:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur px-3 py-1 text-xs text-gray-700 shadow"
          >
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" /> AI Social Autoposter
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            Keep every channel thriving—automatically
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-gray-700 max-w-xl"
          >
            A vibrant, festive autoposter that designs, schedules, and publishes across your social platforms. Brand-safe by default, delightful by design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              <Rocket className="mr-2 h-4 w-4" /> Join the waitlist
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 border border-gray-300 px-5 py-3 text-sm font-semibold shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              Explore features
            </a>
          </motion.div>

          {/* Animated festive pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { text: 'Auto-designs', from: 'from-pink-500/20', to: 'to-purple-500/20' },
              { text: 'Smart scheduling', from: 'from-amber-500/20', to: 'to-rose-500/20' },
              { text: 'Multi-platform', from: 'from-cyan-500/20', to: 'to-indigo-500/20' },
            ].map((pill, i) => (
              <motion.span
                key={pill.text}
                initial={{ y: 0 }}
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                className={`inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gradient-to-r ${pill.from} ${pill.to} px-3 py-1 text-xs text-gray-800 backdrop-blur shadow`}
              >
                <Sparkles className="h-3.5 w-3.5 text-indigo-600" /> {pill.text}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Right column: framed Spline viewport with subtle mask so text remains readable */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative h-[420px] md:h-[520px] rounded-3xl border border-gray-200 bg-white/60 backdrop-blur shadow-xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <Spline
              scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          {/* Gradient veil to ensure legibility when overlapping */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
