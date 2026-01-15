# AI Does My Work - Marketing Website

A modern, minimal marketing website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Features

- **Dark theme** with high contrast design
- **Execution-focused** brand tone
- **Mobile-first** responsive design
- **7 pages**: Home, Workflows, Pricing, Book, FAQ, Privacy, Terms
- **Reusable components**: Navbar, Footer, Section, CTAButton, WorkflowCard, PricingCard, FAQAccordion
- **Ready for deployment** on Vercel

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
ai-does-my-work/
├── app/
│   ├── layout.tsx          # Root layout with Navbar/Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── workflows/
│   │   └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   ├── book/
│   │   └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   └── terms/
│       └── page.tsx
├── components/
│   ├── Navbar.tsx          # Navigation with CTA
│   ├── Footer.tsx          # Footer links
│   ├── Section.tsx         # Page section container
│   ├── CTAButton.tsx       # Call-to-action button
│   ├── WorkflowCard.tsx    # Workflow example card
│   ├── PricingCard.tsx     # Pricing tier card
│   └── FAQAccordion.tsx    # FAQ accordion
└── ...config files
```

## Customization

### Update Content

All page content is in the respective `page.tsx` files. Edit these to update copy, add workflows, modify pricing, etc.

### Integrate Booking Forms

In `app/book/page.tsx`, replace the placeholder divs with:
- Typeform embed for intake form
- Calendly embed for scheduling

### Color Theme

Colors are defined in `tailwind.config.js`:
- `background`: #0a0a0a (dark)
- `foreground`: #fafafa (light)
- `muted`: #737373 (gray)
- `border`: #262626 (subtle)

## Deployment

### Deploy to Vercel

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Design Principles

- **No hype, no buzzwords** - execution-focused language
- **Minimal animations** - clean, fast page loads
- **Strong typography** - clear hierarchy and readability
- **Outcome-driven** - emphasize results over features
- **Professional tone** - calm, confident, trustworthy

## License

Private - All rights reserved
