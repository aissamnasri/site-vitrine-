# Assets à Compléter

Ce document liste tous les fichiers d'images et assets qui doivent être ajoutés au projet pour qu'il soit complet.

## Structure des dossiers

```
public/
├── images/
│   ├── branding/
│   │   ├── logo.svg (ou .png)
│   │   └── logo-white.svg (version blanche pour fond sombre)
│   ├── hero/
│   │   └── main-dish.jpg (Image principale pour la section Hero)
│   ├── products/
│   │   ├── sandwich-kebab.jpg
│   │   ├── sandwich-kebab-special.jpg
│   │   ├── sandwich-steak.jpg
│   │   ├── sandwich-merguez.jpg
│   │   ├── sandwich-falafel.jpg
│   │   ├── sandwich-double-steak.jpg
│   │   ├── sandwich-mix.jpg
│   │   ├── wrap-chicken-patata.jpg
│   │   ├── tacos-1-viande.jpg
│   │   ├── tacos-2-viandes.jpg
│   │   ├── cheese-burger.jpg
│   │   ├── burger-chevre.jpg
│   │   ├── hamburger-fromage-chevre.jpg
│   │   ├── assiette-kebab.jpg
│   │   ├── assiette-steak.jpg
│   │   ├── panini-kebab.jpg
│   │   ├── salade-kebab.jpg
│   │   ├── frites.jpg
│   │   ├── riz.jpg
│   │   ├── tiramisu.jpg
│   │   ├── coca.jpg
│   │   ├── ice-tea.jpg
│   │   ├── poulet-crousty.jpg
│   │   ├── poulet-crousty-xl.jpg
│   │   └── menu-poulet-crousty.jpg
│   ├── restaurant/
│   │   ├── exterior-main.jpg (Photo principale de la façade)
│   │   ├── exterior-1.jpg
│   │   ├── exterior-2.jpg
│   │   ├── interior-1.jpg
│   │   ├── interior-2.jpg
│   │   ├── interior-3.jpg
│   │   └── grill.jpg
│   ├── gallery/
│   │   ├── hero-main.jpg
│   │   ├── kebab-traditionnel.jpg
│   │   ├── tacos-francais.jpg
│   │   ├── burger-maison.jpg
│   │   ├── assiette-complete.jpg
│   │   ├── poulet-crousty.jpg
│   │   ├── restaurant-exterior-1.jpg
│   │   ├── restaurant-exterior-2.jpg
│   │   ├── restaurant-interior-1.jpg
│   │   ├── restaurant-interior-2.jpg
│   │   └── restaurant-interior-3.jpg
│   └── placeholder-product.jpg (Image de fallback pour les produits sans photo)
├── icons/
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   └── icon-512x512.png
├── screenshots/
│   ├── screenshot-1.png (Desktop - 1280x720)
│   └── screenshot-2.png (Mobile - 720x1280)
└── og-image.jpg (Image pour Open Graph - 1200x630)
```

## Sources recommandées

### Photos existantes
Les photos peuvent être récupérées depuis :
- Google Maps: https://maps.app.goo.gl/zedDZSEJpHex6FCGA
- Google Maps: https://maps.app.goo.gl/ig3DwmMvogVqxTMU7
- Google Maps: https://maps.app.goo.gl/6sjz6zARUwN62GWW7
- Google Maps: https://maps.app.goo.gl/YUNvyJ5nEEEDmeM5A
- Google Maps: https://maps.app.goo.gl/Nqr8wwpEuhQwPPVcA

### Uber Eats
- Page du restaurant: https://www.ubereats.com/fr/store/costa-kebab/_w7CCwSsQGCYLAe-h4bbWg?diningMode=DELIVERY

### Site existant
- Site actuel: https://costakebab.fr/
- Ancien site: https://costa-kebab.fr/costa-kebab/

## Formats recommandés

### Images
- **Format**: WebP (recommandé) ou JPEG
- **Résolution**: 
  - Hero: 1920x1080 minimum
  - Produits: 800x600 minimum
  - Restaurant: 1200x800 minimum
  - Galerie: 1200x800 minimum
- **Poids**: Moins de 200 Ko par image (optimisé pour le web)
- **Nom de fichier**: Utiliser des noms descriptifs en minuscules avec des tirets

### Icônes
- **Format**: PNG
- **Taille**: Comme indiqué dans le nom du fichier (72x72, 96x96, etc.)
- **Fond**: Transparent
- **Couleur**: Utiliser le orange (#ed7418) et le blanc

### Favicon
- Le favicon.svg est déjà créé avec le logo CK (Costa Kebab)
- Pour générer les icônes PNG, utiliser: https://realfavicongenerator.net/

## Outils pour optimiser les images

1. **Compression**: 
   - https://tinypng.com/ (PNG, JPEG)
   - https://imageoptim.com/ (Mac)
   - https://squoosh.app/ (WebP, AVIF)

2. **Redimensionnement**:
   - https://resizeimage.net/
   - Photoshop / GIMP

3. **Conversion WebP**:
   - https://squoosh.app/
   - https://cloudconvert.com/

## Images temporaires

Des images placeholder sont utilisées dans le code. Pour les remplacer:

1. Créez les fichiers dans les dossiers correspondants
2. Utilisez les mêmes noms de fichiers que ceux listés ci-dessus
3. Les images seront automatiquement chargées

## Droits d'auteur

⚠️ **IMPORTANT**: 
- Assurez-vous d'avoir les droits d'utilisation pour toutes les photos
- Évitez le hotlinking (liens directs vers des images sur d'autres sites)
- Utilisez uniquement des photos officielles du restaurant ou des banques d'images libres de droits

## Génération des icônes PWA

Pour générer toutes les icônes nécessaires:
1. Créez une image carrée (512x512) avec le logo
2. Utilisez https://realfavicongenerator.net/ ou https://www.favicon-generator.org/
3. Téléchargez le pack complet et placez les fichiers dans `/public/icons/`

## Génération de l'image Open Graph

Créez une image 1200x630 avec:
- Le logo du restaurant
- Le nom "Costa Kebab"
- Un fond attrayant (noir avec accents orange)
- Le slogan "Le goût qui fait la différence"

## Vérification

Après avoir ajouté les images:
1. Testez le site localement: `npm run dev`
2. Vérifiez que toutes les images s'affichent correctement
3. Vérifiez les performances avec Lighthouse (dans Chrome DevTools)
4. Assurez-vous que le poids total des images est raisonnable (< 5 Mo)
