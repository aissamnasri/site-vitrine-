import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { MenuPage } from './pages/Menu/MenuPage';
import { SpecialtiesPage } from './pages/Specialties/SpecialtiesPage';
import { RestaurantPage } from './pages/Restaurant/RestaurantPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { ReviewsPage } from './pages/Reviews/ReviewsPage';
import { NotFound } from './pages/NotFound/NotFound';
import { MentionsLegales } from './pages/legal/MentionsLegales';
import { PolitiqueConfidentialite } from './pages/legal/PolitiqueConfidentialite';

// SEO Metadata Component
import { Helmet } from 'react-helmet-async';
import siteContent from './data/site-content';
import restaurantConfig from './data/restaurant.config';

const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <title>{siteContent.seo.title}</title>
        <meta name="description" content={siteContent.seo.description} />
        <meta name="keywords" content={siteContent.seo.keywords.join(', ')} />
        <meta name="author" content={restaurantConfig.name} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={siteContent.seo.title} />
        <meta property="og:description" content={siteContent.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={restaurantConfig.name} />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteContent.seo.title} />
        <meta name="twitter:description" content={siteContent.seo.description} />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://costakebab.fr" />
        
        {/* Schema.org JSON-LD for Restaurant */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "${restaurantConfig.name}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "54 Avenue Montesquieu",
              "addressLocality": "Saint-Médard-en-Jalles",
              "addressRegion": "Nouvelle-Aquitaine",
              "postalCode": "33160",
              "addressCountry": "France"
            },
            "telephone": "${restaurantConfig.phone.replace(/\s/g, '')}",
            "url": "https://costakebab.fr",
            "description": "${siteContent.seo.description}",
            "openingHours": [
              "Mo-Sa 11:30-14:00",
              "Mo-Sa 18:00-21:30"
            ],
            "servesCuisine": ["Kebab", "Tacos", "Burgers", "Sandwichs", "Fast Food"],
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.75",
              "reviewCount": "3000"
            }
          }`}
        </script>
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="carte" element={<MenuPage />} />
            <Route path="specialites" element={<SpecialtiesPage />} />
            <Route path="restaurant" element={<RestaurantPage />} />
            <Route path="avis" element={<ReviewsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="mentions-legales" element={<MentionsLegales />} />
            <Route path="politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </motion.div>
    </BrowserRouter>
  );
};

export default App;
