document.addEventListener("DOMContentLoaded", function() {
    fetch("footer.html") // Fetch the footer.html file
        .then(response => response.text()) // Convert response to text
        .then(data => {
            document.getElementById("common-footer").innerHTML = data; // Insert into div
        })
        .catch(error => console.error("Error loading footer:", error));
});