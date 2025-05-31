# iOS Developer Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Contentful CMS to showcase iOS development projects and skills.

## Features

- Responsive design optimized for all devices
- Modern UI with smooth animations using Framer Motion
- Dynamic content management with Contentful CMS
- Sections for About, Skills, and Projects
- Integration with GitHub, App Store, and YouTube links
- SEO optimized

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Contentful CMS
- React Icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
yarn install
```

3. Create a `.env.local` file in the root directory with your Contentful credentials:
```
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

4. Run the development server:
```bash
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contentful Setup

1. Create a Contentful account at [https://www.contentful.com](https://www.contentful.com)
2. Create the following content models:

### Profile
- name (Short text)
- title (Short text)
- bio (Long text)
- image (Media)
- githubUrl (Short text)
- linkedinUrl (Short text)
- leetcodeUrl (Short text)

### Project
- title (Short text)
- description (Long text)
- image (Media)
- technologies (Short text, List)
- githubUrl (Short text)
- appStoreUrl (Short text)
- youtubeUrl (Short text)

### Skill Category
- title (Short text)
- skills (Short text, List)

## Customization

1. Update the profile information in Contentful
2. Add your projects with screenshots and links
3. Customize the color scheme in `tailwind.config.js`
4. Update social media links in the Header and Footer components

## Deployment

The site can be deployed to various platforms. Here are some popular options:

- Vercel (Recommended)
- Netlify
- GitHub Pages

## License

MIT License
