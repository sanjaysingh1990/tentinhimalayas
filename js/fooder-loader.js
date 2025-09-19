document.addEventListener("DOMContentLoaded", function() {
    fetch("footer.html") // Fetch the footer.html file
        .then(response => response.text()) // Convert response to text
        .then(data => {
            document.getElementById("common-footer").innerHTML = data; // Insert into div

            // Initialize footer functionality after content is loaded
            initializeFooter();
        })
        .catch(error => console.error("Error loading footer:", error));
});

function initializeFooter() {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Set the year inside the span with class "copyright-year" if it exists
    const copyrightYearElement = document.querySelector(".copyright-year");
    if (copyrightYearElement) {
        copyrightYearElement.textContent = currentYear;
    }

    // Fade in elements when they come into view
    function fadeInElements() {
        document.querySelectorAll('.fade-in-element').forEach(function(element) {
            var elementTop = element.getBoundingClientRect().top;
            var elementBottom = elementTop + element.offsetHeight;
            var viewportTop = window.pageYOffset;
            var viewportBottom = viewportTop + window.innerHeight;

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                element.classList.add('visible');
            }
        });
    }

    // Trigger fade in on scroll and initial load
    window.addEventListener('scroll', fadeInElements);

    // Trigger initial fade in
    setTimeout(fadeInElements, 100);
}