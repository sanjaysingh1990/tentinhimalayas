import BlogRepository from '../../repositories/blogRepository.js';
import Gallery from '../components/Gallery.js';
import Tag from '../components/Tag.js';

class BlogDetail {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    async init() {
        try {
            // Show loading state
            this.showLoading();

            // Get blog ID from URL
            const urlParams = new URLSearchParams(window.location.search);
            const blogId = urlParams.get('id');

            if (!blogId) {
                this.showError('Blog post not found.');
                return;
            }

            // Fetch blog from repository
            const blog = await BlogRepository.getBlogById(blogId);

            // Display blog
            this.displayBlog(blog);
        } catch (error) {
            if (error.message === "Blog not found") {
                this.showError('Blog post not found.');
            } else {
                this.showError('Failed to load blog post. Please try again later.');
            }
            console.error('Error loading blog:', error);
        }
    }

    showLoading() {
        this.container.innerHTML = '<div class="text-center"><p>Loading blog post...</p></div>';
    }

    showError(message) {
        this.container.innerHTML = `<div class="text-center"><p class="error-message">${message}</p></div>`;
    }

    displayBlog(blog) {
        const html = `
            <div class="blog-detail-header">
                <h1 class="blog-detail-title">${blog.title}</h1>
                <div class="blog-detail-meta">
                    Published on ${blog.getFormattedDate()}
                </div>
            </div>
            
            <div class="blog-gallery-container">
                ${Gallery.render(blog.images)}
            </div>
            
            <div class="blog-detail-content">
                ${blog.description}
            </div>
            
            <div class="blog-detail-tags">
                <h4>Tags:</h4>
                ${Tag.renderList(blog.tags)}
            </div>
            
            <div class="social-share">
                <h4>Share this post:</h4>
                <div class="social-icons">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank" class="social-icon facebook">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}" target="_blank" class="social-icon twitter">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a href="https://wa.me/?text=${encodeURIComponent(window.location.href)}" target="_blank" class="social-icon whatsapp">
                        <i class="fa fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        `;

        this.container.innerHTML = html;

        // Initialize gallery functionality
        Gallery.initGallery();
    }
}

export default BlogDetail;