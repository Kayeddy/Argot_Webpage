$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

let stars = document.getElementById("stars");
let moonLogo = document.getElementById("moonLogo");
let mountains = document.getElementById("mountains");
let cannon = document.getElementById("cannon");
let slogan = document.getElementById("slogan");
let signUpBtn = document.getElementById("signUpBtn");
let header = document.querySelector("header");

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".mainMenu");
const navItem = document.querySelectorAll(".item");

window.addEventListener("scroll", function()
{
    let value = window.scrollY;
    stars.style.left = value * 0.5 + "px";
    moonLogo.style.top = value * 1.0 + "px";
    mountains.style.top = value * 0.5 + "px";
    cannon.style.left = value * 0 + "px";
    slogan.style.marginRight = value * 3.5 + "px";
    slogan.style.marginTop = value * 0.7 + "px";
    signUpBtn.style.marginTop = value * 1.0 + "px";
    header.style.top = value * 0.5 + "px";
});
menuBtn.addEventListener("click", () => 
{
    toggle();
});
navItem.forEach(item =>
    {
        item.addEventListener("click", () => 
        {
            if(menuBtn.classList.contains("open"))
            {
                toggle();
            }
        });
    });
function toggle()
{
    menuBtn.classList.toggle("open");
    nav.classList.toggle("open");
}
