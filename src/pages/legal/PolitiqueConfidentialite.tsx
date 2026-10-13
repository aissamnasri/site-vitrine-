import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Eye, EyeOff, Database, Mail } from 'lucide-react';
import { SectionTitle } from '../../components/UI/SectionTitle';
import restaurantConfig from '../../data/restaurant.config';

export const PolitiqueConfidentialite = () => {
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
            title="POLITIQUE DE CONFIDENTIALITÉ"
            subtitle="Comment nous protégeons vos données personnelles"
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
            <motion.p
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {restaurantConfig.name} (ci-après « nous », « notre » ou « Costa Kebab »)
              s'engage à protéger vos données personnelles conformément au Règlement
              Général sur la Protection des Données (RGPD) et aux lois françaises applicables.
            </motion.p>
            <motion.p
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              La présente Politique de confidentialité explique comment nous collectons,
              utilisons, partageons et protégeons vos informations personnelles lorsque
              vous utilisez notre site web.
            </motion.p>
          </motion.section>

          {/* Data Collected */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4 flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Database size={24} className="text-primary-500" />
              <span>1. Données que nous collectons</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Nous pouvons collecter les types de données personnelles suivants :
            </motion.p>
            <motion.div
              className="mt-4 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="bg-dark-900 p-4 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3 className="font-bold text-white mb-2">Données de contact</h3>
                <p>Nom, prénom, adresse email, numéro de téléphone (uniquement si vous nous contactez via le formulaire)</p>
              </motion.div>
              <motion.div
                className="bg-dark-900 p-4 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3 className="font-bold text-white mb-2">Données de navigation</h3>
                <p>Adresse IP, type de navigateur, pages consultées, durée de la visite, etc.</p>
              </motion.div>
              <motion.div
                className="bg-dark-900 p-4 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3 className="font-bold text-white mb-2">Cookies</h3>
                <p>Voir la section dédiée aux cookies ci-dessous.</p>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Data Use */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4 flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Mail size={24} className="text-primary-500" />
              <span>2. Utilisation de vos données</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Nous utilisons vos données personnelles uniquement dans les cas suivants :
            </motion.p>
            <motion.ul
              className="mt-4 space-y-2 list-disc list-inside"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Pour répondre à vos demandes de contact ou de réservation ;
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Pour améliorer notre site web et nos services ;
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Pour des statistiques anonymes de fréquentation ;
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Pour respecter nos obligations légales.
              </motion.li>
            </motion.ul>
          </motion.section>

          {/* Data Sharing */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4 flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Eye size={24} className="text-primary-500" />
              <span>3. Partage de vos données</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Nous ne partageons vos données personnelles qu'avec :
            </motion.p>
            <motion.ul
              className="mt-4 space-y-2 list-disc list-inside"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Les prestataires de services qui nous aident à gérer notre site web (hébergeur, etc.) ;
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Les autorités compétentes, si la loi l'exige.
              </motion.li>
            </motion.ul>
            <motion.p
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Nous ne vendons jamais vos données personnelles à des tiers.
            </motion.p>
          </motion.section>

          {/* Cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4 flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Shield size={24} className="text-primary-500" />
              <span>4. Cookies</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Notre site utilise des cookies. Certains sont essentiels au fonctionnement du
              site (cookies essentiels) et ne nécessitent pas votre consentement.
            </motion.p>
            <motion.p
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Actuellement, notre site <strong className="text-white">ne utilise pas de cookies non essentiels</strong> (marketing,
              publicité ciblée, etc.). Si cela devait changer, nous mettrions en place une
              bannière de consentement et une gestion des cookies.
            </motion.p>
          </motion.section>

          {/* Data Retention */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4 flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Database size={24} className="text-primary-500" />
              <span>5. Durée de conservation</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Nous conservons vos données personnelles pendant une durée nécessaire à la
              réalisation des finalités pour lesquelles elles ont été collectées, conformément
              aux exigences légales.
            </motion.p>
            <motion.p
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Pour les messages envoyés via le formulaire de contact, nous conservons vos
              données pendant 1 an à partir de la date de réception, sauf si vous nous
              demandez de les supprimer plus tôt.
            </motion.p>
          </motion.section>

          {/* Rights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4 flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Shield size={24} className="text-primary-500" />
              <span>6. Vos droits</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Conformément au RGPD, vous disposez des droits suivants :
            </motion.p>
            <motion.ul
              className="mt-4 space-y-2 list-disc list-inside"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <strong className="text-white">Droit d'accès</strong> : Vous pouvez demander à accéder à vos données personnelles ;
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <strong className="text-white">Droit de rectification</strong> : Vous pouvez demander la correction de vos données ;
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <strong className="text-white">Droit à l'effacement</strong> : Vous pouvez demander la suppression de vos données ;
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <strong className="text-white">Droit à la limitation</strong> : Vous pouvez demander la limitation du traitement ;
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <strong className="text-white">Droit à la portabilité</strong> : Vous pouvez demander à recevoir vos données dans un format structuré ;
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <strong className="text-white">Droit d'opposition</strong> : Vous pouvez vous opposer au traitement de vos données.
              </motion.li>
            </motion.ul>
            <motion.p
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Pour exercer vos droits, veuillez nous contacter à l'adresse email :
              <span className="text-primary-500 font-semibold ml-1">{restaurantConfig.email || 'vamvakasconstantinos@gmail.com'}</span>
            </motion.p>
          </motion.section>

          {/* Security */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4 flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Shield size={24} className="text-primary-500" />
              <span>7. Sécurité</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles
              appropriées pour protéger vos données personnelles contre la destruction
              accidentelle, la perte, l'altération, la divulgation ou l'accès non autorisé.
            </motion.p>
          </motion.section>

          {/* Links */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4 flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <EyeOff size={24} className="text-primary-500" />
              <span>8. Liens vers des sites tiers</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Notre site peut contenir des liens vers des sites web de tiers (comme Uber Eats,
              Google Maps, etc.). Nous ne sommes pas responsables des pratiques de protection
              des données de ces sites tiers. Nous vous invitons à consulter leurs politiques
              de confidentialité respectives.
            </motion.p>
          </motion.section>

          {/* Changes */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              9. Modifications de cette politique
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Nous nous réservons le droit de modifier cette Politique de confidentialité à tout
              moment. Les modifications seront publiées sur cette page et prendront effet
              immédiatement. Nous vous encourageons à consulter régulièrement cette page.
            </motion.p>
          </motion.section>

          {/* Contact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              10. Contact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Pour toute question concernant cette Politique de confidentialité ou la manière
              dont nous traitons vos données personnelles, veuillez nous contacter :
            </motion.p>
            <motion.div
              className="mt-4 bg-dark-900 p-6 rounded-lg space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p><strong className="text-white">Email :</strong> {restaurantConfig.email || 'vamvakasconstantinos@gmail.com'}</p>
              <p><strong className="text-white">Téléphone :</strong> {restaurantConfig.phone}</p>
              <p><strong className="text-white">Adresse :</strong> {restaurantConfig.address}</p>
            </motion.div>
          </motion.section>

          {/* Disclaimer */}
          <motion.div
            className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <motion.p
              className="text-yellow-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ⚠️ <strong>Important :</strong> Ce document doit être revu et validé par un professionnel
              du droit (avocat ou juriste spécialisé en protection des données) avant publication.
              Les informations ci-dessus sont fournies à titre indicatif et ne constituent pas
              un avis juridique.
            </motion.p>
          </motion.div>

          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.p
              className="text-dark-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Dernière mise à jour : <span className="text-primary-500">Octobre 2024</span>
            </motion.p>
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Link
                to="/mentions-legales"
                className="text-primary-500 hover:text-primary-400 transition-colors"
              >
                Consulter les Mentions Légales
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PolitiqueConfidentialite;
