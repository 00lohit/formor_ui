let back = document.querySelector(".back");
let login = document.querySelectorAll(".login-click");

let loginScreen = document.querySelector(".login-screen");
let ScrollScreen = document.querySelector(".scroll");

let menu = document.querySelector(".menu");
let menu_button = document.querySelector(".menu-button");

loginScreen.style.display = "none";

back.addEventListener("click", () => {
  loginScreen.style.display = "none";
  ScrollScreen.style.display = "block";
});

login.forEach((e)=>{

  e.addEventListener("click", () => {
    loginScreen.style.display = "block";
    ScrollScreen.style.display = "none";
  });
  
})


let digitValidate = (ele) => {
  ele.value = ele.value.replace(/[^0-9]/g, "");
};

let tabChange = (val) => {
  let ele = document.querySelectorAll(".digit");
  if (val < 4) {
    if (ele[val - 1].value != "") {
      ele[val].focus();
      Validate();
    }
  }

  if (val > 1) {
    if (ele[val - 1].value == "") {
      ele[val - 2].focus();
    }
  }

  if (val == 4) {
    Validate();
  }
};

let Validate = () => {
  let ele = document.querySelectorAll(".digit");
  let arr = ele.map((e) => {
    if (e.value == "" || e.value == undefined) {
      return null;
    } else {
    }
  });

  console.log(arr);
};

let menu_state = {
  state: true,
};

let changeSate = () => {
  if (menu_state.state) {
    menu.classList.add("move");
    menu.classList.remove("still");
  } else {
    menu.classList.remove("move");
    menu.classList.add("still");
  }
};

changeSate();

menu_button.addEventListener("click", () => {
  if (menu_state.state) {
    menu_state.state = false;
  } else {
    menu_state.state = true;
  }


  changeSate();

});

let current = () => {
  return menu_state.state
}
