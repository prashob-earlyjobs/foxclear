"""Render the hero section to public/og-image.jpg at the 1200x630 social card size.

Run a dev or preview server first, then:

    .venv/bin/python scripts/capture_og_image.py --url http://localhost:5173/
"""

import argparse
import subprocess
import tempfile
from pathlib import Path

from PIL import Image

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
CARD_WIDTH, CARD_HEIGHT = 1200, 630
CAPTURE_WIDTH = 1440


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--url", default="http://localhost:5173/")
    parser.add_argument("--chrome", default=CHROME)
    args = parser.parse_args()

    out = Path(__file__).resolve().parent.parent / "public" / "og-image.jpg"
    capture_height = round(CAPTURE_WIDTH * CARD_HEIGHT / CARD_WIDTH)

    with tempfile.TemporaryDirectory() as tmp:
        raw = Path(tmp) / "capture.png"
        subprocess.run(
            [
                args.chrome,
                "--headless",
                "--disable-gpu",
                "--hide-scrollbars",
                f"--window-size={CAPTURE_WIDTH},{capture_height}",
                f"--screenshot={raw}",
                "--virtual-time-budget=9000",
                args.url,
            ],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )

        shot = Image.open(raw).convert("RGB")
        if shot.width != CAPTURE_WIDTH:
            # Headless Chrome clamps very small windows; scale whatever we got.
            capture_height = round(shot.width * CARD_HEIGHT / CARD_WIDTH)
        card = shot.crop((0, 0, shot.width, min(shot.height, capture_height)))
        card = card.resize((CARD_WIDTH, CARD_HEIGHT), Image.LANCZOS)
        card.save(out, quality=86, optimize=True, progressive=True)

    print(f"{out.relative_to(out.parents[1])} ({CARD_WIDTH}, {CARD_HEIGHT})")


if __name__ == "__main__":
    main()
