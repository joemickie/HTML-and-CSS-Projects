const images = document.querySelectorAll(".gallery-img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");

// Add click event to each image
images.forEach(function(image) {
    image.addEventListener("click", function() {
        lightbox.style.display = "block";
        lightboxImg.src = this.src;
    });
});

closeBtn.addEventListener("click", function() {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", function(e) {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});