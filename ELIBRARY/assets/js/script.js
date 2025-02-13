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


//LI AND A TAG ACTIVATION SCRIPT
// Select all the <li> elements
const listItems = document.querySelectorAll('li');
// Loop through each <li> and add a click event listener
listItems.forEach(item => {
    item.addEventListener('click', () => {
        // Find the <a> inside the clicked <li>
        const link = item.querySelector('a');
        
        // If the <a> exists, simulate a click on it
        if (link) {
            link.click();
        }
    });
});