from PIL import Image
from sklearn.cluster import KMeans
import numpy as np

def extract_dominant_color(image_path):
    image = Image.open(image_path)
    image = image.resize((150, 150))  # Resize for faster processing
    np_image = np.array(image)
    np_image = np_image.reshape((-1, 3))

    kmeans = KMeans(n_clusters=1)
    kmeans.fit(np_image)
    color = kmeans.cluster_centers_.astype(int)[0]

    return color

def calculate_luminance(color):
    # Calculate the luminance of the color using the Rec. 709 formula
    return (0.2126 * color[0] + 0.7152 * color[1] + 0.0722 * color[2]) / 255

def determine_text_color(background_color):
    luminance = calculate_luminance(background_color)
    return 'rgb(255, 255, 255)' if luminance < 0.5 else 'rgb(0, 0, 0)'

def update_theme_field(instance, color):
    text_color = determine_text_color(color)
    theme = {
        'color': f"rgb({color[0]}, {color[1]}, {color[2]})",
        'text': text_color
    }
    instance.theme = theme
    instance.save(update_fields=['theme'])

