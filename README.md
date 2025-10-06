# FerroLink Tools - Business Website

A professional business website for FerroLink Tools, a hand tools company specializing in Computer Numerical Control (CNC) tools, hammers, axes, and garden tools.

## About FerroLink Tools

FerroLink Tools is a premium hand tools manufacturer focused on:

-   **CNC Tools**: Precision Computer Numerical Control tools for machining and manufacturing
-   **Hammers**: Professional-grade striking tools for construction and metalworking
-   **Axes**: Heavy-duty cutting tools for forestry and construction applications
-   **Garden Tools**: Commercial-grade landscaping and gardening equipment

## Website Features

### 🏠 Homepage

-   Hero section with compelling value proposition
-   Product categories overview with detailed descriptions
-   Company values and differentiators
-   About section with company statistics
-   Contact form and information

### 🛠️ Products Page

-   Comprehensive product catalog organized by category
-   Detailed specifications for each product line
-   Professional product descriptions
-   Call-to-action for custom solutions

### 🏢 About Page

-   Company history and founding story
-   Leadership team profiles
-   Manufacturing capabilities and certifications
-   Core values and quality standards
-   Industry certifications (ISO 9001:2015, CE, ANSI, RoHS)

### 📞 Contact Page

-   Multi-channel contact information
-   Detailed contact form with product categories
-   Business hours and department contacts
-   Interactive facility location information
-   Emergency support options

### 🎨 Design Features

-   Modern, professional design using Tailwind CSS
-   Responsive layout for all devices
-   Consistent brand colors (orange and slate theme)
-   Accessible navigation and user experience
-   Professional typography with Geist font family

## Technology Stack

-   **Framework**: Next.js 15.5.4 with App Router
-   **Styling**: Tailwind CSS 4.0
-   **Language**: JavaScript/React
-   **Build Tool**: Turbopack for fast development
-   **Font**: Geist font family for modern typography

## Getting Started

1. **Install Dependencies**

    ```bash
    npm install
    ```

2. **Run Development Server**

    ```bash
    npm run dev
    ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

-   `npm run dev` - Start development server with Turbopack
-   `npm run build` - Build production application
-   `npm run start` - Start production server
-   `npm run lint` - Run ESLint for code quality

## Project Structure

```
ferrolink_v2/
├── app/                    # Next.js App Router pages
│   ├── page.js            # Homepage
│   ├── layout.js          # Root layout
│   ├── globals.css        # Global styles
│   ├── about/page.js      # About page
│   ├── products/page.js   # Products catalog
│   └── contact/page.js    # Contact information
├── components/            # Reusable components
│   ├── Header.js          # Navigation header
│   └── Footer.js          # Site footer
├── public/               # Static assets
└── README.md            # This file
```

## Key Components

### Header Component

-   Responsive navigation with active page highlighting
-   Mobile-friendly hamburger menu
-   Consistent branding across all pages

### Footer Component

-   Comprehensive site links organized by category
-   Social media integration
-   Company information and copyright

## Customization

The website is designed to be easily customizable:

1. **Brand Colors**: Modify Tailwind CSS classes throughout components
2. **Content**: Update text content in page components
3. **Products**: Add new product categories in the products page
4. **Contact Info**: Update contact details in the contact page
5. **Company Info**: Modify about page content and team information

## Deployment

This Next.js application can be deployed on:

-   Vercel (recommended)
-   Netlify
-   AWS
-   Any hosting provider that supports Node.js

For Vercel deployment:

```bash
npm run build
```

## SEO Optimizations

The website includes:

-   Semantic HTML structure
-   Proper meta tags and descriptions
-   Optimized page titles
-   Responsive images
-   Fast loading with Turbopack

## Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## License

© 2025 FerroLink Tools. All rights reserved.

---

Built with ❤️ for professional tool users worldwide.
