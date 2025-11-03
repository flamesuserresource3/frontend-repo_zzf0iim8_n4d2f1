import { motion } from 'framer-motion';

export default function BookingSection() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    alert(`Thank you, ${name}! We\'ll confirm your appointment shortly.`);
    e.currentTarget.reset();
  }

  return (
    <section id="booking" className="relative w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-gray-900"
          >
            Book Your Moment of Calm
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-gray-600 max-w-xl"
          >
            Choose your service and a preferred time. Our team will follow up to confirm details.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 rounded-2xl bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 ring-1 ring-fuchsia-100"
          >
            <ul className="space-y-2 text-sm text-fuchsia-900/80">
              <li>• Complimentary tea on arrival</li>
              <li>• Hypoallergenic, cruelty-free products</li>
              <li>• Gentle techniques for healthy nails</li>
            </ul>
          </motion.div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-gray-100 p-6 shadow-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl border-gray-200 focus:border-fuchsia-400 focus:ring-fuchsia-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-xl border-gray-200 focus:border-fuchsia-400 focus:ring-fuchsia-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" name="phone" className="mt-1 w-full rounded-xl border-gray-200 focus:border-fuchsia-400 focus:ring-fuchsia-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Service</label>
              <select name="service" className="mt-1 w-full rounded-xl border-gray-200 focus:border-fuchsia-400 focus:ring-fuchsia-400">
                <option>Classic Manicure</option>
                <option>Gel Manicure</option>
                <option>Spa Pedicure</option>
                <option>Bespoke Nail Art</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
              <input type="date" name="date" className="mt-1 w-full rounded-xl border-gray-200 focus:border-fuchsia-400 focus:ring-fuchsia-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
              <input type="time" name="time" className="mt-1 w-full rounded-xl border-gray-200 focus:border-fuchsia-400 focus:ring-fuchsia-400" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Notes</label>
              <textarea name="notes" rows={4} className="mt-1 w-full rounded-xl border-gray-200 focus:border-fuchsia-400 focus:ring-fuchsia-400" placeholder="Design ideas, allergies, preferences..." />
            </div>
          </div>

          <button type="submit" className="mt-6 w-full rounded-full bg-fuchsia-600 px-6 py-3 text-white font-medium shadow-lg shadow-fuchsia-600/30 hover:bg-fuchsia-700 transition">
            Request Appointment
          </button>

          <p className="mt-3 text-center text-xs text-gray-500">No payment required now. We will confirm availability via email.</p>
        </motion.form>
      </div>
    </section>
  );
}
