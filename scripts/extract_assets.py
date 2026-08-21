"""Slice the supplied Fox Clear brand sheets into individual web assets."""

from pathlib import Path

from PIL import Image

SRC = Path(
    "/Users/macbookpro/.cursor/projects/"
    "Users-macbookpro-Documents-Victaman-Projects-Fox-clear/assets"
)
OUT = Path(__file__).resolve().parent.parent / "src" / "assets"
OUT.mkdir(parents=True, exist_ok=True)

SHEETS = {
    "logo": "WhatsApp_Image_2026-08-21_at_14.58.46__1_-f1d9ebb8-c474-407a-a40d-365901dcd840.png",
    "mockup": "WhatsApp_Image_2026-08-21_at_14.58.46-5a6289f2-393b-4c72-b74e-ebeba766c388.png",
    "uniform": "WhatsApp_Image_2026-08-21_at_14.58.47-ace7c37a-302e-41aa-bee3-4208a8a5acec.png",
    "vanwrap": "WhatsApp_Image_2026-08-21_at_14.58.47__1_-54ac958a-620b-408b-ac0b-1ba369e886b5.png",
    "vanbanner": "WhatsApp_Image_2026-08-21_at_14.58.47__2_-cfba6310-e330-40a3-883f-681d9427db33.png",
    "poster": "WhatsApp_Image_2026-08-21_at_14.58.48-3c333bd0-d6f5-428c-b771-f501a84af92e.png",
    "truckbanner": "WhatsApp_Image_2026-08-21_at_14.58.48__1_-be14c0a6-2d02-4657-ac79-ebae76a9b7f0.png",
    "onthejob": "WhatsApp_Image_2026-08-21_at_16.53.21-c86b4580-fa52-4e75-a93c-6ea23200c3e5.png",
}

# name -> (sheet, box, scale, transparent_black)
CROPS = {
    "logo-full": ("logo", (40, 40, 990, 990), 1.0, True),
    "logo-mark": ("logo", (55, 55, 1000, 770), 1.0, True),
    "logo-wordmark": ("vanwrap", (8, 8, 338, 100), 2.4, True),
    "hero-collection": ("onthejob", (0, 0, 1024, 682), 1.9, False),
    "hero-collection-tall": ("onthejob", (150, 24, 900, 682), 1.7, False),
    "hero-truck": ("truckbanner", (670, 2, 1022, 286), 3.0, False),
    "van-hero": ("vanwrap", (372, 6, 1012, 312), 2.0, False),
    "van-side": ("vanwrap", (10, 322, 638, 516), 1.8, False),
    "van-rear": ("vanwrap", (650, 322, 1016, 516), 1.8, False),
    "van-front": ("vanwrap", (8, 530, 224, 676), 2.2, False),
    "van-angle": ("vanwrap", (400, 530, 856, 676), 2.0, False),
    "team-uniform": ("uniform", (6, 92, 330, 606), 2.2, False),
    "kit-polo": ("uniform", (350, 62, 1020, 232), 1.6, False),
    "kit-hoodie": ("uniform", (350, 556, 1020, 728), 1.6, False),
    "van-street": ("vanbanner", (430, 6, 1010, 330), 1.8, False),
    "poster-night": ("poster", (30, 470, 740, 900), 1.6, False),
}

# The hero is the largest image on the page, so it gets a tighter compression budget.
JPEG_QUALITY = {"hero-collection": 78, "hero-collection-tall": 78}
DEFAULT_QUALITY = 88


def strip_black(img: Image.Image, threshold: int = 26) -> Image.Image:
    """Knock out the flat black studio background so logos sit on any surface."""
    img = img.convert("RGBA")
    pixels = img.load()
    width, height = img.size
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            peak = max(r, g, b)
            if peak <= threshold:
                pixels[x, y] = (r, g, b, 0)
            elif peak <= threshold * 2:
                pixels[x, y] = (r, g, b, int(a * (peak - threshold) / threshold))
    return img


def main() -> None:
    sheets = {key: Image.open(SRC / name) for key, name in SHEETS.items()}

    for name, (sheet, box, scale, transparent) in CROPS.items():
        crop = sheets[sheet].crop(box)
        if scale != 1.0:
            size = (round(crop.width * scale), round(crop.height * scale))
            crop = crop.resize(size, Image.LANCZOS)
        if transparent:
            crop = strip_black(crop)
            crop = crop.crop(crop.getbbox())
            crop.save(OUT / f"{name}.png", optimize=True)
            print(f"{name}.png {crop.size}")
        else:
            quality = JPEG_QUALITY.get(name, DEFAULT_QUALITY)
            crop.convert("RGB").save(
                OUT / f"{name}.jpg", quality=quality, optimize=True, progressive=True
            )
            print(f"{name}.jpg {crop.size}")

    favicon = strip_black(sheets["logo"].crop((55, 55, 1000, 770)))
    favicon = favicon.crop(favicon.getbbox())
    side = max(favicon.size)
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    canvas.paste(
        favicon,
        ((side - favicon.width) // 2, (side - favicon.height) // 2),
    )
    public = Path(__file__).resolve().parent.parent / "public"
    public.mkdir(exist_ok=True)
    canvas.resize((512, 512), Image.LANCZOS).save(public / "favicon.png", optimize=True)
    print("public/favicon.png (512, 512)")


if __name__ == "__main__":
    main()
