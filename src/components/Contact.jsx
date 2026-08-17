import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, Github, Linkedin, Mail, Copy, MapPin, Phone } from 'lucide-react';
import { useFormValidation } from '../hooks/useFormValidation';
import { profile } from '../data/profile';

/**
 * ContactInfo — renders contact details and social links
 */
const ContactInfo = () => {
  const [copied, setCopied] = useState(false);
  const contactDetails = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: profile.location,
      href: null,
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: profile.phone,
      href: 'tel:+5586988771874',
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      href: profile.github,
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: profile.linkedin,
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      href: `mailto:${profile.email}`,
    },
  ];

  const copyEmail = async () => {
    if (!navigator.clipboard) return;
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Contact details */}
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={detail.label}
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className="mt-1 p-3 rounded-lg bg-ink-800/70 border border-beige-700/40 text-red-500"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {detail.icon}
            </motion.div>
            <div>
              <p className="text-sm text-beige-500">{detail.label}</p>
              {detail.href ? (
                <motion.a
                  href={detail.href}
                  className="text-lg text-beige-200 hover:text-red-400 transition-colors"
                  whileHover={{ x: 3 }}
                >
                  {detail.value}
                </motion.a>
              ) : (
                <p className="text-lg text-beige-200">{detail.value}</p>
              )}
            </div>
            {detail.label === 'Email' && (
              <motion.button
                onClick={copyEmail}
                className="ml-auto mt-5 p-1 text-beige-500 hover:text-red-500 rounded"
                whileHover={{ scale: 1.1 }}
                aria-label={copied ? 'Email copied' : 'Copy email'}
                title={copied ? 'Copied' : 'Copy email'}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Social links */}
      <div>
        <h4 className="text-sm font-semibold text-beige-500 mb-4">Connect</h4>
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-ink-800/70 border border-beige-700/40 text-beige-400 hover:text-red-400 hover:border-red-500/50 flex items-center justify-center transition-all duration-200"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * ContactForm — form with validation and submission status
 */
const ContactForm = () => {
  const { values, errors, handleChange, validate, resetForm } = useFormValidation({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validate({
      name: {
        required: 'Name is required',
        minLength: { value: 2, message: 'Name must be at least 2 characters' },
      },
      email: {
        required: 'Email is required',
        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
      },
      message: {
        required: 'Message is required',
        minLength: { value: 10, message: 'Message must be at least 10 characters' },
      },
    });

    if (!isValid) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    resetForm();

    // Reset submitted state after a few seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Name and Email — side by side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-beige-300 mb-2">
            Name
          </label>
          <motion.input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder="John Doe"
            className={`w-full px-4 py-3 bg-ink-800/70 border rounded-lg text-beige-200 placeholder-beige-600 focus:outline-none focus:ring-2 transition-all duration-200 ${
              errors.name
                ? 'border-red-500/60 focus:ring-red-500/30'
                : 'border-beige-700/50 focus:border-red-500/60 focus:ring-red-500'
            }`}
            whileFocus={{ scale: 1.01 }}
          />
          {errors.name && (
            <motion.p
              id="name-error"
              className="mt-1 text-sm text-red-300"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.name}
            </motion.p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-beige-300 mb-2">
            Email
          </label>
          <motion.input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="you@example.com"
            className={`w-full px-4 py-3 bg-ink-800/70 border rounded-lg text-beige-200 placeholder-beige-600 focus:outline-none focus:ring-2 transition-all duration-200 ${
              errors.email
                ? 'border-red-500/60 focus:ring-red-500/30'
                : 'border-beige-700/50 focus:border-red-500/60 focus:ring-red-500'
            }`}
            whileFocus={{ scale: 1.01 }}
          />
          {errors.email && (
            <motion.p
              id="email-error"
              className="mt-1 text-sm text-red-300"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.email}
            </motion.p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-beige-300 mb-2">
          Subject
        </label>
        <motion.input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={handleChange}
          placeholder="Project collaboration, job opportunity, etc."
          className={`w-full px-4 py-3 bg-ink-800/70 border border-beige-700/50 rounded-lg text-beige-200 placeholder-beige-600 focus:outline-none focus:ring-2 focus:border-red-500/60 focus:ring-red-500 transition-all duration-200`}
          whileFocus={{ scale: 1.01 }}
        />
        {errors.subject && (
          <motion.p
            className="mt-1 text-sm text-red-300"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.subject}
          </motion.p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-beige-300 mb-2">
          Message
        </label>
        <motion.textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder="How can I help you?"
          rows={6}
          className={`w-full px-4 py-3 bg-ink-800/70 border rounded-lg text-beige-200 placeholder-beige-600 resize-none focus:outline-none focus:ring-2 transition-all duration-200 ${
            errors.message
              ? 'border-red-500/60 focus:ring-red-500/30'
              : 'border-beige-700/50 focus:border-red-500/60 focus:ring-red-500'
          }`}
          whileFocus={{ scale: 1.01 }}
        />
        {errors.message && (
          <motion.p
            id="message-error"
            className="mt-1 text-sm text-red-300"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* Submit button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-red-700 to-red-500 text-beige-50 font-medium rounded-lg shadow-lg shadow-ink-950/40 hover:shadow-xl hover:shadow-red-600/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-beige-50"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-label="Loading"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </>
        ) : isSubmitted ? (
          <>
            <Check size={20} />
            Message ready!
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </motion.button>
      <p className="text-center text-xs text-beige-600">
        Demo form with client-side validation. Connect your preferred form service before launch.
      </p>
    </motion.form>
  );
};

/**
 * Contact — contact form + social links
 */
const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="section-padding bg-gradient-to-b from-ink-950 to-ink-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.span
            className="text-sm font-semibold text-red-500 tracking-wider uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-3 gradient-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let&apos;s build something amazing together
          </motion.h2>
          <motion.p
            className="text-beige-400 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Tem uma pergunta, um projeto em mente ou quer conversar sobre uma oportunidade? Entre em
            contato para falarmos sobre desenvolvimento de software, APIs e automação.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info (left column) */}
          <motion.div
            className="lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-beige-200 mb-8">Contact Information</h3>
            <ContactInfo />
          </motion.div>

          {/* Contact form (right column) */}
          <motion.div
            className="lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-beige-200 mb-8">Send a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
