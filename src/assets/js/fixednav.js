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

// OTP

// document.addEventListener("DOMContentLoaded", function (event) {
//   function OTPInput() {
//     const inputs = document.querySelectorAll("#otp > *[id]");
//     for (let i = 0; i < inputs.length; i++) {
//       inputs[i].addEventListener("keydown", function (event) {
//         if (event.key === "Backspace") {
//           inputs[i].value = "";
//           if (i !== 0) inputs[i - 1].focus();
//         } else {
//           if (i === inputs.length - 1 && inputs[i].value !== "") {
//             return true;
//           } else if (event.keyCode > 47 && event.keyCode < 58) {
//             inputs[i].value = event.key;
//             if (i !== inputs.length - 1) inputs[i + 1].focus();
//             // event.preventDefault();
//           } else if (event.keyCode > 64 && event.keyCode < 91) {
//             inputs[i].value = String.fromCharCode(event.keyCode);
//             if (i !== inputs.length - 1) inputs[i + 1].focus();
//             // event.preventDefault();
//           }
//         }
//       });
//     }
//   }
//   OTPInput();
// });

function getCodeBoxElement(index) {
  return document.getElementById("codeBox" + index);
}
function onKeyUpEvent(index, event) {
  const eventCode = event.which || event.keyCode;
  if (getCodeBoxElement(index).value.length === 1) {
    if (index !== 4) {
      getCodeBoxElement(index + 1).focus();
    } else {
      getCodeBoxElement(index).blur();
      // Submit code
      // console.log("submit code ");
    }
  }
  if (eventCode === 8 && index !== 1) {
    getCodeBoxElement(index - 1).focus();
  }
}
function onFocusEvent(index) {
  for (item = 1; item < index; item++) {
    const currentElement = getCodeBoxElement(item);
    if (!currentElement.value) {
      currentElement.focus();
      break;
    }
  }
}

// loader

// Set set timeout add below code and uncomment it

setTimeout(() => {
  $(".loader_bg").fadeToggle();
}, 1000);
