import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Let's Work Together</h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="rounded-2xl p-8 md:p-12 border border-purple-200 bg-purple-50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-black mb-2 font-mono">
                First name <span className="text-purple-600">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-purple-300 text-black bg-white rounded-lg focus:ring-2 focus:border-purple-500 focus:ring-purple-500 outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-black mb-2 font-mono">
                Last name <span className="text-purple-600">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-purple-300 text-black bg-white rounded-lg focus:ring-2 focus:border-purple-500 focus:ring-purple-500 outline-none transition"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-black mb-2 font-mono">
              Email address <span className="text-purple-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-purple-300 text-black bg-white rounded-lg focus:ring-2 focus:border-purple-500 focus:ring-purple-500 outline-none transition"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium text-black mb-2 font-mono">
              Subject <span className="text-purple-600">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-purple-300 text-black bg-white rounded-lg focus:ring-2 focus:border-purple-500 focus:ring-purple-500 outline-none transition"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-black mb-2 font-mono">
              Message <span className="text-purple-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-purple-300 text-black bg-white rounded-lg focus:ring-2 focus:border-purple-500 focus:ring-purple-500 outline-none transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-purple-800 text-white rounded-lg transition flex items-center justify-center gap-2 hover:bg-purple-900 font-mono"
          >
            <Send className="w-4 h-4" />
            Send message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;

