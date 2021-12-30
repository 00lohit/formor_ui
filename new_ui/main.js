let back = document.querySelector(".back")
let login =document.querySelector(".login-click")

let loginScreen = document.querySelector(".login-screen")

back.addEventListener("click",()=>{
    loginScreen.style.display = "none"
    
})
login.addEventListener("click",()=>{
    loginScreen.style.display = "block"
})

let digitValidate = (ele) => {
    ele.value = ele.value.replace(/[^0-9]/g,'');
  }


  let tabChange = (val) => {
    let ele = document.querySelectorAll('.digit');
    if(val<4){
        if(ele[val-1].value != ''){
            ele[val].focus()
            Validate()
          }
    }

    if(val > 1){
        if(ele[val-1].value == ''){
            ele[val-2].focus()
          }  
    }

    if(val == 4){
        Validate()
    }

 
 }

 let Validate = () => {
    let ele = document.querySelectorAll('.digit');
    let arr = ele.map((e)=>{
        if(e.value=="" || e.value==undefined){
            return null
        }
        else{
            
        }
    });

    console.log(arr);

 }