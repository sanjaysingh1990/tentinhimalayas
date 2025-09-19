import BlogRepository from '../../repositories/blogRepository.js';
import Card from '../components/Card.js';

class BlogList {
    constructor(containerId) {
        console.log('BlogList constructor called with containerId:', containerId);
        this.container = document.getElementById(containerId);
        this.blogs = [];
        this.currentPage = 1;
        this.postsPerPage = 3;
        console.log('BlogList instance created');
    }

    async init() {
        console.log('BlogList.init() called');
        try {
            // Show loading state
            this.showLoading();

            // Fetch blogs from repository
            console.log('Fetching blogs from repository...');
            this.blogs = await BlogRepository.getAllBlogs();
            console.log('Blogs fetched successfully:', this.blogs);

            // Display blogs
            this.displayBlogs();

            // Create pagination
            this.createPagination();
        } catch (error) {
            console.error('Error in BlogList.init():', error);
            this.showError('Failed to load blog posts. Please try again later.');
            console.error('Error loading blogs:', error);
        }
    }

    showLoading() {
        console.log('Showing loading state');
        this.container.innerHTML = '<div class="text-center"><p>Loading blog posts...</p></div>';
    }

    showError(message) {
        console.log('Showing error message:', message);
        this.container.innerHTML = `<div class="text-center"><p class="error-message">${message}</p></div>`;
    }

    displayBlogs() {
        console.log('Displaying blogs, current page:', this.currentPage);
        const startIndex = (this.currentPage - 1) * this.postsPerPage;
        const endIndex = startIndex + this.postsPerPage;
        const blogsToShow = this.blogs.slice(startIndex, endIndex);

        if (blogsToShow.length === 0) {
            console.log('No blogs to display');
            this.container.innerHTML = '<p class="text-center">No blog posts available at the moment. Please check back later!</p>';
            return;
        }

        let html = '<div class="blog-grid">';
        blogsToShow.forEach(blog => {
            html += Card.render(blog);
        });
        html += '</div>';

        this.container.innerHTML = html;
        console.log('Blogs displayed successfully');
    }

    createPagination() {
        console.log('Creating pagination');
        const totalPages = Math.ceil(this.blogs.length / this.postsPerPage);
        const paginationContainer = document.getElementById('pagination-controls');

        if (totalPages <= 1) {
            console.log('No pagination needed');
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
                console.log('Pagination clicked, page:', page);
                this.currentPage = page;
                this.displayBlogs();
                this.createPagination();

                // Scroll to top of blog section
                document.querySelector('.section-first').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        console.log('Pagination created successfully');
    }
}

export default BlogList;