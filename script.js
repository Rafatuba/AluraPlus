const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.scrollY + ((window.innerHeight * 3 ) / 6);
  target.forEach(function (e) {
    if ((windowTop) > e.offsetTop) {
      e.classList.add(animationClass)
    } else {
      e.classList.remove(animationClass)
    }
  })
}
animeScroll();


const debounce = function (func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args)
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args)
  };
};

if (target.length) {
  window.addEventListener('scroll', debounce (function() {
    animeScroll();
  }, 200));
}