class Blog {
    constructor(id, title, description, excerpt, tags, images, createdAt, youtubeVideoId = '') {
        this.id = id;
        this.title = title;
        this.description = description;
        this.excerpt = excerpt;
        this.tags = tags;
        this.images = images;
        this.createdAt = createdAt;
        this.youtubeVideoId = youtubeVideoId;
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

    // Extract YouTube ID from URL or return ID directly
    getYouTubeId() {
        if (!this.youtubeVideoId) return '';
        
        // If it's already an ID (not a URL), return it as is
        if (!this.youtubeVideoId.includes('http')) {
            return this.youtubeVideoId;
        }
        
        // Extract ID from various YouTube URL formats
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = this.youtubeVideoId.match(regExp);
        return (match && match[2].length === 11) ? match[2] : '';
    }
}

export default Blog;