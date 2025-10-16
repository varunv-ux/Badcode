# Product Ads Feed

A mobile-first React application that displays a social media-style feed with organic content cards and interspersed ad placeholders.

## Features

- 📱 Mobile-optimized design (320px - 480px viewport)
- 🎨 Clean, modern UI with smooth interactions
- 📊 Organic content cards with user info, images, and engagement metrics
- 📢 Ad placeholders inserted after every 4 organic posts
- ⚡ Built with React 18 and Vite for fast development

## Project Structure

```
src/
├── components/
│   ├── Feed.jsx           # Main feed container
│   ├── Feed.css
│   ├── OrganicCard.jsx    # Individual organic content card
│   ├── OrganicCard.css
│   ├── AdPlaceholder.jsx  # Ad placeholder component
│   └── AdPlaceholder.css
├── data/
│   └── mockData.js        # Mock organic content data
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Features Overview

### Organic Cards
Each organic card displays:
- User avatar and name
- Timestamp
- Content text
- Image (if available)
- Engagement buttons (likes, comments, shares)

### Ad Placeholders
- Inserted automatically after every 4 organic posts
- Clearly labeled as "Sponsored"
- Placeholder design ready for actual ad content

## Next Steps

1. Replace ad placeholders with actual ad content
2. Integrate with real API endpoints
3. Add infinite scroll functionality
4. Implement user interactions (like, comment, share)

## Tech Stack

- React 18
- Vite
- CSS3 (Mobile-first responsive design)
