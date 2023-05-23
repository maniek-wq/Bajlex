const navbar = document.getElementById("navbar")
let isExisting1 = false;

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 0 ) {
      navbar.classList.add("shadow");
      navbar.style.opacity="0.85";
    } else {
      navbar.classList.remove("shadow");
      navbar.style.opacity="1";
    }
   
  });
  

  const instagram = document.getElementById("instagram");
const facebook = document.getElementById("facebook");
instagram.addEventListener("click",function(){
        window.open("https://www.instagram.com/bajlex_bhp/", "_blank");
     });

     facebook.addEventListener("click",function(){
        window.open("https://www.facebook.com/profile.php?id=100076476510012&sk=services", "_blank");
     });


     const hamburger = document.getElementById("hamburger");
     const mid = document.getElementById("mid");
     const contactBtn = document.getElementById("contactBtn");
     
     hamburger.addEventListener("click", function () {
       mid.classList.toggle("active");
       contactBtn.classList.toggle("active");
       hamburger.classList.toggle("active");
     });

let mediaQuery = window.matchMedia("(max-width: 767px)");

const mainPageWriting = document.createElement("a");
    mainPageWriting.textContent="Strona główna";
    mainPageWriting.addEventListener("click",function(){
        window.location.href="./main.html";
    });


    const serivceWriting = document.createElement("a");
    serivceWriting.textContent="Usługi";

    serivceWriting.addEventListener("click",function(){
        window.location.href="./uslugi.html";
    });


    const contactWriting = document.createElement("a");
    contactWriting.textContent="Kontakt";
    contactWriting.addEventListener("click",function(){
        window.location.href="./kontakt.html";
    });

    const newsWriting = document.createElement("a");
    newsWriting.textContent="Aktualności";
    newsWriting.addEventListener("click",function(){
        window.location.href="./new.html";
    });

    const spons = document.createElement("a");
    spons.textContent="Partnerzy";
    spons.addEventListener("click",function(){
        window.location.href="./sponsors.html";
    });


if(mediaQuery.matches){
        hamburger.addEventListener("click",function(){
                if(!isExisting1){
                        const menu = document.createElement("div");
                        menu.setAttribute("id","menu");
                        hamburger.append(menu);
                        
                        menu.appendChild(mainPageWriting);
                        menu.appendChild(serivceWriting);
                        menu.appendChild(contactWriting);
                        menu.appendChild(newsWriting);
                        menu.appendChild(spons); 
                        mainPageWriting.textContent="Strona główna";
                        mainPageWriting.addEventListener("click",function(){
                                window.location.href="./main.html";
                        });
         
                        serivceWriting.textContent="Usługi";
         
                        serivceWriting.addEventListener("click",function(){
                            window.location.href="./uslugi.html";
                        });
         
                        contactWriting.textContent="Kontakt";
                        contactWriting.addEventListener("click",function(){
                            window.location.href="./kontakt.html";
                        });
         
                        newsWriting.textContent="Aktualności";
                        newsWriting.addEventListener("click",function(){
                            window.location.href="./new.html";
                        });
         
                        spons.textContent="Partnerzy";
                        spons.addEventListener("click",function(){
                            window.location.href="./sponsors.html";
                        });
                        isExisting1=true;
                        document.addEventListener("click",function(event){
                         if(!menu.contains(event.target)&& !hamburger.contains(event.target)){
                                 menu.remove();
                                 isExisting=false;
                         }
                        }); 
                }else {
                        const menu = document.getElementById("menu");
                menu.remove();
                isExisting1 = false;
                }
        });
}
