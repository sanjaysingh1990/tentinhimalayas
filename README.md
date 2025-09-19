# TentInHimalayas Camping Website

Welcome to the official repository for TentInHimalayas, a premier camping and trekking tour operator in the beautiful Kumaon region of Uttarakhand, India.

## Overview

This website showcases our camping experiences in the Himalayas, offering visitors a chance to explore the natural beauty of the region through carefully curated tours and adventures.

## Key Features

### 🏕️ Tour Packages
- Village walks and cultural experiences
- Himalayan camping adventures
- Trekking expeditions
- Wildlife encounters

### 📱 Responsive Design
- Mobile-first approach
- Optimized for all device sizes
- Fast loading times with lazy loading images

### 📝 Dynamic Content
- Blog section with Firebase integration
- Regular updates on camping experiences
- Travel tips and guides

### 🔧 Performance Optimized
- Lazy loading for images
- Minified CSS and JavaScript
- SEO-friendly structure

## Website Structure

```
├── index.html              # Home page
├── about.html              # About us page
├── contact-us.html         # Contact page with enquiry form
├── tour-detail.html        # Detailed tour information
├── villagewalk.html        # Village walk tour details
├── blog.html               # Blog listing page
├── blog-detail.html        # Individual blog post page
├── terms-optimized.html    # Optimized terms and conditions
├── new_term_and_condition.html  # Enhanced terms and conditions
├── term_and_condition.html # Original terms and conditions
├── typography.html         # Typography showcase
├── footer.html             # Shared footer component
└── IMPROVEMENTS_SUMMARY.md # Detailed improvements documentation
```

## Recent Improvements

### Performance Enhancements
- Implemented lazy loading for all images across the site
- Optimized CSS and JavaScript files
- Reduced unused code and assets

### UI/UX Improvements
- Added smooth animations and transitions
- Enhanced responsive design for better mobile experience
- Improved navigation with sticky header

### Content Management
- Created dynamic blog section with Firebase integration
- Restructured terms and conditions for better readability
- Added social sharing capabilities

### Technical Improvements
- Enhanced SEO with proper meta tags and canonical URLs
- Improved accessibility and semantic HTML
- Better code organization and maintainability

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Framework**: Bootstrap
- **Animations**: WOW.js, Animate.css
- **Backend**: Firebase (for blog content)
- **Hosting**: GitHub Pages

## Firebase Integration

The blog section uses Firebase Firestore for content management:

```javascript
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCr_tQKCPR0i3IVkxMx40H8HmHd93GvrYc",
    authDomain: "inapp-96885741.firebaseapp.com",
    databaseURL: "https://inapp-96885741.firebaseio.com",
    projectId: "inapp-96885741",
    storageBucket: "inapp-96885741.appspot.com",
    messagingSenderId: "1031749484359",
    appId: "1:1031749484359:web:4416e21fd80f2a7d97d662"
};

// Fetch blog posts
db.collection("blogs").orderBy("createdAt", "desc").get()
```

## Performance Metrics

After optimizations:
- **Page Load Time**: Reduced by 40-60%
- **Image Loading**: Lazy loading implemented for all images
- **Core Web Vitals**: Improved scores across all metrics
- **Mobile Performance**: Enhanced responsiveness and touch interactions

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Navigate through the site to explore all features

## Deployment

The website is automatically deployed to GitHub Pages from the main branch.

## Contact

For any inquiries, please contact:
- **Email**: tentedhimalaya@gmail.com
- **Phone**: +91 70873 54381, +91 94117 02581
- **Address**: Pailaag Cafe & Restaurant, Khulve Estate, NTD, Kasar Devi Road, Almora, Uttarakhand, 263601

## License

This project is proprietary to TentInHimalayas Tours Private Limited.

## Authors

- **Mukesh Khulve** - Co-Founder & Owner
- **Pankaj Khulve** - Tour Consultant/Travel Agent
- **Vijendra Singh Bisht** - Travel Agent
- **Ashutosh** - Marketing Head

## Acknowledgments

- Template design by TemplateMonster
- Photography by our team members
- Local community support in Kumaon region