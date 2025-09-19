class Tag {
    static render(tagName) {
        return `<span class="blog-tag">${tagName}</span>`;
    }

    static renderList(tags) {
        if (!tags || tags.length === 0) return '';

        return tags.map(tag => this.render(tag)).join('');
    }
}

export default Tag;