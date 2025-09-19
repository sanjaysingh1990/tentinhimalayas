# Firestore Setup Guide for Blog Module

## Overview
This guide explains how to set up Firebase Firestore for the blog module. The blog module is designed to work with Firestore as its data source.

## Prerequisites
1. Firebase account (free tier available)
2. Firebase project created
3. Firestore database enabled

## Setting up Firestore

### 1. Create a Firestore Database
1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project or create a new one
3. In the left sidebar, click "Firestore Database"
4. Click "Create database"
5. Choose "Start in test mode" (you can change rules later)
6. Select a location closest to your users
7. Click "Enable"

### 2. Create the Blogs Collection
1. In the Firestore Database section, click "Start collection"
2. Enter "blogs" as the collection ID
3. Click "Next"

### 3. Add Blog Documents
For each blog post, add a document with the following structure:

```json
{
  "title": "Your Blog Title",
  "description": "Full HTML content of your blog post",
  "excerpt": "Short description for the blog list page",
  "tags": ["tag1", "tag2", "tag3"],
  "images": ["image1.jpg", "image2.jpg", "image3.jpg"],
  "createdAt": "timestamp"
}
```

Example document:
```json
{
  "title": "Exploring the Hidden Valleys of Kumaon",
  "description": "<p>Discover the breathtaking beauty of Kumaon's hidden valleys...</p>",
  "excerpt": "Discover the breathtaking beauty of Kumaon's hidden valleys...",
  "tags": ["Travel", "Adventure", "Culture"],
  "images": [
    "images/slider-images/slider-1.webp",
    "images/slider-images/slider-2.webp",
    "images/slider-images/slider-3.webp"
  ],
  "createdAt": "2023-05-15T10:30:00Z"
}
```

### 4. Configure Security Rules (Optional but Recommended)
In the Firebase Console, go to Firestore Database → Rules and update them for production:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /blogs/{blogId} {
      allow read: if true;  // Public read access
      allow write: if request.auth != null;  // Authenticated users can write
    }
  }
}
```

## Testing the Connection

### 1. Verify Firebase Configuration
The blog module uses the following Firebase configuration:
```javascript
const firebaseConfig = {
    apiKey: "AIzaSyCr_tQKCPR0i3IVkxMx40H8HmHd93GvrYc",
    authDomain: "inapp-96885741.firebaseapp.com",
    databaseURL: "https://inapp-96885741.firebaseio.com",
    projectId: "inapp-96885741",
    storageBucket: "inapp-96885741.appspot.com",
    messagingSenderId: "1031749484359",
    appId: "1:1031749484359:web:4416e21fd80f2a7d97d662"
};
```

### 2. Test Data Loading
1. Open `blog.html` in your browser
2. The page should load blog posts from Firestore
3. If no data is available, it will show a message indicating no posts are available

### 3. Using Test Data
If you prefer to use test data instead of connecting to Firestore:
1. The module automatically falls back to test data when Firestore is not available
2. Test data is defined in `src/test/blogTestData.js`
3. You can modify this file to customize the test content

## Adding New Blog Posts

### Manual Method
1. In the Firebase Console, go to Firestore Database
2. Click on the "blogs" collection
3. Click "Add document"
4. Enter a document ID (or let Firebase auto-generate one)
5. Add the required fields as shown in the structure above
6. Click "Save"

### Programmatic Method
You can also add blog posts programmatically:

```javascript
import { db } from './src/firebase/config.js';

// Add a new blog post
const newBlog = {
    title: "Your Blog Title",
    description: "Full HTML content",
    excerpt: "Short description",
    tags: ["tag1", "tag2"],
    images: ["image1.jpg", "image2.jpg"],
    createdAt: new Date()
};

db.collection("blogs").add(newBlog)
    .then((docRef) => {
        console.log("Blog post added with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding blog post: ", error);
    });
```

## Troubleshooting

### Common Issues

1. **No blog posts displaying**
   - Check if the "blogs" collection exists in Firestore
   - Verify the document structure matches the expected format
   - Ensure security rules allow read access

2. **Firebase not initializing**
   - Check the Firebase configuration in `src/firebase/config.js`
   - Ensure you're using the correct project credentials

3. **Images not loading**
   - Verify image paths are correct and accessible
   - Check browser console for 404 errors

### Console Debugging
Enable verbose logging to see what's happening:
```javascript
// Add this to your JavaScript
firebase.firestore().enablePersistence()
  .catch((err) => {
    if (err.code == 'failed-precondition') {
      console.log('Multiple tabs open, persistence can only be enabled in one tab at a a time.');
    } else if (err.code == 'unimplemented') {
      console.log('The current browser does not support all of the features required to enable persistence');
    }
  });
```

## Best Practices

1. **Image Optimization**
   - Use WebP format for better compression
   - Optimize images for web (72 DPI, appropriate dimensions)
   - Use consistent naming conventions

2. **Content Management**
   - Keep excerpt length around 150-200 characters
   - Use semantic HTML in descriptions
   - Limit tags to 3-5 relevant keywords

3. **Performance**
   - Enable Firestore persistence for offline access
   - Use pagination to limit initial data load
   - Implement proper indexing for frequently queried fields

4. **Security**
   - Regularly review and update security rules
   - Use Firebase Authentication for admin features
   - Sanitize user-generated content