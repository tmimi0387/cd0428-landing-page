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
const listOfSections = document.querySelectorAll('section');

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
listOfSections.forEach(section => {
  const sectId = section.getAttribute('id');
  const sectName = section.getAttribute('data-nav')
  const liItem = document.createElement('li');
  const anchor = document.createElement('a');
  // set anchor text and href
  anchor.text = sectName;
  anchor.setAttribute('href', `#${sectId}`);
  anchor.classList.add('menu__link');
  navbar.append(liItem);
  //prevent default action when clicking on anchor
  anchor.addEventListener('click', event => {
    event.preventDefault();
    section.scrollIntoView({behavior: 'smooth'});
  });
  liItem.append(anchor);
})


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
    // add active-section class if section is in viewport
    if(isInView) {
      section.classList.add('active-section');
      // iterate through anchors to find correct anchor based on section in viewport
      const aList = navbar.querySelectorAll('a');
      aList.forEach( a => {
        const sectName = section.getAttribute('data-nav');
        if(a.text == sectName) {
          a.classList.add('active-section');
        } else {
          a.classList.remove('active-section');
        }
      })
    } else {
      section.classList.remove('active-section');
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
