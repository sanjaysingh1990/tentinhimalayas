// Main entry point for the blog application
import BlogList from './ui/pages/BlogList.js';
import BlogDetail from './ui/pages/BlogDetail.js';

// Check if Firebase is available
let useTestData = false;
try {
    if (typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length) {
        console.warn('Firebase not initialized, using test data');
        useTestData = true;
    } else {
        console.log('Firebase is available, using production data');
    }
} catch (e) {
    console.warn('Firebase not available, using test data');
    console.error('Firebase error:', e);
    useTestData = true;
}

console.log('useTestData flag:', useTestData);

// Dynamic import based on Firebase availability
async function initializeApp() {
    console.log('Initializing app with useTestData:', useTestData);

    if (useTestData) {
        console.log('Loading test modules...');
        // Use test versions with dummy data
        const BlogListTest = (await
            import ('./test/BlogListTest.js')).default;
        const BlogDetailTest = (await
            import ('./test/BlogDetailTest.js')).default;

        // Check if we're on the blog list page
        if (document.getElementById('blog-posts-container')) {
            console.log('Initializing BlogListTest');
            const blogList = new BlogListTest('blog-posts-container');
            blogList.init();
        }

        // Check if we're on the blog detail page
        if (document.getElementById('blog-detail-container')) {
            console.log('Initializing BlogDetailTest');
            const blogDetail = new BlogDetailTest('blog-detail-container');
            blogDetail.init();
        }
    } else {
        console.log('Loading production modules...');
        // Use production versions with Firebase
        // Check if we're on the blog list page
        if (document.getElementById('blog-posts-container')) {
            console.log('Initializing BlogList');
            const blogList = new BlogList('blog-posts-container');
            blogList.init();
        }

        // Check if we're on the blog detail page
        if (document.getElementById('blog-detail-container')) {
            console.log('Initializing BlogDetail');
            const blogDetail = new BlogDetail('blog-detail-container');
            blogDetail.init();
        }
    }
}

// Initialize the appropriate page based on the current URL
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded, initializing app');
    initializeApp();
});