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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">Let's Work Together</h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="rounded-2xl p-8 md:p-12 border border-gray-800"
          style={{ backgroundColor: '#1C1C04' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:border-transparent outline-none transition"
                style={{ backgroundColor: '#1C1C04', '--tw-ring-color': '#EDEDA8' } as React.CSSProperties}
                onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px #EDEDA8'}
                onBlur={(e) => e.currentTarget.style.boxShadow = ''}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:border-transparent outline-none transition"
                style={{ backgroundColor: '#1C1C04', '--tw-ring-color': '#EDEDA8' } as React.CSSProperties}
                onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px #EDEDA8'}
                onBlur={(e) => e.currentTarget.style.boxShadow = ''}
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:border-transparent outline-none transition"
              style={{ backgroundColor: '#1C1C04', '--tw-ring-color': '#EDEDA8' } as React.CSSProperties}
              onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px #EDEDA8'}
              onBlur={(e) => e.currentTarget.style.boxShadow = ''}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:border-transparent outline-none transition"
              style={{ backgroundColor: '#1C1C04', '--tw-ring-color': '#EDEDA8' } as React.CSSProperties}
              onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px #EDEDA8'}
              onBlur={(e) => e.currentTarget.style.boxShadow = ''}
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:border-transparent outline-none transition resize-none"
              style={{ backgroundColor: '#1C1C04', '--tw-ring-color': '#EDEDA8' } as React.CSSProperties}
              onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px #EDEDA8'}
              onBlur={(e) => e.currentTarget.style.boxShadow = ''}
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 text-gray-200 rounded-lg transition flex items-center justify-center gap-2"
            style={{ backgroundColor: '#1C1C04' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(28, 28, 4, 0.8)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1C1C04'}
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

