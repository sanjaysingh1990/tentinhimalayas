class Card {
    static render(blog) {
            return `
            <div class="blog-card scale-element">
                <div class="blog-card-image">
                    <img src="${blog.getFeaturedImage()}" alt="${blog.title}" loading="lazy">
                </div>
                <div class="blog-card-content">
                    <h3 class="blog-card-title">${blog.title}</h3>
                    <p class="blog-card-excerpt">${blog.excerpt}</p>
                    <div class="blog-card-tags">
                        ${blog.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                    </div>
                    <a href="blog-detail.html?id=${blog.id}" class="blog-card-link">Read More →</a>
                </div>
            </div>
        `;
    }
}

export default Card;