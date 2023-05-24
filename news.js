const nav = document.getElementById("navbar");
const link = document.getElementById("logo1");

link.addEventListener("click",function(){
    window.location.href="./index.html";
});
let isExisting = false;
window.addEventListener("scroll", function() {
  if (window.pageYOffset > 0) {
    nav.style.opacity=".85";
    nav.classList.add("shadow");
    // console.log("sie ruszylo");
  } else {
    nav.style.opacity="1";
    nav.classList.remove("shadow");
    // console.log("w miejscu")
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

     
     let mediaQuery = window.matchMedia("(max-width: 767px)");
     const mainPageWriting = document.createElement("a");
         mainPageWriting.textContent="Strona główna";
         mainPageWriting.addEventListener("click",function(){
            window.location.href="./index.html";
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
                     if(!isExisting){
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
                window.location.href="./index.html";
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
               isExisting=true;
                        document.addEventListener("click",function(event){
                         if(!menu.contains(event.target)&& !hamburger.contains(event.target)){
                                 menu.remove();
                                 isExisting=false;
                         }
                        }); 

                     }else {
                             const menu = document.getElementById("menu");
                     menu.remove();
                     isExisting = false;
                     }
             });
     }