import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Send, Check, X } from 'lucide-react';
import restaurantConfig from '../../data/restaurant.config';
import { SectionTitle } from '../../components/UI/SectionTitle';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Check if form is valid
    if (formData.name && (formData.email || formData.phone) && formData.message) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    
    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <motion.div
      className="min-h-screen py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="CONTACT & ACCÈS"
            subtitle="Comment nous trouver et nous contacter"
          />
        </motion.div>

        {/* Contact Info and Map */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-3xl font-display font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              COORDONNÉES
            </motion.h3>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, staggerChildren: 0.1 }}
            >
              {/* Address */}
              <motion.div
                className="card p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01 }}
              >
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <MapPin size={24} className="text-primary-500" />
                  </motion.div>
                  <div>
                    <motion.h4
                      className="text-lg font-bold text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      Adresse
                    </motion.h4>
                    <motion.p
                      className="text-dark-400 mt-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      {restaurantConfig.address}
                    </motion.p>
                    <motion.a
                      href={restaurantConfig.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 text-sm font-semibold hover:text-primary-400 transition-colors mt-2 inline-block"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      Voir sur Google Maps
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="card p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Phone size={24} className="text-green-500" />
                  </motion.div>
                  <div>
                    <motion.h4
                      className="text-lg font-bold text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      Téléphone
                    </motion.h4>
                    <motion.a
                      href={`tel:${restaurantConfig.phone.replace(/\s/g, '')}`}
                      className="text-primary-500 text-lg font-semibold hover:text-primary-400 transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      {restaurantConfig.phone}
                    </motion.a>
                    <motion.p
                      className="text-dark-500 text-sm mt-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      Appel gratuit
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Email */}
              {restaurantConfig.email && (
                <motion.div
                  className="card p-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <motion.div
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Mail size={24} className="text-blue-500" />
                    </motion.div>
                    <div>
                      <motion.h4
                        className="text-lg font-bold text-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                      >
                        Email
                      </motion.h4>
                      <motion.a
                        href={`mailto:${restaurantConfig.email}`}
                        className="text-primary-500 font-semibold hover:text-primary-400 transition-colors"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                      >
                        {restaurantConfig.email}
                      </motion.a>
                      <motion.p
                        className="text-dark-500 text-sm mt-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                      >
                        Réponse rapide
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Hours */}
              <motion.div
                className="card p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.01 }}
              >
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Clock size={24} className="text-yellow-500" />
                  </motion.div>
                  <div>
                    <motion.h4
                      className="text-lg font-bold text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      Horaires d'ouverture
                    </motion.h4>
                    <motion.div
                      className="text-dark-400 mt-1 space-y-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      <p>Lundi au Samedi: 11h30 - 14h00</p>
                      <p>Lundi au Samedi: 18h00 - 21h30/22h00</p>
                      <p className="text-dark-500">Dimanche: Fermé</p>
                    </motion.div>
                    <motion.p
                      className="text-xs text-dark-500 mt-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      *Horaires à confirmer
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="relative rounded-2xl overflow-hidden h-80 lg:h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=44.8814,-0.6845&zoom=15&size=800x600&maptype=roadmap&markers=color:red%7C44.8814,-0.6845`}
              alt="Carte Google Maps - Costa Kebab"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/map-placeholder.jpg';
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-dark-1000/60 to-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.section
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="card p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-3xl font-display font-bold text-white text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              NOUS ÉCRIRE
            </motion.h3>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, staggerChildren: 0.1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <motion.label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark-300 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  Nom et Prénom *
                </motion.label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-dark-800 border border-dark-700 rounded-lg py-3 px-4 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-all duration-300"
                  required
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                />
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <motion.label
                    htmlFor="email"
                    className="block text-sm font-medium text-dark-300 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Email
                  </motion.label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-dark-800 border border-dark-700 rounded-lg py-3 px-4 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <motion.label
                    htmlFor="phone"
                    className="block text-sm font-medium text-dark-300 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Téléphone
                  </motion.label>
                  <motion.input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-dark-800 border border-dark-700 rounded-lg py-3 px-4 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark-300 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  Message *
                </motion.label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-dark-800 border border-dark-700 rounded-lg py-3 px-4 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-all duration-300 resize-none"
                  required
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {submitStatus === 'success' ? (
                  <motion.div
                    className="bg-green-500/10 border border-green-500 rounded-lg p-4 flex items-center justify-center space-x-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <Check size={24} className="text-green-500" />
                    <span className="text-green-500 font-semibold">
                      Message envoyé avec succès !
                    </span>
                  </motion.div>
                ) : submitStatus === 'error' ? (
                  <motion.div
                    className="bg-red-500/10 border border-red-500 rounded-lg p-4 flex items-center justify-center space-x-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <X size={24} className="text-red-500" />
                    <span className="text-red-500 font-semibold">
                      Veuillez remplir tous les champs obligatoires
                    </span>
                  </motion.div>
                ) : (
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary inline-flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </motion.button>
                )}
              </motion.div>
            </motion.form>

            <motion.p
              className="text-xs text-dark-500 text-center mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              * Les champs marqués d'un astérisque sont obligatoires
            </motion.p>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default ContactPage;
