let btnNext = document.querySelector('.next');
let btnBack = document.querySelector('.back');

let list = document.querySelector('.Container .list');
let thumb = document.querySelector('.Container .thumb');

let currentIndex = 0; // Track the current index of the visible item
let listItems = document.querySelectorAll('.list .list-item');
let thumbItems = document.querySelectorAll('.thumb .thumb-item');

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
    // Remove the clearing of current items
    // list.innerHTML = ''; // Clear current items
    // thumb.innerHTML = ''; // Clear current thumbnails

    // Update the displayed item in the list
    listItems.forEach((item, index) => {
        item.style.display = index === currentIndex ? 'block' : 'none';
    });
    
    // Update the displayed thumbnail in the thumb
    thumbItems.forEach((item, index) => {
        item.style.display = index === currentIndex ? 'block' : 'none';
    });

}

// Initialize the carousel with the first item
updateCarousel();
