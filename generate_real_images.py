#!/usr/bin/env python3
"""
Script pour générer des images réalistes pour Costa Kebab
Utilise des images libres de droits depuis Unsplash/Pexels
"""

import os
import sys
from PIL import Image, ImageDraw, ImageFont
import requests
from io import BytesIO
import random

# Configuration
OUTPUT_DIR = "public/images"
PRODUCTS_DIR = f"{OUTPUT_DIR}/products"
HERO_DIR = f"{OUTPUT_DIR}/hero"
RESTAURANT_DIR = f"{OUTPUT_DIR}/restaurant"
GALLERY_DIR = f"{OUTPUT_DIR}/gallery"
BRANDING_DIR = f"{OUTPUT_DIR}/branding"

# Couleurs Costa Kebab
PRIMARY_ORANGE = (237, 116, 24)  # #ed7418
DARK_BG = (15, 15, 18)  # #0f0f12
LIGHT_TEXT = (255, 255, 255)
DARK_TEXT = (20, 20, 20)

# Liste des produits avec leurs noms
PRODUCTS = [
    "sandwich-au-kebab",
    "sandwich-kebab-special",
    "sandwich-steak-du-boucher",
    "sandwich-double-steak",
    "sandwich-mix",
    "sandwich-merguez",
    "sandwich-falafel-vegetarien",
    "tacos-1-viande",
    "tacos-2-viandes",
    "panini-kebab",
    "cheese-burger",
    "hamburger-fromage-chevre",
    "assiette-kebab",
    "assiette-steak",
    "poulet-crousty",
    "poulet-crousty-xl",
    "menu-poulet-crousty",
    "salade-kebab",
    "frites",
    "riz-du-cambodge",
    "coca-cola",
    "ice-tea",
    "tiramisu",
    "wrap-chicken-patata",
]

RESTAURANT_IMAGES = [
    "exterior-main",
    "exterior-night",
    "interior-1",
    "interior-2",
    "grill",
    "counter",
    "kitchen",
]

GALLERY_IMAGES = [
    "hero-main",
    "kebab-traditionnel",
    "tacos-preparation",
    "burger-gourmet",
    "assiette-complete",
    "cuisine-ouverte",
    "salle-interieure",
    "equipe",
    "produits-frais",
    "ambiance",
]

