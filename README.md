# NeuralArc

NeuralArc is a cutting-edge technology company specializing in AI-powered solutions for business intelligence and data analytics. We offer two flagship products designed to transform how businesses interact with and leverage their data:

## Our Products

### Nod
Nod is our advanced business intelligence platform that helps organizations transform complex data into actionable insights. It provides:
- Interactive dashboards for real-time data visualization
- Advanced analytics and reporting capabilities
- Customizable data models and metrics
- Seamless integration with existing business systems
- Mobile-responsive design for on-the-go access
- Enterprise-grade security and compliance

### Orb
Orb is our AI-powered data processing and analysis engine that enables businesses to:
- Process and analyze large-scale data sets
- Generate predictive insights and trends
- Automate data workflows and transformations
- Integrate with various data sources
- Provide real-time data processing capabilities
- Scale efficiently with growing data needs

## Project Overview

This repository contains the web application that showcases and provides access to both Nod and Orb products. The application features:
- Modern, responsive case study presentations
- Interactive product demonstrations
- Secure user authentication
- Real-time analytics dashboards
- Contact and support systems
- Comprehensive documentation

## Tech Stack

### Core Technologies
- [Next.js 15](https://nextjs.org/) (App Router with Turbopack)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Supabase](https://supabase.com/) for backend services

### UI & Animation
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Embla Carousel](https://www.embla-carousel.com/) for touch-friendly sliders
- [Keen Slider](https://keen-slider.io/) for advanced carousel features
- [Lucide React](https://lucide.dev/) for icons
- [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) for interactive effects

### Development & Quality
- ESLint 9 for code quality
- TypeScript for type safety
- Zod for runtime type validation
- Nodemailer for email functionality
- Vercel Analytics for monitoring

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/neural-arc.git
   cd neural-arc
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file with:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
   SMTP_HOST=your_smtp_host
   SMTP_PORT=your_smtp_port
   SMTP_USER=your_smtp_user
   SMTP_PASS=your_smtp_password
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
neural-arc/
├── app/                    # Next.js app directory
│   ├── orb/               # Orb product pages
│   └── nod/               # Nod product pages
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── orb/              # Orb-specific components
│   └── case-study/       # Case study components
│       ├── orb/          # Orb case study components
│       └── nod/          # Nod case study components
├── lib/                  # Utility functions and shared logic
├── public/              # Static assets
│   └── images/         # Product and case study images
├── styles/             # Global styles and Tailwind config
└── types/              # TypeScript type definitions
```

## Development Guidelines

### Component Development
- Use TypeScript for all components
- Follow atomic design principles
- Implement proper accessibility (ARIA labels, keyboard navigation)
- Write reusable, composable components
- Use Tailwind CSS for styling
- Include proper TypeScript types and Zod validation

### State Management
- Use React hooks for local state
- Implement proper data fetching patterns
- Handle loading and error states
- Use Supabase for backend state management

### Performance
- Optimize images using next/image
- Implement proper code splitting
- Use proper caching strategies
- Monitor performance with Vercel Analytics

### Testing
- Test components across different viewport sizes
- Verify accessibility compliance
- Test form validations and submissions
- Ensure proper error handling

## Deployment

The application is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy!

For other platforms, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Please ensure your code:
- Passes all linting checks
- Includes proper TypeScript types
- Follows the project's coding standards
- Includes necessary documentation

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

For questions, issues, or contributions, please:
1. Check existing issues
2. Open a new issue with a detailed description
3. Submit a pull request with clear documentation

## Support

For support, please:
- Open an issue in the GitHub repository
- Contact the maintainers
- Check the documentation for common solutions
