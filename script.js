let navList = document.querySelector(".nav-list");
let navListUl = document.querySelectorAll(".nav-list ul");
let openNav = document.querySelector(".open-nav");
let closeNav = document.querySelector(".close-nav");

openNav.addEventListener("click",()=>{
    navList.classList.add("show-nav")
})
closeNav.addEventListener("click",()=>{
    navList.classList.remove("show-nav")
})

navListUl.forEach(li=>li.addEventListener("click",()=>{
    navList.classList.remove("show-nav")
}))