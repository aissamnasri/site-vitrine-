import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../../components/UI/SectionTitle';
import restaurantConfig from '../../data/restaurant.config';

export const MentionsLegales = () => {
  return (
    <motion.div
      className="min-h-screen py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="MENTIONS LÉGALES"
            subtitle="Informations légales du site Costa Kebab"
          />
        </motion.div>

        <motion.div
          className="space-y-8 text-dark-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, staggerChildren: 0.1 }}
        >
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              1. Présentation du site
            </motion.h2>
            <motion.p
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Le site internet <span className="text-primary-500">www.costa-kebab-site.fr</span> (ci-après le « Site »)
              est édité par :
            </motion.p>
            <motion.div
              className="bg-dark-900 p-6 rounded-lg space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p><strong className="text-white">Nom :</strong> {restaurantConfig.name}</p>
              <p><strong className="text-white">SIRET :</strong> {restaurantConfig.siret || 'En cours de mise à jour'}</p>
              <p><strong className="text-white">Adresse :</strong> {restaurantConfig.address}</p>
              <p><strong className="text-white">Téléphone :</strong> {restaurantConfig.phone}</p>
              <p><strong className="text-white">Email :</strong> {restaurantConfig.email || 'En cours de mise à jour'}</p>
            </motion.div>
          </motion.section>

          {/* Editor */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              2. Éditeur du site
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Le Site est édité par {restaurantConfig.name}, ci-dessus désigné.
            </motion.p>
          </motion.section>

          {/* Hosting */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              3. Hébergement
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Le Site est hébergé par :
            </motion.p>
            <motion.div
              className="bg-dark-900 p-6 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p><strong className="text-white">Hébergeur :</strong> À définir (ex: OVH, GitHub Pages, Netlify, Vercel)</p>
              <p><strong className="text-white">Adresse :</strong> À compléter</p>
            </motion.div>
            <motion.p
              className="mt-4 text-yellow-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ⚠️ Ces informations doivent être complétées avec les détails réels de l'hébergement.
            </motion.p>
          </motion.section>

          {/* Purpose */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              4. Objet du site
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Le Site a pour objet de présenter les activités de {restaurantConfig.name}, restaurant
              de restauration rapide situé à Saint-Médard-en-Jalles, et de permettre aux
              clients de découvrir le menu, les spécialités et les informations pratiques.
            </motion.p>
          </motion.section>

          {/* Intellectual Property */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              5. Propriété intellectuelle
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Tous les éléments du Site (textes, images, logos, graphismes, etc.) sont protégés
              par le droit d'auteur et appartiennent à {restaurantConfig.name}, sauf mention contraire.
            </motion.p>
            <motion.p
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Toute reproduction, représentation, modification, publication, adaptation de tout
              ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est
              interdite, sauf autorisation écrite préalable de l'éditeur.
            </motion.p>
          </motion.section>

          {/* Liability */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              6. Responsabilité
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Les informations contenues sur le Site sont fournies à titre informatif et ne
              sauraient engager la responsabilité de {restaurantConfig.name}.
            </motion.p>
            <motion.p
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {restaurantConfig.name} ne saurait être tenu responsable des dommages directs ou indirects
              consécutifs à l'accès au Site ou à l'utilisation du Site.
            </motion.p>
          </motion.section>

          {/* Personal Data */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              7. Données personnelles
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Pour en savoir plus sur la gestion de vos données personnelles et l'utilisation des
              cookies, veuillez consulter notre <Link to="/politique-de-confidentialite" className="text-primary-500 hover:text-primary-400">
                Politique de confidentialité
              </Link>.
            </motion.p>
          </motion.section>

          {/* Applicable Law */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              8. Droit applicable
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Les présentes mentions légales sont régies par le droit français.
            </motion.p>
          </motion.section>

          {/* Disclaimer */}
          <motion.div
            className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.p
              className="text-yellow-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ⚠️ <strong>Important :</strong> Ce document doit être revu et complété par un professionnel
              du droit (avocat ou juriste) avant publication. Les informations ci-dessus sont
              fournies à titre indicatif et ne constituent pas un avis juridique.
            </motion.p>
          </motion.div>

          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.p
              className="text-dark-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Dernière mise à jour : <span className="text-primary-500">Octobre 2024</span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MentionsLegales;
