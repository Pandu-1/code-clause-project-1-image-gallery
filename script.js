document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filterGallery(category);
        });
    });

    function filterGallery(category) {
        galleryItems.forEach(item => {
            if (category === 'all') {
                item.style.display = 'block';
            } else {
                if (item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    }

    // Initialize the gallery to show all items
    filterGallery('all');
});
