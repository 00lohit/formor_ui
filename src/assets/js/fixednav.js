// Sticky Navbar

// const nav = document.querySelector(".navbar");
// const navHeight = nav.getBoundingClientRect().height;
// const about = document.querySelector(".about");

// const stickyNav = function (entries) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) nav.classList.add("fixed-top");
//   else nav.classList.remove("fixed-top");
// };

// const navbarObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });
// navbarObserver.observe(about);

// Scroll;
window.addEventListener("scroll", (e) => {
  var nav = document.querySelector(".navbar");
  if (nav) {
    if (window.scrollY > 180) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  }
});
