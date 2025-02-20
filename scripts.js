let btnNext = document.querySelector('.next');
let btnBack = document.querySelector('.back');

let list = document.querySelector('.Container .list');
let thumb = document.querySelector('.Container .thumb');

let currentIndex = 0; // Track the current index of the visible item
let listItems = document.querySelectorAll('.list .list-item');
let thumbItems = document.querySelectorAll('.thumb .thumb-item');

// Add click event to thumbnails
thumbItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all thumbnails
        thumbItems.forEach(i => i.classList.remove('active'));
        // Add active class to clicked thumbnail
        item.classList.add('active');
    });
});


btnNext.addEventListener('click', () => moveItemsOnClick('next'));
btnBack.addEventListener('click', () => moveItemsOnClick('back'));

function moveItemsOnClick(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % listItems.length; // Update index
    } else {
        currentIndex = (currentIndex - 1 + listItems.length) % listItems.length; // Update index
    }
    updateCarousel();
}

function updateCarousel() {
    // Update the displayed items in the carousel
    // Show all thumbnails
    thumbItems.forEach(item => {
        item.style.display = 'block';
    });
    
    // Update the main displayed item
    listItems.forEach((item, index) => {
        item.style.display = index === currentIndex ? 'block' : 'none';
    });
}


// Initialize the carousel with the first item
updateCarousel();
