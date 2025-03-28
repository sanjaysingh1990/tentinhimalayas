// footer-loader.js
function includeFooter() {
    const footerContainer = document.createElement('div');
    footerContainer.id = 'main-footer-container';

    footerContainer.innerHTML = `
<object type="text/html" data="footer.html" style="width: 100%; height:440px"></object>
`;
    document.body.appendChild(footerContainer);
}

// Load footer when DOM is ready
document.addEventListener('DOMContentLoaded', includeFooter);