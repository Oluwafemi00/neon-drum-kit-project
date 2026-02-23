// Configuration Object: scalable and easy to edit
const soundMap = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/crash.mp3",
  l: "sounds/kick-bass.mp3",
};

class DrumKit {
  constructor() {
    this.keys = document.querySelectorAll(".key");
    this.init();
  }

  init() {
    // 1. Listen for Keyboard events
    window.addEventListener("keydown", (e) => this.playSound(e.key));

    // 2. Listen for Click events (using modern forEach)
    this.keys.forEach((key) => {
      key.addEventListener("click", () => {
        const keyChar = key.getAttribute("data-key");
        this.playSound(keyChar);
      });

      // 3. Remove transition class automatically when animation ends
      key.addEventListener("transitionend", this.removeTransition);
    });
  }

  playSound(keyChar) {
    // Normalize to lowercase to handle CapsLock
    const key = keyChar.toLowerCase();

    // Guard Clause: If the key isn't in our map, stop the function
    if (!soundMap[key]) return;

    // Visual Effect
    const keyElement = document.querySelector(`.key[data-key="${key}"]`);
    if (keyElement) {
      keyElement.classList.add("playing");
    }

    // Audio Effect
    // We create a new Audio instance every time to allow rapid-fire play
    const audio = new Audio(soundMap[key]);
    audio.currentTime = 0; // Rewind to start if already playing
    audio.play();
  }

  removeTransition(e) {
    // Only care about the transform property to avoid double-firing
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  }
}

// Initialize the App
const app = new DrumKit();
