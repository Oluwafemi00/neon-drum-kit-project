# 🥁 Neon Beats Drum Kit

A modern, interactive drum kit playable via keyboard or mouse. This project serves as a practical demonstration of refactoring legacy procedural JavaScript into clean, scalable, Object-Oriented code.

## ✨ Features

- **Multi-Input Playback:** Trigger sounds via mouse clicks or corresponding keyboard presses.
- **Zero-Latency Audio:** Rapid-fire audio instantiation allows for overlapping beats without clipping.
- **Modern UI/UX:** Features a responsive "Neon Glassmorphism" aesthetic with synced CSS/JS animations.

## 🛠️ Tech Stack

- **HTML5:** Semantic structure and `data-*` attributes for DOM-to-Logic binding.
- **CSS3:** CSS Variables (Custom Properties), Flexbox, and complex CSS shadows for the glowing effects.
- **JavaScript (ES6+):** Object-Oriented Programming (Classes), Arrow Functions, and Data Dictionaries.

## 🧠 The Architecture (Refactoring Journey)

This project was heavily refactored to demonstrate modern JavaScript best practices:

1. **Data-Driven Design over Control Flow:** Replaced a monolithic 30-line `switch` statement with a single `soundMap` object. This separates the _data_ (which key plays which sound) from the _logic_ (how the sound is played), making the app infinitely scalable without writing more logic.
2. **Object-Oriented Encapsulation:** Wrapped the application inside a `DrumKit` class. This prevents global scope pollution and cleanly organizes initialization, event listeners, and DOM manipulation.
3. **Synchronized Animations:** Moved away from hardcoded `setTimeout` functions. The app now listens for the CSS `transitionend` event to remove CSS classes, ensuring the JavaScript logic and CSS rendering are perfectly in sync regardless of how CSS transition times are updated in the future.

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone (https://github.com/yourusername/neon-drum-kit-project.git)

   ```

2. Open the project directory.

3. Open index.html in your browser. No build steps or local server required!

## 🤝 Let's Connect

I'm a Full Stack JavaScript developer focusing on the PERN stack and scalable web architecture.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/sodiq-oladele)
[![Portfolio](https://img.shields.io/badge/Portfolio-%23000000.svg?logo=firefox&logoColor=#00ffcc)](https://oluwafemi00.github.io/dev-portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](https://github.com/oluwafemi00)
