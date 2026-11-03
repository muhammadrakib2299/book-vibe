# Book Vibe

A React (Vite) book-listing practice project with React Router, Tailwind CSS and DaisyUI.

## Features

- Home page with a banner and a grid of book cards (cover, author, tags, category, rating) loaded from `public/booksData.json`
- Book detail page at `/books/:bookId` (review, tags, page count, publisher, year), loaded with a React Router loader
- "Mark as Read" button that saves the book ID to `localStorage`
- Scroll-to-top button and a custom error page for unknown routes
- Placeholder routes for "Listed Books" and "Pages to Read" (not built out yet)

## Built with

React 19, Vite 7, React Router 7, Tailwind CSS 4, DaisyUI 5, Lucide and React Icons.

## What I practised

- React Router: nested routes, dynamic `:bookId` params, data loaders and an error element
- Fetching local JSON and rendering lists of components with props
- Saving data in `localStorage` from a small helper module

## Run locally

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.
