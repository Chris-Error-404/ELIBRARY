//MOBILE OVERLAY MENU SCRIPT
// Declare variables
const menubtn = document.getElementById('menu-btn');
const closebtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

// Open overlay when menu button is clicked
menubtn.addEventListener('click', () => {
    overlay.classList.add('open');
    document.body.classList.add('overlay-open'); // Disable scrolling
});

// Close overlay when close button is clicked
closebtn.addEventListener('click', () => {
    overlay.classList.remove('open');
    document.body.classList.remove('overlay-open'); // Enable scrolling
});

// Close overlay when clicking outside of it
document.addEventListener('click', (e) => {
    if (overlay.classList.contains('open') && !overlay.contains(e.target) && e.target !== menubtn) {
        overlay.classList.remove('open');
        document.body.classList.remove('overlay-open'); // Enable scrolling
    }
});
