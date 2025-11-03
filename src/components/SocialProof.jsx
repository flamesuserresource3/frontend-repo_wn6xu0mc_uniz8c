import { Rocket, Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SocialProof() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-indigo-50/40 to-white overflow-hidden">
      {/* Confetti-like dots */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-10 h-2 w-2 rounded-full bg-pink-500/60" />
        <div className="absolute left-1/3 top-24 h-2 w-2 rounded-full bg-amber-500/60" />
        <div className="absolute left-2/3 top-14 h-2 w-2 rounded-full bg-cyan-500/60" />
        <div className="absolute left-3/4 top-32 h-2 w-2 rounded-full bg-purple-500/60" />
      </div>

      <div className="mx-auto max-w-6xl px-6 grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Built for teams that care about brand and consistency
          </h3>
          <p className="mt-3 text-gray-600">
            Whether you manage one brand or a whole portfolio, our autopilot keeps your calendar full and your channels consistent — without juggling spreadsheets and folders.
          </p>
          <div className="mt-6 grid grid-cols-3 divide-x rounded-lg border border-gray-200 bg-white text-center overflow-hidden">
            <div className="p-4">
              <div className="text-2xl font-bold text-gray-900">5k+</div>
              <div className="text-xs text-gray-600">Global events</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-gray-900">All</div>
              <div className="text-xs text-gray-600">Major platforms</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-gray-900">AI</div>
              <div className="text-xs text-gray-600">Brand-safe outputs</div>
            </div>
          </div>

          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-gray-900"/> Brand kit lock: logos, fonts, colors respected</li>
            <li className="flex items-center gap-2"><Globe className="h-4 w-4 text-gray-900"/> Multi-language captions on request</li>
            <li className="flex items-center gap-2"><Rocket className="h-4 w-4 text-gray-900"/> One-click approvals and edits</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-video w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-100 via-amber-100 to-cyan-100 opacity-70" />
            <div className="relative h-full w-full rounded-lg bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-sm uppercase tracking-widest text-white/70">Preview</div>
                <div className="mt-2 text-xl font-semibold">Holiday creative — ready to post</div>
                <div className="mt-1 text-white/80 text-sm">Auto-generated visuals with your brand kit applied</div>
              </div>
            </div>
            {/* Glow ring */}
            <div className="pointer-events-none absolute -inset-24 rounded-[40px] bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
