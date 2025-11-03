import { Calendar, Clock, Shield, Globe, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Calendar,
    title: '5,000+ events, always up to date',
    desc: 'From global holidays to niche industry days — we keep the calendar fresh so you never miss a moment.'
  },
  {
    icon: Clock,
    title: 'Post at the perfect time',
    desc: 'Smart scheduling optimizes time zones and audience activity for every platform you connect.'
  },
  {
    icon: Shield,
    title: 'On-brand, every time',
    desc: 'Your logos, colors, and tone automatically applied to every image and video our AI creates.'
  },
  {
    icon: Globe,
    title: 'All platforms, one place',
    desc: 'Plan and autopost to the networks your brand uses — with unified approvals and analytics.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-white to-indigo-50/40">
      {/* Decorative background sparkles */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]">
        <div className="absolute top-10 left-10 h-36 w-36 rounded-full bg-fuchsia-300/30 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-36 w-36 rounded-full bg-cyan-300/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900"
          >
            We do the busywork so your brand never goes quiet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-gray-600 max-w-2xl mx-auto"
          >
            Connect once. Approve your brand kit. We’ll handle the rest — concepts, creatives, scheduling, and posting.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-xl transition will-change-transform transform-gpu hover:-translate-y-1 hover:rotate-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-pink-500/10 group-hover:via-purple-500/10 group-hover:to-indigo-500/10 transition" />
              <div className="relative">
                <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center shadow-md">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-indigo-600">
                  <Wand2 className="h-3.5 w-3.5" /> Magic built-in
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
