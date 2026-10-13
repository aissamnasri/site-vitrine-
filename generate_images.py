#!/usr/bin/env python3
"""
Script pour générer des images placeholder pour le site Costa Kebab.
Ces images sont temporaires et doivent être remplacées par des photos réelles.
"""

from PIL import Image, ImageDraw, ImageFont
import os
import textwrap

# Configuration
BASE_DIR = "/workspace/costa-kebab-site/public/images"
PRIMARY_COLOR = (237, 116, 24)  # #ed7418 - Orange Costa Kebab
DARK_COLOR = (15, 15, 18)       # #0f0f12 - Noir profond
LIGHT_COLOR = (255, 255, 255)   # Blanc
GRAY_COLOR = (100, 100, 100)     # Gris

# Créer les dossiers si ils n'existent pas
os.makedirs(f"{BASE_DIR}/branding", exist_ok=True)
os.makedirs(f"{BASE_DIR}/hero", exist_ok=True)
os.makedirs(f"{BASE_DIR}/products", exist_ok=True)
os.makedirs(f"{BASE_DIR}/restaurant", exist_ok=True)
os.makedirs(f"{BASE_DIR}/gallery", exist_ok=True)

try:
    # Charger une police (fallback si non disponible)
    try:
        font_large = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 60)
        font_medium = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
        font_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 24)
    except:
        font_large = ImageFont.load_default()
        font_medium = ImageFont.load_default()
        font_small = ImageFont.load_default()

except:
    font_large = ImageFont.load_default()
    font_medium = ImageFont.load_default()
    font_small = ImageFont.load_default()

def create_gradient(width, height, color1, color2):
    """Créer un dégradé entre deux couleurs"""
    base = Image.new('RGB', (width, height), color1)
    top = Image.new('RGB', (width, height), color2)
    mask = Image.new('L', (width, height))
    mask_data = []
    for y in range(height):
        mask_data.extend([int(255 * (y / height))] * width)
    mask.putdata(mask_data)
    base.paste(top, (0, 0), mask)
    return base

def add_text(img, text, position, font, color=LIGHT_COLOR):
    """Ajouter du texte à une image"""
    draw = ImageDraw.Draw(img)
    
    # Calculer la position centrée
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    x = position[0] - text_width // 2
    y = position[1] - text_height // 2
    
    draw.text((x, y), text, font=font, fill=color)
    return img

