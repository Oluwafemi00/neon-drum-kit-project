# Neon Beats — Drum Kit 🥁

> A browser-based drum machine with synthesized audio via the Web Audio API, 7 colour-coded pads, a 20-segment VU meter, volume control, and a premium dark industrial design — no audio files required.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Web Audio API](https://img.shields.io/badge/Web%20Audio%20API-synthesized-blueviolet)
![No Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)

---

## Overview

Neon Beats is a fully functional drum kit that synthesises all percussion sounds mathematically using the Web Audio API — no `.mp3` or `.wav` files needed. Each of the 7 pads produces a distinct drum sound (kick, snare, crash, 4 toms), responds to both keyboard input and touch/click, and triggers a coordinated visual response across the pad, VU meter, and "last played" display.

---

## Features

| Feature                      | Details                                                    |
| ---------------------------- | ---------------------------------------------------------- |
| **7 Drum Pads**              | Tom 1–4, Snare, Crash, Kick — unique colour per pad        |
| **Web Audio Synthesis**      | All sounds generated in real time — zero file dependencies |
| **Keyboard Input**           | Keys W A S D J K L map to pads                             |
| **Touch / Click**            | `pointerdown` for zero-latency response on mobile          |
| **Volume Slider**            | Controls master gain via Web Audio API gain node           |
| **VU Meter**                 | 20 animated segments spike in pad colour on each hit       |
| **Last Played Display**      | Shows drum name in its colour; fades to "READY" after 1.2s |
| **Ripple Effect**            | Click-accurate ripple animation on button press            |
| **Physical Press Animation** | Pad drops 3px on activation — feels tactile                |
| **`e.repeat` Guard**         | Prevents audio spam when a key is held down                |
| **CRT Scan-line Overlay**    | Subtle texture adds hardware/instrument feel               |
| **Machine Branding**         | "Asaph Instruments · NB-808" with pulsing green power LED  |

---

## Technical Highlights

### Audio Synthesis

Each drum sound is procedurally generated:

- **Kick** — sine oscillator with exponential pitch drop (150Hz → 0), short decay
- **Snare** — white noise buffer filtered through a high-pass BiquadFilter at 1kHz
- **Crash** — longer white noise through a bandpass filter at 6kHz, 1.5s decay
- **Toms** — tuned sine oscillators at 280/220/180/140Hz with pitch decay

### Other Highlights

- **`AudioContext` resumed on first interaction** — satisfies browser autoplay policy
- **New `Audio` node per hit** — allows rapid-fire overlapping sounds (no "wait for previous to finish")
- **VU decay in 140ms** — direct DOM style manipulation, faster than CSS animation
- **`getBoundingClientRect()`** used to position ripple at exact pointer coordinates
- **Space Mono + Space Grotesk** — technical monospace + display font pairing for hardware-instrument aesthetics
- **Per-pad CSS custom properties** (`--pad-color`, `--pad-glow`) drive all pad-specific styles from a single class

---

## Project Structure

```
neon-beats.html      ← Complete app: HTML + embedded CSS + embedded JS
```

---

## Design Decisions

- **7 unique pad colours** — each drum has a distinct visual identity; no two pads share a colour
- **Dark charcoal base** (`#080B12`) with electric accent per pad — evokes professional drum machine hardware
- **Physical button press** — `scale(0.93) translateY(2px)` + reduced box-shadow simulates a real button being depressed

---

## Run Locally

```bash
open neon-beats.html
# No server required — Web Audio API works from filesystem
```

---

## What This Demonstrates

- Real-time audio synthesis with the Web Audio API (no files, no libraries)
- Low-latency input handling with `pointerdown` and `e.repeat` guards
- Coordinated multi-surface UI updates (pad, VU meter, display) from a single event
- Procedural sound design: different filter types, oscillator shapes, and envelope curves per instrument
