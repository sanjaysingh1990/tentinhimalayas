class Gallery {
    static render(images) {
        if (!images || images.length === 0) {
            return '<p>No images available</p>';
        }

        // Main image display
        let galleryHTML = `
            <div class="blog-gallery-main">
                <img src="${images[0]}" alt="Blog image" id="main-gallery-image">
            </div>
            <div class="blog-gallery-thumbnails">
        `;

        // Thumbnails
        images.forEach((image, index) => {
            const activeClass = index === 0 ? 'active' : '';
            galleryHTML += `
                <img src="${image}" alt="Blog image ${index + 1}" class="gallery-thumbnail ${activeClass}" data-src="${image}">
            `;
        });

        galleryHTML += `
            </div>
            <div class="blog-gallery-navigation">
                <button class="gallery-nav-btn prev-btn" id="prev-btn">‹</button>
                <button class="gallery-nav-btn next-btn" id="next-btn">›</button>
            </div>
        `;

        return galleryHTML;
    }

    static initGallery() {
        // Get all thumbnails
        const thumbnails = document.querySelectorAll('.gallery-thumbnail');
        const mainImage = document.getElementById('main-gallery-image');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        if (!mainImage || !prevBtn || !nextBtn) return;

        // Current image index
        let currentIndex = 0;

        // Change main image when thumbnail is clicked
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                // Update main image
                mainImage.src = thumbnail.dataset.src;

                // Update active class
                document.querySelector('.gallery-thumbnail.active').classList.remove('active');
                thumbnail.classList.add('active');

                // Update current index
                currentIndex = index;
            });
        });

        // Previous button
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
            const newSrc = thumbnails[currentIndex].dataset.src;
            mainImage.src = newSrc;

            // Update active class
            document.querySelector('.gallery-thumbnail.active').classList.remove('active');
            thumbnails[currentIndex].classList.add('active');
        });

        // Next button
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % thumbnails.length;
            const newSrc = thumbnails[currentIndex].dataset.src;
            mainImage.src = newSrc;

            // Update active class
            document.querySelector('.gallery-thumbnail.active').classList.remove('active');
            thumbnails[currentIndex].classList.add('active');
        });
    }
}

export default Gallery;