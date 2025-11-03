import { useState } from 'react';
import { Check, CreditCard, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'Beta access',
    features: [
      '1 brand kit',
      'Connect 2 platforms',
      '50 AI images / month',
      'Basic scheduling',
    ],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$39',
    cadence: 'per month',
    features: [
      'Up to 3 brand kits',
      'Connect 6 platforms',
      'Unlimited AI images',
      'Optimal time posting',
      'Approval flows',
      'Analytics overview',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'Annual',
    features: [
      'Unlimited brands & platforms',
      'Advanced roles & SSO',
      'API & custom workflows',
      'Dedicated success manager',
    ],
    highlight: false,
  },
];

export default function Pricing() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-white to-indigo-50/40 overflow-hidden">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]">
        <div className="absolute -top-16 right-1/4 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-pink-300/25 blur-3xl" />
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
            <CreditCard className="h-3.5 w-3.5 text-indigo-600" /> Simple, transparent pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900"
          >
            Start free. Upgrade when you scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-gray-600 max-w-2xl mx-auto"
          >
            Join the waitlist for beta access and founder pricing. No credit card required.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`relative rounded-2xl border p-6 shadow-sm bg-white ${
                tier.highlight ? 'border-gray-900' : 'border-gray-200'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 right-4 inline-flex items-center gap-1 rounded-full bg-gray-900 text-white px-2.5 py-1 text-[10px] font-semibold">
                  <Sparkles className="h-3 w-3" /> Popular
                </div>
              )}
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                  <div className="mt-1 text-sm text-gray-500">{tier.cadence}</div>
                </div>
                <div className="text-2xl font-extrabold text-gray-900">{tier.price}</div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-gray-700">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-semibold shadow focus:outline-none focus:ring-2 focus:ring-gray-900 ${
                tier.highlight ? 'bg-gray-900 text-white hover:opacity-90' : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-50'
              }`}>
                Join waitlist
              </button>
            </motion.div>
          ))}
        </div>

        {/* Inline waitlist capture */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
        >
          {!submitted ? (
            <>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full sm:w-96 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                Join waitlist
              </button>
            </>
          ) : (
            <div className="inline-flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
              You’re on the list! We’ll email you when invites go out.
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
