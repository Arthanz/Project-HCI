const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}

// Get the necessary elements
const tickerWrapper = document.querySelector('.js-marquee-wrapper');
const tickerList = document.querySelector('.ticker__list');

// Clone the ticker list and append it to the wrapper
const clonedTickerList = tickerList.cloneNode(true);
tickerWrapper.appendChild(clonedTickerList);

// Calculate the width of the ticker list
let tickerWidth = 0;
const tickerItems = tickerList.querySelectorAll('.ticker__item');
tickerItems.forEach(item => {
  tickerWidth += item.offsetWidth;
});

// Set the initial position of the ticker
let currentPosition = 0;

// Function to move the ticker
function moveTicker() {
  // Calculate the next position
  currentPosition -= 1;

  // Check if the entire ticker has passed
  if (Math.abs(currentPosition) >= tickerWidth) {
    currentPosition = 0;
  }

  // Apply the new position to the ticker wrapper
  tickerWrapper.style.transform = `translateX(${currentPosition}px)`;

  // Call the moveTicker function recursively
  requestAnimationFrame(moveTicker);
}

// Call the moveTicker function to start the animation
moveTicker();

$(function () {
  $(document).scroll(function () {
    var $nav = $(".main-header");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

window.addEventListener('load', function() {
  var header = document.querySelector('.main-header');

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});



