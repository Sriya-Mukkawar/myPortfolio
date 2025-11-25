import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Sriya delivered exceptional work on our project. The code was clean, well-structured, and the implementation was flawless.",
    author: "Team Lead",
    role: "Blank Labs",
  },
  {
    text: "A talented developer who brings both technical expertise and creative problem-solving to every project.",
    author: "Mentor",
    role: "Qurinom",
  },
  {
    text: "Professional, detail-oriented, and always delivers on time. Highly recommend working with Sriya.",
    author: "Colleague",
    role: "VIT Chennai",
  },
];

const Testimonials = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gray-700 flex-1 max-w-32"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-200">WORDS</h2>
            <div className="h-px bg-gray-700 flex-1 max-w-32"></div>
          </div>
          <div className="text-6xl md:text-8xl font-bold text-gray-700">MATTER</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-200 mb-4">Feedback That Fuels Me</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-colors"
              style={{ backgroundColor: '#1C1C04' }}
            >
              <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center text-xl font-bold" style={{ background: 'linear-gradient(to bottom right, #EDEDA8, #EDEDA8)', color: '#1C1C04' }}>
                {testimonial.author.charAt(0)}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-gray-200">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

