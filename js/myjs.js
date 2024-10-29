document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxDescription = document.getElementById("lightbox-description");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let currentIndex = 0;
    let subGalleryItems = [];

    function showLightbox(index) {
        const item = subGalleryItems[index];
        const imgSrc = item.src;
        const description = item.alt;

        lightboxImage.src = imgSrc;
        lightboxDescription.innerHTML = description;
        lightbox.style.display = "block";
        currentIndex = index;
    }

    function closeLightbox() {
        lightbox.style.display = "none";
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % subGalleryItems.length;
        showLightbox(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + subGalleryItems.length) % subGalleryItems.length;
        showLightbox(currentIndex);
    }

    galleryItems.forEach((item) => {
        item.addEventListener("click", () => {
            subGalleryItems = Array.from(item.querySelectorAll(".sub-gallery img"));
            if (subGalleryItems.length > 0) {
                showLightbox(0);
            }
        });
    });

    closeBtn.addEventListener("click", closeLightbox);
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);

    document.addEventListener("keydown", (e) => {
        if (lightbox.style.display === "block") {
            if (e.key === "ArrowRight") {
                showNext();
            } else if (e.key === "ArrowLeft") {
                showPrev();
            } else if (e.key === "Escape") {
                closeLightbox();
            }
        }
    });
});

























document.getElementById('submit').addEventListener('click', function() {
    var form = document.getElementById('myForm');
    var formData = new FormData(form);

    fetch('save_message.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        form.reset(); // فرم را ریست کنید
    })
    .catch(error => {
        console.error('Error:', error);
    });
});