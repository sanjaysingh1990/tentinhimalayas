// Test version of BlogList that uses dummy data
import BlogRepositoryTest from './blogRepositoryTest.js';
import Card from '../ui/components/Card.js';

class BlogListTest {
    constructor(containerId) {
        console.log('BlogListTest constructor called with containerId:', containerId);
        this.container = document.getElementById(containerId);
        this.blogs = [];
        this.currentPage = 1;
        this.postsPerPage = 3;
        console.log('BlogListTest instance created');
    }

    async init() {
        console.log('BlogListTest.init() called');
        try {
            // Show loading state
            this.showLoading();

            // Fetch blogs from test repository
            console.log('Fetching blogs from test repository...');
            this.blogs = await BlogRepositoryTest.getAllBlogs();
            console.log('Test blogs fetched successfully:', this.blogs);

            // Display blogs
            this.displayBlogs();

            // Create pagination
            this.createPagination();
        } catch (error) {
            console.error('Error in BlogListTest.init():', error);
            this.showError('Failed to load blog posts. Please try again later.');
            console.error('Error loading blogs:', error);
        }
    }

    showLoading() {
        console.log('BlogListTest: Showing loading state');
        this.container.innerHTML = '<div class="text-center"><p>Loading blog posts...</p></div>';
    }

    showError(message) {
        console.log('BlogListTest: Showing error message:', message);
        this.container.innerHTML = `<div class="text-center"><p class="error-message">${message}</p></div>`;
    }

    displayBlogs() {
        console.log('BlogListTest: Displaying blogs, current page:', this.currentPage);
        const startIndex = (this.currentPage - 1) * this.postsPerPage;
        const endIndex = startIndex + this.postsPerPage;
        const blogsToShow = this.blogs.slice(startIndex, endIndex);

        if (blogsToShow.length === 0) {
            console.log('BlogListTest: No blogs to display');
            this.container.innerHTML = '<p class="text-center">No blog posts available at the moment. Please check back later!</p>';
            return;
        }

        let html = '<div class="blog-grid">';
        blogsToShow.forEach(blog => {
            html += Card.render(blog);
        });
        html += '</div>';

        this.container.innerHTML = html;
        console.log('BlogListTest: Blogs displayed successfully');
    }

    createPagination() {
        console.log('BlogListTest: Creating pagination');
        const totalPages = Math.ceil(this.blogs.length / this.postsPerPage);
        const paginationContainer = document.getElementById('pagination-controls');

        if (totalPages <= 1) {
            console.log('BlogListTest: No pagination needed');
            paginationContainer.innerHTML = '';
            return;
        }

        let html = '';

        // Previous button
        if (this.currentPage > 1) {
            html += `<li class="page-item"><a class="page-link" href="#" data-page="${this.currentPage - 1}">Previous</a></li>`;
        }

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const activeClass = (i === this.currentPage) ? 'active' : '';
            html += `<li class="page-item ${activeClass}"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
        }

        // Next button
        if (this.currentPage < totalPages) {
            html += `<li class="page-item"><a class="page-link" href="#" data-page="${this.currentPage + 1}">Next</a></li>`;
        }

        paginationContainer.innerHTML = html;

        // Add event listeners to pagination links
        paginationContainer.querySelectorAll('.page-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = parseInt(link.getAttribute('data-page'));
                console.log('BlogListTest: Pagination clicked, page:', page);
                this.currentPage = page;
                this.displayBlogs();
                this.createPagination();

                // Scroll to top of blog section
                document.querySelector('.section-first').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        console.log('BlogListTest: Pagination created successfully');
    }
}

export default BlogListTest;