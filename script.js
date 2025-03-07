document.addEventListener('DOMContentLoaded', function() {
    let images = document.querySelectorAll('#carousel img');
    let currentIndex = 0;

    function updateCarousel() {
        images.forEach((img, index) => {
            img.style.display = index === currentIndex ? 'block' : 'none';
        });
    }

    document.getElementById('next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    document.getElementById('prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    updateCarousel(); // Initialize display
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.topology-img').forEach(img => {
        img.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });

        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.cursor = 'pointer';
        });

        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

