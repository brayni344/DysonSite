// ==========================
// BURGER MENU
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("navMenu");

    if(menuBtn && nav){

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

            if(nav.classList.contains("active")){

                menuBtn.innerHTML="✕";

            }else{

                menuBtn.innerHTML="☰";

            }

        });

        document.querySelectorAll("#navMenu a").forEach(link=>{

            link.addEventListener("click",()=>{

                nav.classList.remove("active");

                menuBtn.innerHTML="☰";

            });

        });

    }

});

// ==========================
// HEADER SHADOW
// ==========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(!header) return;

    if(window.scrollY>30){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";
        header.style.background="rgba(255,255,255,.98)";

    }else{

        header.style.boxShadow="none";
        header.style.background="rgba(255,255,255,.96)";

    }

});
// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        const id=this.getAttribute("href");

        if(id==="#" || id.length<2) return;

        const block=document.querySelector(id);

        if(block){

            e.preventDefault();

            block.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

// ==========================
// FADE ANIMATION
// ==========================

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section,.card,.review,.tech,.feature").forEach(el=>{

    el.classList.add("fade");

    observer.observe(el);

});

// ==========================
// IMAGE ZOOM
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
        overlay.style.alignItems="center";
        overlay.style.justifyContent="center";
        overlay.style.zIndex="99999";

        const image=document.createElement("img");

        image.src=img.src;
        image.style.maxWidth="90%";
        image.style.maxHeight="90%";
        image.style.borderRadius="20px";
        image.style.boxShadow="0 20px 50px rgba(0,0,0,.5)";

        overlay.appendChild(image);

        overlay.addEventListener("click",()=>{

            overlay.remove();

        });

        document.body.appendChild(overlay);

    });

});
// ==========================
// BUTTON EFFECT
// ==========================

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-3px) scale(1.02)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0) scale(1)";

    });

});

// ==========================
// ACTIVE MENU
// ==========================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("#navMenu a").forEach(link=>{

    const href = link.getAttribute("href");

    if(href === currentPage){

        link.style.color = "#7a3aed";
        link.style.fontWeight = "700";

    }

});

// ==========================
// PRELOADER (если появится)
// ==========================

window.addEventListener("load",()=>{

    const preloader=document.querySelector(".preloader");

    if(preloader){

        preloader.style.opacity="0";

        setTimeout(()=>{

            preloader.remove();

        },500);

    }

});
