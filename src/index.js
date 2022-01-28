import './styles.css';
import { openMenu } from './js/openMenu';
import { fetchUrl } from './js/fetchUrl';


// HTML REFERENCES
const burgerMenu    = document.querySelector('header i');
const popup         = document.querySelector('#popup');
const form          = document.querySelector('form');
const input         = document.querySelector('form input');
const p             = document.querySelector('#error-text');
const ul            = document.querySelector('#statistics ul');

// VARIABLES
let isMenuOpen = false;


// EVENTS

form.addEventListener('submit', (e) => {

    e.preventDefault();
    fetchUrl(input.value, input, p, ul);

});

burgerMenu.addEventListener('click', () => {

    isMenuOpen = !isMenuOpen;
    openMenu(isMenuOpen, popup);

});

document.addEventListener('click', ({target}) => {
    
    if (target !== burgerMenu && isMenuOpen && target.offsetParent != popup) {
        isMenuOpen = !isMenuOpen;
        openMenu(isMenuOpen, popup);
    }
    
})