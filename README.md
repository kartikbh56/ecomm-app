# Ecomm App

A modern, responsive e-commerce web application built with [Next.js](https://nextjs.org), React, and Tailwind CSS. This project features advanced product filtering, a clean UI, and modular component architecture, making it a great starting point for any online store or e-commerce prototype.

## Features

- Product listing with advanced filtering (search, category, price range)
- Responsive design with mobile-first layout
- Modular UI components using Radix UI and custom elements
- Fast performance with Next.js 15 and React 19
- Easy customization and extension

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, Tailwind CSS 4, Radix UI
- **Icons:** Lucide React
- **Utilities:** class-variance-authority, clsx, use-debounce

## Folder Structure

```
app/
  (home)/           # Home page route
  components/       # Core layout, navbar, sidebar, product card, etc.
  product/          # Dynamic product detail pages
  layout.js         # Root layout for the app
  globals.css       # Global styles
components/
  ui/               # Reusable UI primitives (button, input, card, etc.)
public/             # Static assets (images, favicon)
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Customization
- Edit `app/components/` and `components/ui/` to modify layout or UI elements.
- Product data is fetched from [dummyjson.com](https://dummyjson.com/products), but you can change the API endpoint in `app/(home)/page.js`.

## Deployment
Deploy easily with [Vercel](https://vercel.com/) or any platform supporting Next.js.

## License
MIT

---

> Built with ❤️ using Next.js
