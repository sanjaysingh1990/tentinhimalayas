class Blog {
    constructor(id, title, description, excerpt, tags, images, createdAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.excerpt = excerpt;
        this.tags = tags;
        this.images = images;
        this.createdAt = createdAt;
    }

    // Format date for display
    getFormattedDate() {
        return this.createdAt.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Get first image for blog list
    getFeaturedImage() {
        return this.images && this.images.length > 0 ? this.images[0] : 'images/slider-images/slider-1.webp';
    }
}

export default Blog;