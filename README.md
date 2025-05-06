# NeuralArc

NeuralArc is a modern, modular, and scalable Next.js application designed for advanced case study presentation, analytics, and operational dashboards. The project is structured for easy extension and customization, with a focus on clean UI, reusable components, and responsive design.

## Project Overview

NeuralArc provides:
- Case study pages with reusable, composable sections (hero, challenges, value, dashboard, etc.)
- Responsive layouts for desktop and mobile
- Modular component structure for rapid feature development
- Real-world data visualization and business storytelling

## Tech Stack
- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [embla-carousel-react](https://www.embla-carousel.com/) for mobile sliders
- [next/image](https://nextjs.org/docs/app/api-reference/components/image) for optimized images

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Folder Structure

- `app/` — Next.js app directory (routes, pages)
- `components/` — All reusable UI components, organized by feature (e.g., `case-study/nod/`)
- `public/` — Static assets (images, SVGs, etc.)
- `styles/` — Global and Tailwind CSS config

## Adding/Editing Case Study Pages
- Each case study page (e.g., `/app/case-study/nod/ecommerce/page.tsx`) composes modular sections from `components/case-study/nod/`.
- To add a new section, create a new component in `components/case-study/nod/` and import it into your page.
- All section content (titles, images, text, etc.) is passed as props for easy customization.

## Contributing
- Keep components modular and reusable.
- Use Tailwind CSS for all styling.
- Prefer composition over duplication—reuse existing components where possible.
- Use TypeScript for all files.
- Add new images/SVGs to the `public/images/` directory.
- Test your changes on both desktop and mobile breakpoints.

## Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [embla-carousel-react Docs](https://www.embla-carousel.com/)

## Deployment
Deploy easily on [Vercel](https://vercel.com/) or your preferred platform. See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

---

For questions or contributions, please open an issue or pull request.