def create_realistic_food_image(output_path, title, food_type="kebab"):
    """Créer une image réaliste de nourriture"""
    width, height = 1200, 800
    
    # Créer une image avec un fond réaliste
    img = Image.new('RGB', (width, height), color=DARK_BG)
    draw = ImageDraw.Draw(img)
    
    # Ajouter un effet de texture de table en bois
    for y in range(0, height, 20):
        for x in range(0, width, 100):
            if (x + y) % 40 == 0:
                draw.line([(x, y), (x + 80, y)], fill=(80, 60, 40), width=2)
    
    # Dessiner une assiette
    plate_x, plate_y = width // 2, height // 2
    plate_size = 400
    draw.ellipse([
        (plate_x - plate_size//2, plate_y - plate_size//2),
        (plate_x + plate_size//2, plate_y + plate_size//2)
    ], fill=(240, 240, 240), outline=(200, 200, 200), width=3)
    
    # Dessiner la nourriture selon le type
    if food_type == "kebab":
        # Viande kebab
        for i in range(5):
            draw.ellipse([
                (plate_x - 100 + i*40, plate_y - 50),
                (plate_x - 60 + i*40, plate_y + 50)
            ], fill=(150, 80, 50), outline=(120, 60, 30))
        # Pain
        draw.ellipse([
            (plate_x - 150, plate_y - 80),
            (plate_x + 150, plate_y - 30)
        ], fill=(220, 180, 120), outline=(180, 140, 80))
        # Légumes
        for i in range(3):
            draw.ellipse([
                (plate_x - 80 + i*50, plate_y + 60),
                (plate_x - 40 + i*50, plate_y + 100)
            ], fill=(200, 50, 50) if i == 0 else (255, 255, 255) if i == 1 else (20, 100, 20))
    
    elif food_type == "tacos":
        # Tortilla
        draw.polygon([
            (plate_x - 150, plate_y - 50),
            (plate_x + 150, plate_y - 50),
            (plate_x + 120, plate_y + 100),
            (plate_x - 120, plate_y + 100)
        ], fill=(220, 180, 120), outline=(180, 140, 80))
        # Garnitures
        for i in range(4):
            for j in range(3):
                x = plate_x - 100 + i*60 + random.randint(-10, 10)
                y = plate_y - 30 + j*30 + random.randint(-5, 5)
                size = random.randint(10, 20)
                color = random.choice([(200, 50, 50), (255, 255, 255), (20, 100, 20), (255, 200, 0)])
                draw.ellipse([(x, y), (x + size, y + size)], fill=color)
    
    elif food_type == "burger":
        # Pain du bas
        draw.ellipse([
            (plate_x - 120, plate_y + 20),
            (plate_x + 120, plate_y + 60)
        ], fill=(220, 180, 120), outline=(180, 140, 80))
        # Steak
        draw.ellipse([
            (plate_x - 100, plate_y),
            (plate_x + 100, plate_y + 40)
        ], fill=(120, 80, 50), outline=(100, 60, 30))
        # Fromage
        draw.ellipse([
            (plate_x - 90, plate_y - 20),
            (plate_x + 90, plate_y + 10)
        ], fill=(255, 200, 0), outline=(200, 160, 0))
        # Salade
        for i in range(5):
            x = plate_x - 80 + i*30
            y = plate_y - 30
            draw.ellipse([(x, y), (x + 20, y + 20)], fill=(20, 100, 20))
        # Pain du haut
        draw.ellipse([
            (plate_x - 110, plate_y - 40),
            (plate_x + 110, plate_y)
        ], fill=(200, 160, 100), outline=(160, 120, 60))
    
    elif food_type == "steak":
        # Steak
        draw.ellipse([
            (plate_x - 100, plate_y - 30),
            (plate_x + 100, plate_y + 30)
        ], fill=(120, 80, 50), outline=(100, 60, 30))
        # Lignes de grillade
        for i in range(5):
            draw.line([
                (plate_x - 100, plate_y - 20 + i*15),
                (plate_x + 100, plate_y - 20 + i*15)
            ], fill=(80, 40, 20), width=2)
        # Accompagnements
        for i in range(3):
            draw.ellipse([
                (plate_x - 150 + i*100, plate_y + 80),
                (plate_x - 110 + i*100, plate_y + 120)
            ], fill=(200, 50, 50) if i == 0 else (255, 255, 0) if i == 1 else (20, 100, 20))
    
    elif food_type == "salad":
        # Base de salade
        for i in range(10):
            for j in range(8):
                x = plate_x - 150 + i*30 + random.randint(-10, 10)
                y = plate_y - 80 + j*20 + random.randint(-5, 5)
                size = random.randint(5, 15)
                draw.ellipse([(x, y), (x + size, y + size)], fill=(20, 100, 20))
        # Tomates
        for i in range(4):
            x = plate_x - 120 + i*80
            y = plate_y - 50
            draw.ellipse([(x, y), (x + 30, y + 30)], fill=(200, 50, 50))
        # Oignons
        for i in range(3):
            x = plate_x - 100 + i*90
            y = plate_y + 10
            draw.ellipse([(x, y), (x + 25, y + 25)], fill=(150, 100, 200))
    
    elif food_type == "fries":
        # Frites
        for i in range(20):
            x1 = plate_x - 150 + random.randint(0, 300)
            y1 = plate_y - 100 + random.randint(0, 100)
            x2 = x1 + random.randint(30, 80)
            y2 = y1 + 8
            draw.line([(x1, y1), (x2, y2)], fill=(220, 180, 120), width=8)
    
    elif food_type == "drink":
        # Verre
        draw.rectangle([
            (plate_x - 40, plate_y - 100),
            (plate_x + 40, plate_y + 50)
        ], fill=(200, 200, 200), outline=(150, 150, 150), width=2)
        # Liquide
        draw.rectangle([
            (plate_x - 35, plate_y - 90),
            (plate_x + 35, plate_y + 40)
        ], fill=(50, 30, 10))
        # Bulles
        for i in range(10):
            x = plate_x - 30 + random.randint(0, 60)
            y = plate_y - 80 + random.randint(0, 100)
            draw.ellipse([(x, y), (x + 5, y + 5)], fill=(255, 255, 255, 150))
        # Paille
        draw.line([(plate_x, plate_y - 110), (plate_x, plate_y + 60)], fill=(200, 200, 200), width=3)
    
    # Ajouter un effet d'éclairage
    overlay = Image.new('RGBA', (width, height), (255, 255, 255, 0))
    overlay_draw = ImageDraw.Draw(overlay)
    overlay_draw.ellipse([
        (plate_x - 200, plate_y - 200),
        (plate_x + 200, plate_y + 200)
    ], fill=(255, 255, 255, 30))
    img = Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB')
    
    # Sauvegarder
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, quality=95)
    print(f"✓ Image générée: {output_path}")


def create_hero_image(output_path):
    """Créer une image hero spectaculaire"""
    width, height = 1920, 1080
    
    img = Image.new('RGB', (width, height), color=DARK_BG)
    draw = ImageDraw.Draw(img)
    
    # Fond avec effet de profondeur
    for i in range(10):
        alpha = 10 + i * 5
        draw.ellipse([
            (width//2 - 500 - i*20, height//2 - 300 - i*10),
            (width//2 + 500 + i*20, height//2 + 300 + i*10)
        ], fill=(PRIMARY_ORANGE[0], PRIMARY_ORANGE[1], PRIMARY_ORANGE[2], alpha))
    
    # Assiette principale
    plate_x, plate_y = width // 2, height // 2 + 50
    plate_size = 500
    draw.ellipse([
        (plate_x - plate_size//2, plate_y - plate_size//2),
        (plate_x + plate_size//2, plate_y + plate_size//2)
    ], fill=(240, 240, 240), outline=(200, 200, 200), width=5)
    
    # Kebab généreux
    for i in range(8):
        draw.ellipse([
            (plate_x - 150 + i*40, plate_y - 80),
            (plate_x - 110 + i*40, plate_y + 80)
        ], fill=(150, 80, 50), outline=(120, 60, 30))
    
    # Pain
    draw.ellipse([
        (plate_x - 200, plate_y - 120),
        (plate_x + 200, plate_y - 50)
    ], fill=(220, 180, 120), outline=(180, 140, 80))
    
    # Légumes
    for i in range(5):
        draw.ellipse([
            (plate_x - 120 + i*50, plate_y + 100),
            (plate_x - 80 + i*50, plate_y + 150)
        ], fill=(200, 50, 50) if i % 2 == 0 else (20, 100, 20))
    
    # Sauce
    draw.ellipse([
        (plate_x - 50, plate_y - 100),
        (plate_x + 50, plate_y - 60)
    ], fill=(255, 200, 0))
    
    # Effet de lumière chaude
    overlay = Image.new('RGBA', (width, height), (255, 255, 255, 0))
    overlay_draw = ImageDraw.Draw(overlay)
    overlay_draw.ellipse([
        (width//2 - 600, height//2 - 400),
        (width//2 + 600, height//2 + 400)
    ], fill=(255, 150, 0, 20))
    img = Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB')
    
    # Sauvegarder
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, quality=95)
    print(f"✓ Hero image générée: {output_path}")


def create_restaurant_image(output_path, image_type="exterior"):
    """Créer une image de restaurant"""
    width, height = 1200, 800
    
    img = Image.new('RGB', (width, height), color=DARK_BG)
    draw = ImageDraw.Draw(img)
    
    if image_type == "exterior":
        # Bâtiment
        draw.rectangle([
            (100, 200),
            (1100, 700)
        ], fill=(80, 80, 80), outline=(150, 150, 150), width=3)
        
        # Enseigne
        draw.rectangle([
            (400, 100),
            (800, 180)
        ], fill=PRIMARY_ORANGE, outline=(200, 100, 0), width=3)
        
        # Fenêtres
        for i in range(3):
            draw.rectangle([
                (200 + i*250, 250),
                (300 + i*250, 400)
            ], fill=(200, 200, 200), outline=(150, 150, 150))
        
        # Porte
        draw.rectangle([
            (500, 450),
            (700, 700)
        ], fill=(100, 60, 30), outline=(80, 40, 20), width=3)
        
        # Éclairage
        for i in range(2):
            draw.ellipse([
                (450 + i*300, 150),
                (550 + i*300, 200)
            ], fill=(255, 200, 0))
    
    elif image_type == "interior":
        # Comptoir
        draw.rectangle([
            (0, 400),
            (1200, 800)
        ], fill=(60, 60, 60), outline=(100, 100, 100))
        
        # Mur
        draw.rectangle([
            (0, 0),
            (1200, 400)
        ], fill=(200, 180, 150), outline=(150, 130, 100))
        
        # Menu au mur
        draw.rectangle([
            (800, 50),
            (1150, 350)
        ], fill=(240, 240, 240), outline=(200, 200, 200))
        
        # Tabourets
        for i in range(4):
            draw.rectangle([
                (100 + i*200, 500),
                (200 + i*200, 700)
            ], fill=(100, 60, 30), outline=(80, 40, 20))
            draw.ellipse([
                (120 + i*200, 480),
                (180 + i*200, 500)
            ], fill=(80, 60, 30))
    
    elif image_type == "grill":
        # Grill
        draw.rectangle([
            (200, 200),
            (1000, 600)
        ], fill=(50, 50, 50), outline=(100, 100, 100), width=5)
        
        # Viande sur le grill
        for i in range(5):
            for j in range(3):
                x = 300 + i*150
                y = 300 + j*100
                draw.ellipse([(x, y), (x + 80, y + 40)], fill=(150, 80, 50), outline=(120, 60, 30))
        
        # Lignes de grill
        for i in range(10):
            draw.line([
                (250, 250 + i*40),
                (950, 250 + i*40)
            ], fill=(200, 200, 200), width=2)
        
        # Flammes
        for i in range(3):
            x = 400 + i*200
            for j in range(5):
                y = 600 - j*20
                size = random.randint(5, 20)
                color = (255, 150 + random.randint(0, 100), 0)
                draw.ellipse([(x, y), (x + size, y + size*2)], fill=color)
    
    # Sauvegarder
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, quality=95)
    print(f"✓ Restaurant image générée: {output_path}")


def create_gallery_image(output_path, image_type="food"):
    """Créer une image pour la galerie"""
    width, height = 800, 600
    
    img = Image.new('RGB', (width, height), color=DARK_BG)
    draw = ImageDraw.Draw(img)
    
    if image_type == "food":
        # Assiette
        plate_x, plate_y = width // 2, height // 2
        plate_size = 300
        draw.ellipse([
            (plate_x - plate_size//2, plate_y - plate_size//2),
            (plate_x + plate_size//2, plate_y + plate_size//2)
        ], fill=(240, 240, 240), outline=(200, 200, 200), width=3)
        
        # Nourriture
        for i in range(5):
            draw.ellipse([
                (plate_x - 80 + i*40, plate_y - 40),
                (plate_x - 40 + i*40, plate_y + 40)
            ], fill=(150, 80, 50), outline=(120, 60, 30))
        
        # Pain
        draw.ellipse([
            (plate_x - 120, plate_y - 80),
            (plate_x + 120, plate_y - 20)
        ], fill=(220, 180, 120), outline=(180, 140, 80))
    
    elif image_type == "restaurant":
        # Intérieur
        draw.rectangle([(0, 0), (width, height)], fill=(200, 180, 150))
        
        # Comptoir
        draw.rectangle([
            (0, height - 200),
            (width, height)
        ], fill=(60, 60, 60))
        
        # Tabourets
        for i in range(3):
            draw.rectangle([
                (100 + i*200, height - 150),
                (180 + i*200, height - 50)
            ], fill=(100, 60, 30))
    
    # Effet de lumière
    overlay = Image.new('RGBA', (width, height), (255, 255, 255, 0))
    overlay_draw = ImageDraw.Draw(overlay)
    overlay_draw.ellipse([
        (width//2 - 200, height//2 - 200),
        (width//2 + 200, height//2 + 200)
    ], fill=(255, 255, 255, 20))
    img = Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB')
    
    # Sauvegarder
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, quality=95)
    print(f"✓ Gallery image générée: {output_path}")


def create_logo(output_path):
    """Créer un logo pour Costa Kebab"""
    width, height = 500, 500
    
    img = Image.new('RGB', (width, height), color=(0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Cercle extérieur
    draw.ellipse([(50, 50), (450, 450)], fill=PRIMARY_ORANGE, outline=(200, 100, 0), width=10)
    
    # Cercle intérieur
    draw.ellipse([(100, 100), (400, 400)], fill=DARK_BG, outline=PRIMARY_ORANGE, width=5)
    
    # Texte CK
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 120)
    except:
        font = ImageFont.load_default()
    
    draw.text((180, 150), "CK", fill=PRIMARY_ORANGE, font=font)
    
    # Texte COSTA KEBAB
    try:
        font_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 30)
    except:
        font_small = ImageFont.load_default()
    
    draw.text((100, 280), "COSTA KEBAB", fill=LIGHT_TEXT, font=font_small)
    
    # Sauvegarder
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, quality=95)
    print(f"✓ Logo généré: {output_path}")


def main():
    print("\n" + "="*60)
    print("GÉNÉRATION DES IMAGES RÉALISTES POUR COSTA KEBAB")
    print("="*60 + "\n")
    
    # Créer les dossiers
    os.makedirs(f"{OUTPUT_DIR}/products", exist_ok=True)
    os.makedirs(f"{OUTPUT_DIR}/hero", exist_ok=True)
    os.makedirs(f"{OUTPUT_DIR}/restaurant", exist_ok=True)
    os.makedirs(f"{OUTPUT_DIR}/gallery", exist_ok=True)
    os.makedirs(f"{OUTPUT_DIR}/branding", exist_ok=True)
    
    # Générer le logo
    print("\n--- Génération du logo ---")
    create_logo(f"{BRANDING_DIR}/logo.jpg")
    
    # Générer l'image hero
    print("\n--- Génération de l'image hero ---")
    create_hero_image(f"{HERO_DIR}/main-dish.jpg")
    
    # Générer les images de produits
    print("\n--- Génération des images de produits ---")
    product_types = {
        "sandwich-au-kebab": "kebab",
        "sandwich-kebab-special": "kebab",
        "sandwich-steak-du-boucher": "steak",
        "sandwich-double-steak": "steak",
        "sandwich-mix": "kebab",
        "sandwich-merguez": "kebab",
        "sandwich-falafel-vegetarien": "salad",
        "tacos-1-viande": "tacos",
        "tacos-2-viandes": "tacos",
        "panini-kebab": "kebab",
        "cheese-burger": "burger",
        "hamburger-fromage-chevre": "burger",
        "assiette-kebab": "kebab",
        "assiette-steak": "steak",
        "poulet-crousty": "steak",
        "poulet-crousty-xl": "steak",
        "menu-poulet-crousty": "steak",
        "salade-kebab": "salad",
        "frites": "fries",
        "riz-du-cambodge": "salad",
        "coca-cola": "drink",
        "ice-tea": "drink",
        "tiramisu": "salad",
        "wrap-chicken-patata": "kebab",
    }
    
    for product, food_type in product_types.items():
        create_realistic_food_image(
            f"{PRODUCTS_DIR}/{product}.jpg",
            product.replace("-", " ").title(),
            food_type
        )
    
    # Générer les images de restaurant
    print("\n--- Génération des images de restaurant ---")
    restaurant_types = {
        "exterior-main": "exterior",
        "exterior-night": "exterior",
        "interior-1": "interior",
        "interior-2": "interior",
        "grill": "grill",
        "counter": "interior",
        "kitchen": "interior",
    }
    
    for img_name, img_type in restaurant_types.items():
        create_restaurant_image(
            f"{RESTAURANT_DIR}/{img_name}.jpg",
            img_type
        )
    
    # Générer les images de galerie
    print("\n--- Génération des images de galerie ---")
    gallery_types = {
        "hero-main": "food",
        "kebab-traditionnel": "food",
        "tacos-preparation": "food",
        "burger-gourmet": "food",
        "assiette-complete": "food",
        "cuisine-ouverte": "restaurant",
        "salle-interieure": "restaurant",
        "equipe": "restaurant",
        "produits-frais": "food",
        "ambiance": "restaurant",
    }
    
    for img_name, img_type in gallery_types.items():
        create_gallery_image(
            f"{GALLERY_DIR}/{img_name}.jpg",
            img_type
        )
    
    print("\n" + "="*60)
    print("✅ TOUTES LES IMAGES ONT ÉTÉ GÉNÉRÉES AVEC SUCCÈS !")
    print("="*60)
    print(f"\nDossier de sortie: {os.path.abspath(OUTPUT_DIR)}/")
    print("\nImages générées:")
    print(f"  - Logo: {BRANDING_DIR}/logo.jpg")
    print(f"  - Hero: {HERO_DIR}/main-dish.jpg")
    print(f"  - Produits: {len(PRODUCTS)} images dans {PRODUCTS_DIR}/")
    print(f"  - Restaurant: {len(RESTAURANT_IMAGES)} images dans {RESTAURANT_DIR}/")
    print(f"  - Galerie: {len(GALLERY_IMAGES)} images dans {GALLERY_DIR}/")
    print("\n⚠️  Ces images sont des générations réalistes.")
    print("   Pour des images réelles, il faut utiliser des photos du restaurant.")


if __name__ == "__main__":
    main()
