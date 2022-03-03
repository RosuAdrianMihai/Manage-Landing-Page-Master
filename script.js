const circles = document.getElementsByClassName("circle");
const inputEmail = document.getElementById("input-email");
const errorMessage = document.getElementById("error-message");
const checkEmail = document.getElementById("check-email");
const hamburgerMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const phoneMenu = document.getElementById("phone-menu");

for(let j = 0; j<4; j++){
    circles[j].addEventListener("click", () =>{
        for(let i = 0; i<4; i++){
        circles[j].parentNode.children[i].classList = "circle";
        }
        circles[j].classList.add("bg-bright-red");
    })
};

const checkValidEmail = /^\S+@\S+\.\S+$/

checkEmail.addEventListener("click", () =>{
    if(checkValidEmail.test(inputEmail.value) == false){
        errorMessage.classList.remove("hidden");
     } else {
        errorMessage.classList.add("hidden");
        inputEmail.value = "";
     };
})

hamburgerMenu.addEventListener("click", () => {
    phoneMenu.classList.remove ("hidden");
    phoneMenu.classList.add("end-animation", "block", "absolute");
})

closeMenu.addEventListener("click", () => {
    phoneMenu.classList.remove ("end-animation", "block", "absolute");
    phoneMenu.classList.add("hidden");
  })
  

