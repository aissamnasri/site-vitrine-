#!/usr/bin/env python3
"""
Script pour optimiser les images pour le web
- Conversion en WebP
- Compression
- Redimensionnement si nécessaire
"""

import os
from PIL import Image
import glob

# Configuration
IMAGE_DIRS = [
    "public/images/products",
    "public/images/restaurant",
    "public/images/gallery",
    "public/images/hero",
    "public/images/branding",
]

# Tailles cibles
PRODUCT_SIZE = (800, 600)
HERO_SIZE = (1920, 1080)
GALLERY_SIZE = (1200, 800)
RESTAURANT_SIZE = (1200, 800)
LOGO_SIZE = (500, 500)

def optimize_image(input_path, output_path, target_size=None, quality=85):
    """Optimiser une image"""
    try:
        with Image.open(input_path) as img:
            # Convertir en RGB si nécessaire
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGB')
            
            # Redimensionner si nécessaire
            if target_size:
                img.thumbnail(target_size, Image.Resampling.LANCZOS)
            
            # Sauvegarder en WebP
            output_webp = output_path.replace('.jpg', '.webp')
            img.save(output_webp, format='WEBP', quality=quality)
            
            print(f"✓ {output_webp} ({os.path.getsize(output_webp) // 1024} Ko)")
            return output_webp
    except Exception as e:
        print(f"✗ {input_path}: {e}")
        return None


def main():
    print("\n" + "="*60)
    print("OPTIMISATION DES IMAGES POUR LE WEB")
    print("="*60 + "\n")
    
    total_original = 0
    total_optimized = 0
    files_count = 0
    
    for img_dir in IMAGE_DIRS:
        if not os.path.exists(img_dir):
            continue
            
        print(f"\n--- {img_dir} ---")
        
        # Déterminer la taille cible
        if "products" in img_dir:
            target_size = PRODUCT_SIZE
        elif "hero" in img_dir:
            target_size = HERO_SIZE
        elif "gallery" in img_dir:
            target_size = GALLERY_SIZE
        elif "restaurant" in img_dir:
            target_size = RESTAURANT_SIZE
        elif "branding" in img_dir:
            target_size = LOGO_SIZE
        else:
            target_size = None
        
        # Trouver toutes les images JPG
        jpg_files = glob.glob(os.path.join(img_dir, "*.jpg"))
        
        for jpg_file in jpg_files:
            # Taille originale
            original_size = os.path.getsize(jpg_file)
            total_original += original_size
            
            # Optimiser
            webp_file = jpg_file.replace('.jpg', '.webp')
            optimize_image(jpg_file, jpg_file, target_size=target_size, quality=85)
            
            if os.path.exists(webp_file):
                optimized_size = os.path.getsize(webp_file)
                total_optimized += optimized_size
                files_count += 1
                
                ratio = (optimized_size / original_size) * 100 if original_size > 0 else 0
                print(f"  {os.path.basename(jpg_file)}: {original_size//1024}Ko → {optimized_size//1024}Ko ({ratio:.1f}%)")
    
    print("\n" + "="*60)
    print("RÉSULTAT DE L'OPTIMISATION")
    print("="*60)
    print(f"Fichiers optimisés: {files_count}")
    print(f"Taille originale totale: {total_original // 1024} Ko ({total_original / (1024*1024):.2f} Mo)")
    print(f"Taille optimisée totale: {total_optimized // 1024} Ko ({total_optimized / (1024*1024):.2f} Mo)")
    
    if total_original > 0:
        ratio = (total_optimized / total_original) * 100
        print(f"Gain d'espace: {100 - ratio:.1f}%")
    
    print("\n✅ Optimisation terminée !")
    print("\nPour utiliser les images WebP, mettez à jour vos balises HTML:")
    print("  <img src='image.webp' alt='...'>")
    print("\nOu utilisez le format srcset pour la compatibilité:")
    print("  <img src='image.jpg' srcset='image.webp' alt='...'>")


if __name__ == "__main__":
    main()
