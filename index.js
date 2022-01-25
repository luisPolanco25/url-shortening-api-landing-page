
// HTML REFERENCES
const burgerMenu = document.querySelector('header i');
const popup = document.querySelector('#popup');


// VARIABLES
let isMenuOpen = false;

// console.log(isMenuOpen)

// USER INTERACTIONS

const openMenu = (opened) => {
    if (opened) {
        popup.style.display = 'flex'
    } else {
        popup.style.display = 'none'
    }
}


// EVENTS

burgerMenu.addEventListener('click', () => {

    isMenuOpen = !isMenuOpen;
    openMenu(isMenuOpen);

});

document.addEventListener('click', ({target}) => {
    
    if (target !== burgerMenu && isMenuOpen && target.offsetParent != popup) {
        isMenuOpen = !isMenuOpen;
        openMenu(isMenuOpen);
    }
    
})