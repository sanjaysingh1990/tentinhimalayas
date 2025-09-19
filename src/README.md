# Blog Module Documentation

## Overview
This is a modern, responsive blog module for the Tent'in Himalayas website with clean architecture and Firebase integration.

## Features
- Blog list page with card-based grid layout
- Blog detail page with image gallery
- Firebase Firestore integration
- Responsive design for all devices
- Modern UI with hover animations and transitions
- Social sharing functionality
- Pagination for blog list
- Clean architecture with separation of concerns

## Architecture
```
/src
  /firebase          → Firebase configuration and setup
  /models            → Data models (Blog)
  /repositories      → Data access layer (BlogRepository)
  /ui
    /components      → Reusable UI components (Card, Tag, Gallery)
    /pages           → Page-specific logic (BlogList, BlogDetail)
  /utils             → Utility functions
  /test              → Test versions using dummy data
  main.js            → Main entry point
```

## Implementation Details

### Blog Model
The [Blog](file:///Users/sanjaysinghbisht/Desktop/workspace/cli-gemini/startup%20websites/camping_web_site/src/models/Blog.js#L1-L27) class represents a blog post with properties:
- `id`: Unique identifier
- `title`: Blog post title
- `description`: Full blog content (HTML)
- `excerpt`: Short description for preview
- `tags`: Array of tag strings
- `images`: Array of image URLs
- `createdAt`: Publication date

### Repository Pattern
The [BlogRepository](file:///Users/sanjaysinghbisht/Desktop/workspace/cli-gemini/startup%20websites/camping_web_site/src/repositories/blogRepository.js#L1-L59) class handles all data operations:
- `getAllBlogs()`: Fetches all blogs ordered by creation date
- `getBlogById(id)`: Fetches a specific blog by ID

### UI Components
- [Card](file:///Users/sanjaysinghbisht/Desktop/workspace/cli-gemini/startup%20websites/camping_web_site/src/ui/components/Card.js#L1-L21): Blog card for list view
- [Tag](file:///Users/sanjaysinghbisht/Desktop/workspace/cli-gemini/startup%20websites/camping_web_site/src/ui/components/Tag.js#L1-L13): Tag display component
- [Gallery](file:///Users/sanjaysinghbisht/Desktop/workspace/cli-gemini/startup%20websites/camping_web_site/src/ui/components/Gallery.js#L1-L85): Image gallery with navigation

### Pages
- [BlogList](file:///Users/sanjaysinghbisht/Desktop/workspace/cli-gemini/startup%20websites/camping_web_site/src/ui/pages/BlogList.js#L1-L105): Handles blog listing and pagination
- [BlogDetail](file:///Users/sanjaysinghbisht/Desktop/workspace/cli-gemini/startup%20websites/camping_web_site/src/ui/pages/BlogDetail.js#L1-L92): Handles blog detail view

## Firebase Integration
The blog module uses Firebase Firestore for data storage. The expected document structure:

```json
{
  "id": "unique-id",
  "title": "Blog Title",
  "description": "Full blog content here...",
  "excerpt": "Short description for preview",
  "tags": ["Travel", "Adventure", "Camping"],
  "images": ["image1.jpg", "image2.jpg", "image3.jpg"],
  "createdAt": "timestamp"
}
```

## Test Mode
When Firebase is not available, the module automatically falls back to test mode using dummy data. This ensures the blog functionality can be tested even without a Firebase connection.

## CSS Classes
Key CSS classes for styling:
- `.blog-grid`: Container for blog cards
- `.blog-card`: Individual blog card
- `.blog-tag`: Tag styling
- `.blog-gallery-container`: Gallery container
- `.gallery-thumbnail`: Gallery thumbnails

## JavaScript Modules
All JavaScript files use ES6 modules for clean imports and exports.

## Usage
1. Include `src/main.js` as a module script in your HTML
2. Ensure Firebase is properly configured
3. Create a Firestore collection named "blogs" with the expected structure