# Number Guessing Game 🎯

A small, fun, and responsive web game where the player tries to guess a randomly generated number between **1 and 10**. Built using **HTML**, **CSS**, **JavaScript**, **Bootstrap**, and **SweetAlert2**. Perfect as a beginner frontend project to practice DOM manipulation, event handling, and UI polish.

---

## 🔗 Live Demo

Play it on GitHub Pages: [https://sahan99827.github.io/Number_Gussing_Game/](https://sahan99827.github.io/Number_Gussing_Game/)

---

## 📸 Screenshot

![Screenshot](./screenshot.png)

---

## ⭐ Features

* Simple and clean UI with Bootstrap
* Responsive layout for desktop and mobile
* Input validation (accepts numbers 1–10)
* Friendly alerts and results using SweetAlert2
* Easily deployable to GitHub Pages

---

## 🛠 Tech Stack

* HTML5
* CSS3 (custom styles + Bootstrap)
* JavaScript (vanilla)
* SweetAlert2 for modal alerts

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

* A modern browser (Chrome, Firefox, Edge, Safari)
* Optional: a code editor like VS Code and Git

### Clone the repository

```bash
git clone https://github.com/sahan99827/Number_Gussing_Game.git
cd Number_Gussing_Game
```

### Open locally

Open `index.html` in your browser, or run a simple HTTP server (recommended for assets):

```bash
# using Python 3
python -m http.server 8000
# then open http://localhost:8000
```

---

## 💡 Usage

1. Enter a number between 1 and 10 in the input field.
2. Click **Play Game**.
3. SweetAlert2 will show whether your guess matched the random number.

---

## 🧩 How it works (brief)

* On clicking the play button, JS generates a random integer between 1 and 10.
* It validates the user input.
* It compares the guess to the random number and shows a SweetAlert2 modal indicating success or failure.

---

## ♻️ Customize

Want to change the range (e.g., 1 to 20) or tweak the UI? Edit the `script.js` or `index.html` and adjust the random number generation and input `min`/`max` attributes.

Example (change max to 20):

```js
const randomNumber = Math.floor(Math.random() * 20) + 1;
```

---

## 🧑‍💻 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to add features, accessibility improvements, tests, or translations.

Suggested improvements:

* Add scoreboard / attempts counter
* Add difficulty levels
* Save high score with localStorage
* Add keyboard accessibility

---

## 📄 License

This project is open source — choose the license you prefer (e.g., MIT). Add a `LICENSE` file if you want to make it explicit.

---

## ✉️ Contact

**Author:** Sahan Geesara

* GitHub: [sahan99827](https://github.com/sahan99827)
* Project: [https://sahan99827.github.io/Number_Gussing_Game/](https://sahan99827.github.io/Number_Gussing_Game/)

---

If you'd like, I can also:

* Add a ready-made `LICENSE` file (MIT)
* Generate a README badge set (build/deploy/status)
* Produce a PNG/JPEG hero image for the repo (social preview)

Tell me which and I'll add it.