def create_logo():
    """Créer le logo Costa Kebab"""
    width, height = 400, 400
    img = Image.new('RGB', (width, height), DARK_COLOR)
    
    # Créer un rectangle orange
    draw = ImageDraw.Draw(img)
    padding = 50
    draw.rectangle([(padding, padding), (width-padding, height-padding)], fill=PRIMARY_COLOR, outline=PRIMARY_COLOR, width=10)
    
    # Ajouter le texte
    img = add_text(img, "COSTA", (width//2, height//2 - 30), font_large, LIGHT_COLOR)
    img = add_text(img, "KEBAB", (width//2, height//2 + 30), font_large, LIGHT_COLOR)
    
    img.save(f"{BASE_DIR}/branding/logo.png")
    img.save(f"{BASE_DIR}/branding/logo.svg", "PNG")  # Sauvegarder aussi en PNG
    print("✅ Logo créé")

def create_hero_image():
    """Créer l'image principale pour la section Hero"""
    width, height = 1920, 1080
    
    # Créer un dégradé noir
    img = create_gradient(width, height, DARK_COLOR, (30, 30, 40))
    
    # Ajouter un cercle orange au centre
    draw = ImageDraw.Draw(img)
    center_x, center_y = width//2, height//2
    radius = 200
    draw.ellipse([(center_x-radius, center_y-radius), (center_x+radius, center_y+radius)], fill=PRIMARY_COLOR)
    
    # Ajouter du texte
    img = add_text(img, "COSTA KEBAB", (width//2, height//2 - 50), font_large, LIGHT_COLOR)
    img = add_text(img, "LE GOÛT QUI FAIT", (width//2, height//2 + 20), font_medium, LIGHT_COLOR)
    img = add_text(img, "LA DIFFÉRENCE", (width//2, height//2 + 80), font_medium, LIGHT_COLOR)
    
    img.save(f"{BASE_DIR}/hero/main-dish.jpg")
    print("✅ Image Hero créée")

def create_product_image(name, category, price):
    """Créer une image placeholder pour un produit"""
    width, height = 800, 600
    
    # Créer un fond dégradé
    img = create_gradient(width, height, (40, 40, 50), (20, 20, 25))
    
    # Ajouter un rectangle orange en haut
    draw = ImageDraw.Draw(img)
    draw.rectangle([(0, 0), (width, 100)], fill=PRIMARY_COLOR)
    
    # Ajouter le nom du produit
    img = add_text(img, name.upper(), (width//2, 50), font_medium, LIGHT_COLOR)
    
    # Ajouter des détails
    img = add_text(img, f"{category} - {price}€", (width//2, height//2), font_small, LIGHT_COLOR)
    
    # Sauvegarder
    filename = name.lower().replace(" ", "-").replace("é", "e").replace("è", "e").replace("ê", "e")
    img.save(f"{BASE_DIR}/products/{filename}.jpg")
    print(f"✅ Image produit créée: {name}")

def create_restaurant_image(type_img):
    """Créer une image placeholder pour le restaurant"""
    width, height = 1200, 800
    
    # Créer un dégradé
    img = create_gradient(width, height, (30, 30, 40), (10, 10, 15))
    
    # Ajouter un rectangle orange
    draw = ImageDraw.Draw(img)
    draw.rectangle([(100, 100), (width-100, height-100)], fill=PRIMARY_COLOR, outline=PRIMARY_COLOR, width=5)
    
    # Ajouter du texte
    img = add_text(img, f"RESTAURANT {type_img.upper()}", (width//2, height//2 - 50), font_medium, LIGHT_COLOR)
    img = add_text(img, "COSTA KEBAB", (width//2, height//2 + 20), font_large, LIGHT_COLOR)
    img = add_text(img, "Saint-Médard-en-Jalles", (width//2, height//2 + 80), font_small, LIGHT_COLOR)
    
    img.save(f"{BASE_DIR}/restaurant/{type_img.lower()}.jpg")
    print(f"✅ Image restaurant créée: {type_img}")

def create_gallery_image(title, category):
    """Créer une image placeholder pour la galerie"""
    width, height = 1200, 800
    
    # Créer un fond
    img = create_gradient(width, height, (25, 25, 35), (15, 15, 20))
    
    # Ajouter une bordure orange
    draw = ImageDraw.Draw(img)
    draw.rectangle([(50, 50), (width-50, height-50)], outline=PRIMARY_COLOR, width=10)
    
    # Ajouter du texte
    img = add_text(img, title.upper(), (width//2, height//2 - 30), font_medium, LIGHT_COLOR)
    img = add_text(img, f"({category})", (width//2, height//2 + 30), font_small, GRAY_COLOR)
    
    filename = title.lower().replace(" ", "-").replace("é", "e").replace("è", "e")
    img.save(f"{BASE_DIR}/gallery/{filename}.jpg")
    print(f"✅ Image galerie créée: {title}")

def create_placeholder_image(name, width=400, height=400):
    """Créer une image placeholder générique"""
    img = Image.new('RGB', (width, height), (50, 50, 60))
    
    draw = ImageDraw.Draw(img)
    draw.rectangle([(50, 50), (width-50, height-50)], outline=PRIMARY_COLOR, width=5)
    
    img = add_text(img, name.upper(), (width//2, height//2), font_small, PRIMARY_COLOR)
    
    img.save(f"{BASE_DIR}/{name}.jpg")
    print(f"✅ Placeholder créé: {name}")

# Générer toutes les images
print("\n🎨 Génération des images pour Costa Kebab...")
print("=" * 60)

# Logo
create_logo()

# Hero
create_hero_image()

# Produits phares
products = [
    ("Sandwich au Kebab", "Sandwichs", "12.00"),
    ("Tacos 1 Viande", "Tacos", "12.00"),
    ("Assiette Kebab", "Assiettes", "16.90"),
    ("Cheese Burger", "Burgers", "9.90"),
    ("Sandwich Steak du Boucher", "Sandwichs", "12.00"),
    ("Poulet Crousty", "Formules", "11.60"),
    ("Poulet Crousty XL", "Formules", "16.80"),
    ("Menu Poulet Crousty", "Formules", "11.60"),
    ("Sandwich Kebab Special", "Sandwichs", "15.00"),
    ("Sandwich Double Steak", "Sandwichs", "15.00"),
    ("Sandwich Merguez", "Sandwichs", "12.00"),
    ("Sandwich Falafel Vegetarien", "Sandwichs", "11.80"),
    ("Sandwich Mix", "Sandwichs", "16.50"),
    ("WRAP Chicken Patata", "Sandwichs", "13.50"),
    ("Tacos 2 Viandes", "Tacos", "Prix variable"),
    ("Hamburger Fromage Chevre", "Burgers", "11.50"),
    ("Assiette Steak", "Assiettes", "Prix variable"),
    ("Panini Kebab", "Paninis", "Prix variable"),
    ("Salade Kebab", "Salades", "Prix variable"),
    ("Frites", "Accompagnements", "Prix variable"),
    ("Riz du Cambodge", "Accompagnements", "Prix variable"),
    ("Tiramisu", "Desserts", "Prix variable"),
    ("Coca-Cola", "Boissons", "Prix variable"),
    ("Ice-Tea", "Boissons", "Prix variable"),
]

for name, category, price in products:
    create_product_image(name, category, price)

# Restaurant
restaurant_types = ["exterior-main", "exterior-1", "exterior-2", "interior-1", "interior-2", "interior-3", "grill"]
for r_type in restaurant_types:
    create_restaurant_image(r_type)

# Galerie
gallery_items = [
    ("Hero Main", "product"),
    ("Kebab Traditionnel", "product"),
    ("Tacos Francais", "product"),
    ("Burger Maison", "product"),
    ("Assiette Complete", "product"),
    ("Poulet Crousty", "product"),
    ("Restaurant Exterior 1", "exterior"),
    ("Restaurant Exterior 2", "exterior"),
    ("Restaurant Interior 1", "interior"),
    ("Restaurant Interior 2", "interior"),
    ("Restaurant Interior 3", "interior"),
]

for title, category in gallery_items:
    create_gallery_image(title, category)

# Placeholders
create_placeholder_image("placeholder-product")
create_placeholder_image("placeholder-hero")
create_placeholder_image("placeholder-gallery")
create_placeholder_image("placeholder-restaurant")
create_placeholder_image("placeholder-signature")

print("\n" + "=" * 60)
print("✅ Toutes les images ont été générées !")
print(f"📁 Dossier: {BASE_DIR}")
print("\n💡 Ces images sont des placeholders temporaires.")
print("   Remplacez-les par des photos réelles du restaurant pour un résultat optimal.")
