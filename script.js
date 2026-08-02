// ==========================
// ПЛАВНОЕ ПОЯВЛЕНИЕ
// ==========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll("section,.feature,.stats div,.buy-block,.gallery img").forEach(el=>{

el.classList.add("fade");

observer.observe(el);

});

// ==========================
// HEADER ПРИ ПРОКРУТКЕ
// ==========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(255,255,255,.92)";
header.style.boxShadow="0 10px 35px rgba(0,0,0,.08)";

}else{

header.style.background="rgba(255,255,255,.75)";
header.style.boxShadow="none";

}

});

// ==========================
// ПЛАВНАЯ ПРОКРУТКА
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ==========================
// ЭФФЕКТ КНОПОК
// ==========================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});

// ==========================
// УВЕЛИЧЕНИЕ ИЗОБРАЖЕНИЙ
// ==========================

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.left="0";
overlay.style.top="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.85)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;
image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="20px";

overlay.appendChild(image);

document.body.appendChild(overlay);

overlay.onclick=()=>{

overlay.remove();

};

});

});
// ==========================
// BURGER MENU
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (!menuBtn || !navMenu) return;

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuBtn.innerHTML = "✕";
        } else {
            menuBtn.innerHTML = "☰";
        }

    });

});
