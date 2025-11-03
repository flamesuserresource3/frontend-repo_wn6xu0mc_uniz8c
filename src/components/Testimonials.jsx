import { Star, Quote, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Amelia Hart',
    role: 'Head of Marketing, LumaPay',
    quote:
      'We went from posting once a week to daily, across five networks — with consistent brand visuals. Our engagement is up 3.2x.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Ravi Narayan',
    role: 'Founder, Shopmodo',
    quote:
      'Holiday promos used to be chaos. Now the calendar is on autopilot and the AI designs actually look on-brand.',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Zoë Laurent',
    role: 'Social Lead, Nova Studio',
    quote:
      'The approvals flow is perfect for our team. We cancel fewer posts and ship more campaigns, faster.',
    avatar: 'https://images.unsplash.com/photo-1544005316-04ae1f6bba5c?q=80&w=200&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-white via-indigo-50/40 to-white overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]">
        <div className="absolute -top-10 left-10 h-56 w-56 rounded-full bg-fuchsia-300/25 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-amber-300/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700 shadow-sm"
          >
            <Users className="h-3.5 w-3.5 text-indigo-600" /> Trusted by fast-growing teams
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900"
          >
            Social proof that actually matters
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-gray-600 max-w-2xl mx-auto"
          >
            Real outcomes from brands using our AI autoposter to stay consistent and on-brand.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <Quote className="absolute -top-3 -left-3 h-6 w-6 text-indigo-500" />
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <figcaption className="font-semibold text-gray-900">{t.name}</figcaption>
                  <div className="text-xs text-gray-600">{t.role}</div>
                </div>
              </div>
              <blockquote className="mt-4 text-sm text-gray-700">“{t.quote}”</blockquote>
              <div className="mt-4 flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-amber-500" />
                ))}
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-gray-600">
                <Shield className="h-3.5 w-3.5 text-gray-900" /> Brand-safe outputs verified
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
