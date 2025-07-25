<!-- The path is now relative to the root of your project -->

![Logo](./public/images/logo.png)

# 🏠 Real Estate Application (React)

A full-featured E-commerce application built with **React**. Users can browse, search, and book rental House & Apartment. The platform includes property details, user Login, Registration, reviews, and a responsive UI optimized for all devices.

---

## ✨ Features

- 🔍 Browse and search for house and apartment listings.
- 🏡 View property details with image gallery and short videos.
- 📝 Add images and short videos.
- 🔐 User (Login/Register).
- 💾 User profile with saved listings.
- 📱 Fully responsive design.
- ⚡ Fast and modern UI built with React.

---

## 🚀 Tech Stack

- **Frontend**: React, React Router, Tailwind CSS
- **State Management**: `useState`, `useRef`, `useContext`
- **Routing**: React Router DOM
- **Deployment**: Vercel (Frontend)

---

## 📁 Folder Structure

## my-react-app/├── public/│ ├── fonts/│ └── images/│ └── logo.png├── src/│ ├── assets/│ │ ├── icons/│ │ ├── images/│ │ └── local/│ │ ├── ar.json│ │ └── en.json│ ├── components/│ │ ├── layout/│ │ └── ui/│ ├── features/│ │ ├── authentication/│ │ └── my-ads/│ ├── pages/│ ├── providers/│ ├── styles/│ ├── App.jsx│ ├── main.jsx│ └── i18n.js├── .env├── .gitignore├── index.html├── package.json└── vite.config.js

## 🔧 Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Md-Ridoy-Hasan-Kamrul/React-skywalker.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd <YOUR_PROJECT_FOLDER>
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  Open your browser and navigate to `http://localhost:5173` (or whatever port Vite is using).

---

## 🎨 Tailwind & Prettier Setup

For the best development experience with automatic class sorting.

1.  **Install dev-dependencies:**

    ```bash
    npm install -D prettier prettier-plugin-tailwindcss
    ```

2.  **Create a `.prettierrc` file** in your project's root directory with the following content:
    ```json
    {
      "plugins": ["prettier-plugin-tailwindcss"]
    }
    ```
