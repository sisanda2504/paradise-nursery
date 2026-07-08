# Paradise Nursery

Paradise Nursery is a dynamic shopping cart web application for an online
plant shop. Users can browse houseplants across multiple categories, view
plant details (thumbnail, name, description, and price), add plants to a
shopping cart, and manage cart items — including adjusting quantities,
removing items, and viewing the running total cost.

## Project Name

**Paradise Nursery** — "Where Green Meets Serenity"

## Tech Stack

- React (functional components + hooks)
- Redux Toolkit (cart state management via `CartSlice.jsx`)
- React Router (navigation between Home, Plants, and Cart pages)
- Plain CSS (no external UI framework)

## Features

- Landing page with company name, tagline, and a "Get Started" button
- About Us section describing the company
- Product listing page with plants grouped into categories, each with a
  thumbnail, name, price, and an "Add to Cart" button that disables once
  added and updates the cart icon count
- Persistent navbar with links to Home, Plants, and Cart, and a live cart
  item counter
- Full shopping cart page: per-item thumbnail/name/unit price, quantity
  increment/decrement, delete button, running subtotal per item, and total
  cart amount
- "Checkout" button (shows a "Coming Soon" message) and a "Continue
  Shopping" button back to the product listing

## Getting Started

```bash
npm install
npm start
```

The app will run at `http://localhost:3000`.

## Project Structure

```
src/
  App.jsx                 – top-level routes
  App.css                 – background image for landing page
  redux/
    store.js
    CartSlice.jsx          – cart reducer logic
  components/
    Navbar.jsx / .css
    Landing.jsx / .css
    AboutUs.jsx / .css
    ProductList.jsx / .css
    CartItem.jsx / .css
    PlantIcon.jsx          – SVG thumbnail generator
    plantsData.js          – plant catalog (3 categories, 6 plants each)
```
