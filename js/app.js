/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// variable to hold all the sections
const navbar = document.querySelector('#navbar__list');
const listOfSections = document.querySelectorAll('.landing__container');
const anchorList = document.querySelectorAll('a');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// loop through the sections and add each to the navbar
listOfSections.forEach( section => {
  // retrieve the section's id
  const sectionId = section.parentElement.getAttribute('id');
  // retrieve the sections data-nav
  const sectionName = section.parentElement.getAttribute('data-nav');
  // create a list item
  const listItem = document.createElement('li');
  // create an anchor element
  const listAnchor = document.createElement('a');
    // set the anchor's text to the data-nav
    listAnchor.text = sectionName;
    // set the anchor's href to the id
    listAnchor.setAttribute('href', '$("#sectionId")');
    // add the menu__link class
    listAnchor.classList.add('menu__link');
    // append the anchor to the list item
    navbar.append(listItem);
    // add event listener, prevent default action, scroll section into view
    listAnchor.addEventListener('click', event => {
      event.preventDefault();
      section.scrollIntoView({behavior: 'smooth'});
    });
    // append the anchor to the list
    listItem.append(listAnchor);
});

// Add class 'active' to section when near top of viewport
// event listener for scroll event
window.addEventListener('scroll', function() {
  listOfSections.forEach(section => {
    const paragraph = section.querySelector('p');
    const rect = paragraph.getBoundingClientRect();
    const isInView = rect.top >= 0
    && rect.left >= 0
    && rect.right <= window.innerWidth
    && rect.bottom <= window.innerHeight;
    if(isInView) {
      section.classList.add('active-section');
      console.log(section.classList);
    } else {
      section.classList.remove('active-section');
      console.log(section.classList);
    }
  })
})



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


