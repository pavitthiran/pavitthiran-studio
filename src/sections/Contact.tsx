import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { supabase } from '../lib/supabase';

const DoodleStar = ({ className }: { className?: string }) => (
  <motion.span
    className={`absolute text-green-primary text-star-glow ${className}`}
    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    ✦
  </motion.span>
);

const DoodleArrow = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" className="absolute -bottom-4 -right-4 opacity-40">
    <motion.path
      d="M5 35 L20 10 M20 10 L35 30 M20 10 L15 20"
      stroke="#22c55e"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Simple validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatusMessage('Please fill in all fields');
      setStatusType('error');
      return;
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatusMessage('Please enter a valid email address');
      setStatusType('error');
      return;
    }

    setLoading(true);
    setStatusMessage('');
    setStatusType('');

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{ 
          name: name.trim(), 
          email: email.trim().toLowerCase(), 
          message: message.trim() 
        }]);

      if (error) {
        console.error('Supabase error:', error);
        throw new Error(error.message);
      }

      setStatusMessage('Message sent successfully! I will get back to you soon.');
      setStatusType('success');
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      console.error('Submission error:', err);
      setStatusMessage(err.message || 'Failed to send message. Please try again later.');
      setStatusType('error');
    } finally {
      setLoading(false);
    }
  };

  const whatsappNumber = '6374520560';
  const whatsappMessage = encodeURIComponent(
    "Hi Pavitthiran, I'd like to discuss a project with you."
  );

  return (
    <SectionWrapper id="contact">
      <SectionTitle
        title="Let's Build Something Great Together"
        subtitle="I'm currently available for freelance work. Reach out and let's talk."
      />

      <div className="grid lg:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="sketch-input w-full px-4 py-3.5 rounded text-text-primary placeholder:text-text-muted transition-all"
              />
              <DoodleStar className="-top-2 -right-2 text-xs" />
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="sketch-input w-full px-4 py-3.5 rounded text-text-primary placeholder:text-text-muted transition-all"
              />
            </div>

            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="sketch-input w-full px-4 py-3.5 rounded text-text-primary placeholder:text-text-muted transition-all resize-none"
              />
            </div>

            {statusMessage && (
              <div className={`p-3 rounded text-sm font-medium ${statusType === 'success' ? 'bg-green-subtle text-green-primary' : 'bg-red-subtle text-red-500'}`}>
                {statusMessage}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.02 } : undefined}
                whileTap={!loading ? { scale: 0.98 } : undefined}
                className="flex-1 py-4 bg-green-primary hover:bg-green-dark text-dark-primary font-bold rounded transition-all duration-300 hover:shadow-lg hover:shadow-green-primary/25 cursor-pointer relative disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
                {submitted && <DoodleStar className="top-0 right-4 text-sm" />}
              </motion.button>

              <motion.a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="sketch-button flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/25"
              >
                <FaWhatsapp size={20} />
                Chat on WhatsApp
              </motion.a>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          <motion.div
            whileHover={{ rotate: Math.random() * 2 - 1 }}
            className="sketch-card p-6 rounded-2xl relative"
          >
            <DoodleArrow />
            <h3 className="text-xl font-bold text-text-primary mb-2 relative inline-block">
              Let's talk about your project
              <DoodleStar className="-top-2 -right-4 text-xs" />
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              I'm currently available for freelance work. If you have a project
              idea or need help building your system, feel free to reach out.
              I'm available for freelance projects and usually respond within a
              few hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-text-secondary hover:text-green-primary transition-colors">
                <div className="sketch-icon w-10 h-10 rounded-lg bg-green-subtle flex items-center justify-center">
                  <HiMail size={18} className="text-green-primary" />
                </div>
                <div>
                  <div className="text-xs text-text-muted">Email</div>
                  <div className="text-sm text-text-primary">
                    pavitthiran66@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-text-secondary hover:text-green-primary transition-colors">
                <div className="sketch-icon w-10 h-10 rounded-lg bg-green-subtle flex items-center justify-center">
                  <HiPhone size={18} className="text-green-primary" />
                </div>
                <div>
                  <div className="text-xs text-text-muted">Phone</div>
                  <div className="text-sm text-text-primary">
                    +91 63745 20560
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}