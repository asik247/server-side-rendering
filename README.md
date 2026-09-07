# 🍽️ FoodieExpress — Modern Food Delivery Platform

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)

A clean, responsive food ordering interface featuring animated product cards, interactive skeletons, item detail previews, and shopping cart integration.

---

## ✨ Features

- **Modern Food Cards**: Smooth hover states, category pill badges, ratings, and price formatting.
- **Skeleton Loaders**: Custom pulse animations matching the exact card dimensions during data fetch.
- **Responsive Grid**: Adaptive layout scaling effortlessly from mobile screens to 4K displays.
- **Action Triggers**: Ready-to-connect handlers for **View Details** modals and **Add to Cart** state.
- **Dark Mode Ready**: Pre-configured Tailwind dark mode classes on cards and skeletons.

---

## 🛠️ Tech Stack

- **Frontend Library**: React.js
- **Styling**: Tailwind CSS
- **Icons**: Inline SVG icons (Zero extra bundle size)

---

## 📁 Folder Structure

```text
src/
├── components/
│   ├── FoodCard.jsx          # Interactive Food Card
│   ├── FoodCardSkeleton.jsx  # Pulse Skeleton Placeholder
│   └── FoodList.jsx          # Responsive Grid Container
├── App.jsx
└── main.jsx