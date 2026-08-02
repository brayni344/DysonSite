// ======================================
// DYSON WEBSITE
// SCRIPT.JS
// ======================================

// ---------- Загрузка страницы ----------

window.addEventListener("load", () => {

    document.body.classList.add("loading");

});

// ---------- Header ----------

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(255,255,255,.95)";
        header.style.boxShadow = "0 10px 35px rgba(0,0,0,.08)";

    }else{

        header.style.background = "rgba(255,255,255,.82)";
        header.style.boxShadow = "none";

    }

});

// ---------- Burger ----------

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");

if(menuBtn && navMenu){

menuBtn.onclick = function(){

navMenu.classList.toggle("active");

if (navMenu.classList.contains("active")) {

    menuBtn.innerHTML = "✕";

} else {

    menuBtn.innerHTML = "☰";

}

};

}

// ---------- Закрытие меню ----------

document.querySelectorAll("#navMenu a").forEach(link=>{

link.onclick=()=>{

navMenu.classList.remove("active");

menuBtn.innerHTML="☰";

};

});
// ======================================
// АНИМАЦИЯ ПОЯВЛЕНИЯ
// ======================================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(

"section,.feature,.review,.stats div,.gallery img,.buy-card,.about"

).forEach(el=>{

el.classList.add("fade");

observer.observe(el);

});

// ======================================
// ПЛАВНАЯ ПРОКРУТКА
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ======================================
// ЭФФЕКТ НА КНОПКАХ
// ======================================

document.querySelectorAll("button,.btn-main,.btn-white,.buy").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});
// ======================================
// ГАЛЕРЕЯ (УВЕЛИЧЕНИЕ ФОТО)
// ======================================

document.querySelectorAll(".gallery-grid img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.className="image-overlay";

overlay.innerHTML=`

<img src="${img.src}" class="image-popup">

`;

document.body.appendChild(overlay);

setTimeout(()=>{

overlay.classList.add("show");

},10);

overlay.onclick=()=>{

overlay.classList.remove("show");

setTimeout(()=>{

overlay.remove();

},300);

};

});

});

// ======================================
// ESC ЗАКРЫВАЕТ ФОТО
// ======================================

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

const overlay=document.querySelector(".image-overlay");

if(overlay){

overlay.remove();

}

}

});

// ======================================
// ЭФФЕКТ ПАРАЛЛАКСА
// ======================================

window.addEventListener("mousemove",(e)=>{

const img=document.querySelector(".hero-image img");

if(!img) return;

const x=(window.innerWidth/2-e.clientX)/60;

const y=(window.innerHeight/2-e.clientY)/60;

img.style.transform=`translate(${x}px,${y}px)`;

});

// ======================================
// ЛЕНИВАЯ ЗАГРУЗКА ИЗОБРАЖЕНИЙ
// ======================================

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("loading","lazy");

});
// ======================================
// КНОПКА "ВВЕРХ"
// ======================================

const scrollBtn=document.createElement("div");

scrollBtn.innerHTML="↑";

scrollBtn.className="scroll-top";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollBtn.classList.add("show");

}else{

scrollBtn.classList.remove("show");

}

});

scrollBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ======================================
// ТЕКУЩИЙ ПУНКТ МЕНЮ
// ======================================

const current=location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link=>{

const href=link.getAttribute("href");

if(href===current){

link.classList.add("active");

}

});

// ======================================
// КОНЕЦ SCRIPT.JS
// ======================================