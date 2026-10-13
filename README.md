# Costa Kebab - Site Vitrine

Site vitrine premium pour le restaurant Costa Kebab à Saint-Médard-en-Jalles.

## 📋 À propos du projet

Ce site a été développé pour moderniser la présence en ligne de Costa Kebab, un restaurant de restauration rapide spécialisé dans les kebabs, tacos, burgers et sandwichs.

### Fonctionnalités principales

- ✅ Design moderne et premium avec identité visuelle forte
- ✅ Entièrement responsive (mobile-first)
- ✅ Menu interactif avec filtres et recherche
- ✅ Galerie photo élégante
- ✅ Section avis clients avec notes Uber Eats
- ✅ Informations pratiques (horaires, adresse, contact)
- ✅ Intégration Uber Eats pour la commande en ligne
- ✅ Optimisation SEO complète
- ✅ Animations fluides avec Framer Motion
- ✅ Accessibilité conforme WCAG

## 🚀 Installation

### Prérequis

- Node.js 18+ (recommandé: 20+)
- npm 9+ ou yarn 1.22+
- Git

### Étapes d'installation

1. **Cloner le dépôt**
   ```bash
   git clone <url-du-depot>
   cd costa-kebab-site
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📦 Déploiement

### Build de production

```bash
npm run build
# ou
npm run build:preview
```

### Déploiement sur différents hébergeurs

#### Vercel (recommandé)

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel
```

#### Netlify

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Déployer
netlify deploy
```

#### GitHub Pages

1. Modifier `vite.config.ts` pour ajouter `base: '/costa-kebab-site/'`
2. Exécuter `npm run build`
3. Pousser le dossier `dist` vers la branche `gh-pages`

#### Serveur Apache/NGINX

1. Construire le projet: `npm run build`
2. Copier le contenu du dossier `dist` sur votre serveur
3. Configurer le serveur pour servir les fichiers statiques

## 📁 Structure du projet

```
costa-kebab-site/
├── public/                    # Fichiers statiques
│   ├── images/               # Images du site
│   │   ├── branding/         # Logo et branding
│   │   ├── hero/            # Images de la section Hero
│   │   ├── products/        # Photos des produits
│   │   ├── restaurant/      # Photos du restaurant
│   │   └── gallery/         # Galerie photo
│   ├── favicon.svg          # Favicon
│   ├── manifest.json        # Manifest PWA
│   ├── robots.txt           # Robots.txt
│   └── sitemap.xml          # Sitemap
├── src/
│   ├── assets/              # Assets compilés
│   ├── components/          # Composants React
│   │   ├── Layout/          # Header, Footer, Layout
│   │   ├── UI/              # Composants UI réutilisables
│   │   └── pages/           # Composants de pages
│   ├── data/                # Données du site
│   │   ├── menu.ts          # Menu du restaurant
│   │   ├── restaurant.config.ts # Configuration du restaurant
│   │   ├── site-content.ts # Contenu du site
│   │   ├── gallery.ts       # Galerie photo
│   │   └── reviews.ts       # Avis clients
│   ├── hooks/               # Hooks React
│   ├── pages/               # Pages du site
│   │   ├── Home/            # Page d'accueil
│   │   ├── Menu/            # Page de la carte
│   │   ├── Specialties/     # Page des spécialités
│   │   ├── Restaurant/      # Page du restaurant
│   │   ├── Contact/         # Page de contact
│   │   ├── Reviews/         # Page des avis
│   │   ├── legal/           # Pages légales
│   │   └── NotFound/        # Page 404
│   ├── types/               # Types TypeScript
│   ├── utils/               # Utilitaires
│   ├── App.tsx             # Application principale
│   ├── main.tsx            # Point d'entrée
│   └── index.css           # Styles globaux
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── README.md               # Ce fichier
├── ASSETS_A_COMPLETER.md   # Liste des assets manquants
└── INFORMATIONS_A_CONFIRMER.md # Informations à confirmer
```

## 🛠 Configuration

### Configuration du restaurant

Toutes les informations du restaurant sont centralisées dans `src/data/restaurant.config.ts`:

```typescript
{
  name: 'COSTA KEBAB',
  address: '54 Avenue Montesquieu, 33160 Saint-Médard-en-Jalles',
  phone: '05 56 05 92 38',
  email: 'vamvakasconstantinos@gmail.com',
  // ...
}
```

### Configuration du menu

Le menu est défini dans `src/data/menu.ts`. Chaque produit a la structure suivante:

```typescript
{
  id: 'sandwich-kebab',
  name: 'Sandwich au Kebab',
  category: 'sandwichs',
  description: 'Pain et crudités au choix, kebab, frites...',
  price: 12.00,
  image: '/images/products/sandwich-kebab.jpg',
  isFeatured: true,
  isPopular: true,
  // ...
}
```

### Contenu du site

Les textes principaux sont dans `src/data/site-content.ts`:

```typescript
{
  hero: {
    title: 'COSTA KEBAB',
    subtitle: 'LE GOÛT QUI FAIT LA DIFFÉRENCE',
    // ...
  },
  seo: {
    title: 'Costa Kebab - Restaurant & Livraison...',
    description: 'Découvrez Costa Kebab...',
    keywords: ['Costa Kebab', 'Kebab Saint-Médard-en-Jalles', ...]
  }
}
```

## 🎨 Personnalisation

### Modifier les couleurs

Les couleurs sont définies dans `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#ed7418',  // Orange principal
    // ...
  },
  dark: {
    1000: '#0f0f12', // Noir profond
    // ...
  }
}
```

### Modifier les polices

Les polices sont importées depuis Google Fonts dans `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Bebas+Neue&display=swap');
```

### Modifier les animations

Les animations sont définies avec Framer Motion. Exemple:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Contenu */}
</motion.div>
```

## 📱 Responsive Design

Le site est entièrement responsive avec les breakpoints suivants:

- **Mobile**: < 640px
- **Tablette**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

## ✨ Optimisations

### Performances

- Lazy loading des images
- Compression des assets
- Code splitting avec Vite
- Service Worker pour le caching (PWA)

### SEO

- Meta tags optimisés
- Sitemap XML
- Robots.txt
- Schema.org JSON-LD
- Open Graph tags
- Canonical URLs

### Accessibilité

- Contraste des couleurs conforme WCAG
- Navigation au clavier
- Balises ARIA
- Texte alternatif pour les images
- Respect de `prefers-reduced-motion`

## 🔧 Outils utilisés

- **Framework**: React 18 + TypeScript
- **Bundler**: Vite
- **CSS**: Tailwind CSS
- **Animations**: Framer Motion
- **Icônes**: Lucide React
- **Routing**: React Router DOM
- **SEO**: React Helmet Async
- **PWA**: Vite Plugin PWA

## 📝 Scripts disponibles

| Script | Description |
|--------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Construit le projet pour la production |
| `npm run build:preview` | Construit et prévisualise le build |
| `npm run lint` | Exécute ESLint |
| `npm run preview` | Prévisualise le build de production |

## 🤝 Contribution

1. Forker le dépôt
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalité`)
3. Commiter vos changements (`git commit -m 'Ajout de la nouvelle fonctionnalité'`)
4. Pousser vers la branche (`git push origin feature/nouvelle-fonctionnalité`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est propriétaire et réservé à l'usage exclusif de Costa Kebab.

## 📞 Support

Pour toute question ou problème, contactez:
- **Email**: vamvakasconstantinos@gmail.com
- **Téléphone**: 05 56 05 92 38

---

**Version**: 1.0.0  
**Dernière mise à jour**: Octobre 2024  
**Auteur**: Développeur web pour Costa Kebab
