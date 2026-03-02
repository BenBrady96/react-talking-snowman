# ⛄ React Talking Snowman

A cute animated talking snowman for the web

A lightweight React component that renders a CSS-animated snowman who bounces, wobbles, and displays random speech bubbles on a loop.

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Configuration](#-configuration) • [Technical Details](#-technical-details) • [License](#-license)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![CSS Animations](https://img.shields.io/badge/CSS-Animations-1572B6?logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

### Core Animation
- ⛄ **Bouncing Snowman** — A three-snowball snowman gently bounces in the corner of the screen
- 💬 **Speech Bubbles** — Random quotes pop in above the snowman every 6 seconds
- 🗣️ **Talking Wobble** — The snowman wobbles side-to-side while a speech bubble is active
- 🎩 **Full Character** — Top hat, carrot nose, scarf with waving tail, stick arms, and coat buttons

### Technical
- ⚡ **Pure CSS Animations** — No canvas, no WebGL, no JavaScript animation loops
- 🪶 **Lightweight** — Zero external animation dependencies
- 📱 **Responsive** — Scales down on mobile with adjusted speech bubble sizing
- 🚫 **Non-intrusive** — `pointer-events: none` overlay, doesn't interfere with page interaction

---

## 🎬 Demo

### [🔗 Live Demo](https://BenBrady96.github.io/react-talking-snowman/)

---

## 📦 Installation

### Quick Start

```bash
# Clone the repository
git clone https://github.com/BenBrady96/react-talking-snowman.git
cd react-talking-snowman

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173/react-talking-snowman/](http://localhost:5173/react-talking-snowman/) to view it locally.

---

## ⚙️ Configuration

### Speech Bubbles

Quotes are stored in `src/quotes.js` and can be easily added to or modified:

| Property | Value | Description |
|---|---|---|
| Quote Interval | 6s | Time between new speech bubbles |
| Bubble Duration | 4s | How long each bubble stays visible |
| Initial Quote | Instant | A quote appears immediately on page load |

### Snowman Appearance

Edit `src/Snowman.css` to adjust:
- **Size** — Modify the `width` and `height` of `.snowman-container`
- **Bounce speed** — Change the `bounce` animation duration (default `2s`)
- **Scarf colour** — Update the `background-color` on `.scarf` and `.scarf::after`
- **Position** — Adjust `bottom` and `left` on `.snowman-container`

---

## 🏗️ Technical Details

### Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Component rendering & state |
| Vite 7 | Build tooling & dev server |
| CSS Keyframes | All snowman animation |
| gh-pages | One-command deployment |

### Project Structure

```
react-talking-snowman/
├── src/
│   ├── Snowman.jsx      # Snowman component with speech bubble logic
│   ├── Snowman.css      # Keyframe animations & snowman styles
│   ├── quotes.js        # Speech bubble quotes (easy to edit)
│   ├── App.jsx          # Root app component
│   ├── index.css        # Global styles (dark winter background)
│   └── main.jsx         # React entry point
├── index.html           # HTML shell
├── vite.config.js       # Vite config with GitHub Pages base path
└── package.json         # Dependencies & deploy scripts
```

### How It Works

1. **On mount**, `Snowman` picks a random quote and displays it immediately in a speech bubble
2. Every **6 seconds**, a new random quote is selected and the bubble pops in with a CSS animation
3. The bubble **hides after 4 seconds**, leaving a 2-second gap of silence before the next one
4. While a bubble is active, the snowman gets a `talking` CSS class that adds a **wobble animation**
5. All visual rendering is **pure CSS** — the snowman body, hat, scarf, arms, and animations use no images

---

## 📄 License

MIT - see [LICENSE](LICENSE) for details.

---

## 📧 Contact

- [GitHub](https://github.com/BenBrady96)
- [LinkedIn](https://www.linkedin.com/in/ben-brady-b241642b4/)
