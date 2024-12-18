// Section 1 scroll functionality
const scrollLeft = document.getElementById('scroll-left');
const scrollRight = document.getElementById('scroll-right');
const cardsContainer = document.getElementById('cards-container');

scrollLeft.addEventListener("click", function() {
    smoothScroll(cardsContainer, -300); // Scroll by 300px to the left
});

scrollRight.addEventListener("click", function() {
    smoothScroll(cardsContainer, 300);  // Scroll by 300px to the right
});

// Function for smooth scrolling
function smoothScroll(cardsContainer, distance) {
    cardsContainer.scrollBy({
        left: distance,  // Scroll by the specified distance (left or right)
        behavior: "smooth"  // Smooth scroll effect
    });
}

// Section 2 scroll functionality
const scrollLeft2 = document.getElementById('scroll-left-2');
const scrollRight2 = document.getElementById('scroll-right-2');
const cardsContainer2 = document.getElementById('cards-container-2');

scrollLeft2.addEventListener("click", function() {
    smoothScroll(cardsContainer2, -300); // Scroll by 300px to the left
});

scrollRight2.addEventListener("click", function() {
    smoothScroll(cardsContainer2, 300);  // Scroll by 300px to the right
});