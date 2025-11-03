import { useState } from 'react';
import { CheckCircle, Mail, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WaitlistCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative py-24">
      {/* Festive gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-rose-50/60 to-indigo-50/60" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900"
        >
          Be first in line
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-gray-600"
        >
          We’re rolling out invites soon. Join the waitlist and get early access plus founder pricing.
        </motion.p>

        {!submitted ? (
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <div className="relative w-full sm:w-96">
              <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                <Mail className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-lg border border-gray-300 bg-white pl-9 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              Join waitlist
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="mt-8 inline-flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800"
          >
            <CheckCircle className="h-5 w-5" />
            Thanks! You’re on the list — we’ll email you when invites go out.
          </motion.div>
        )}

        <div className="mt-6 text-xs text-gray-500">
          No spam. Unsubscribe anytime.
        </div>

        {/* Bonus: small perk pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs text-gray-700 border border-gray-200 shadow"
        >
          <Gift className="h-3.5 w-3.5 text-pink-500" /> Founder pricing for early access
        </motion.div>
      </div>
    </section>
  );
}
