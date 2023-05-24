let isExisting = false;
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
