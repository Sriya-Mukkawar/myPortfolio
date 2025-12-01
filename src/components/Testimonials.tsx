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
          className="text-left mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Feedback That Fuels Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl p-8 border border-blue-200 hover:border-blue-300 transition-colors bg-blue-50"
            >
              <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center text-xl font-bold bg-blue-600 text-white">
                {testimonial.author.charAt(0)}
              </div>
              <p className="text-black mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-black">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

