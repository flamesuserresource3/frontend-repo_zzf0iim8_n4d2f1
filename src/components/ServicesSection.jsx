import { Sparkles, Scissors, Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Sparkles,
    title: 'Classic Manicure',
    desc: 'Nail shaping, cuticle care, and a flawless polish finish for everyday elegance.',
    price: '$25',
  },
  {
    icon: Star,
    title: 'Gel Manicure',
    desc: 'Chip-resistant, high-gloss color that lasts up to 3 weeks with gentle removal.',
    price: '$40',
  },
  {
    icon: Scissors,
    title: 'Spa Pedicure',
    desc: 'Soothing soak, exfoliation, massage, and perfect polish for revitalized feet.',
    price: '$45',
  },
  {
    icon: Heart,
    title: 'Bespoke Nail Art',
    desc: 'Minimal lines, chrome accents, or dreamy gradients — designed just for you.',
    price: 'from $15',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-gray-900"
          >
            Our Signature Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-gray-600 max-w-2xl mx-auto"
          >
            Thoughtfully curated treatments that blend artistry with care.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50/0 to-purple-50/60 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center rounded-xl bg-fuchsia-50 text-fuchsia-700 p-3 ring-1 ring-fuchsia-100">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                <div className="mt-5 inline-flex items-center rounded-full bg-gray-50 px-3 py-1 text-sm text-gray-700 ring-1 ring-gray-200">
                  {s.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
