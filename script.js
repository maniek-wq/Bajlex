let isExisting = false;
const link = document.getElementById("logo1");
const a = document.getElementById("offerSite");
const b = document.getElementById("measurement");
const c = document.getElementById("BHP");
const d = document.getElementById("outsourcing");
const e = document.getElementById("bhpSupervising");
const f = document.getElementById("documentation");
const g = document.getElementById("firstAid");
const h = document.getElementById("forklift");
let isExisting1 = false;
a.addEventListener("click",function(){
                
                if(!isExisting){
                const fireCourseInformation = document.createElement("div");
                fireCourseInformation.setAttribute("id","fireCourseInformation");
                fireCourse.appendChild(fireCourseInformation);
                fireCourseInformation.textContent="W trakcie szkoleń PPOŻ zdobędziesz praktyczne umiejętności oraz wiedzę teoretyczną, które są niezbędne w sytuacji zagrożenia pożarowego oraz ratowania ludzkiego życia.";
                isExisting=true;
                document.addEventListener("click",function(event){
                        if(!fireCourseInformation.contains(event.target) && !fireCourse.contains(event.target)){
                                fireCourseInformation.remove();
                                const isDivExisting = document.querySelector('fireCourseInformation');
                               
                                isExisting=false;
                        }
                
                }); 

                setTimeout(function() {
                        fireCourseInformation.remove();
                    }, 10000);
                }
      
        });

b.addEventListener("click",function(){
                
                if(!isExisting){
                        
                const measurementInformation = document.createElement("div");
                measurementInformation.setAttribute("id","measurementInformation");
                measurement.appendChild(measurementInformation);
                measurementInformation.textContent="Specjalizujemy się w wykonywaniu pomiarów środowiska pracy, bazując na obowiązujących regulacjach prawnych. Oferujemy pełny zakres badań czynników szkodliwych i uciążliwych w środowisku pracy, w tym pomiary natężenia oświetlenia.";
                isExisting=true;
                document.addEventListener("click",function(event){
                        if(!measurementInformation.contains(event.target) && !measurement.contains(event.target)){
                                measurementInformation.remove();
                                const isDivExisting1 = document.querySelector('measurementInformation');
                                
                                isExisting=false;
                                
                        }
                });
                setTimeout(function() {
                        measurementInformation.remove();
                    }, 10000);
                }
                
                
        });

c.addEventListener("click",function(){
                
                if(!isExisting){
                       
                const BHPInformation = document.createElement("div");
                BHPInformation.setAttribute("id","BHPInformation");
                BHP.appendChild(BHPInformation);
                BHPInformation.textContent="Oferujemy pełną gamę szkoleń w zakresie BHP (wstępne, oraz okresowe dla wszystkich grup pracowniczych). Jeśli jesteś zainteresowany szkoleniem na odległość, możesz połączyć się z nami z dowolnego miejsca online, a my udzielimy pełnowartościowego, unikatowego szkolenia BHP, z wykorzystaniem profesjonalnych prezentacji multimedialnych.";
                isExisting=true;
                document.addEventListener("click",function(event){
                        if(!BHPInformation.contains(event.target) && !BHP.contains(event.target)){
                                BHPInformation.remove();
                                const isDivExisting2 = document.querySelector('BHPInformation');
                               
                                isExisting=false;
                             
                        }
                });
                setTimeout(function() {
                        BHPInformation.remove();
                    }, 10000);
                }
                
                
        });

d.addEventListener("click",function(){
                
                if(!isExisting){
                        
                const outsourcingInformation = document.createElement("div");
                outsourcingInformation.setAttribute("id","outsourcingInformation");
                outsourcing.appendChild(outsourcingInformation);
                outsourcingInformation.textContent="Nawiązujemy współpracę z firmami, oferując wykonywanie pełnego zakresu zadań służby BHP, w celu wypełnienia przepisów związanych z bezpieczeństwem i higieną pracy.";
                isExisting=true;
                document.addEventListener("click",function(event){
                        if(!outsourcingInformation.contains(event.target) && !outsourcing.contains(event.target)){
                                outsourcingInformation.remove();
                                const isDivExisting3 = document.querySelector('outsourcingInformation');
                               
                                isExisting=false;
                               
                        }
                });
                setTimeout(function() {
                        outsourcingInformation.remove();
                    }, 10000);
                }
                
                
        });

e.addEventListener("click",function(){
                
                if(!isExisting){
                        
                const bhpSupervisingInformation = document.createElement("div");
                bhpSupervisingInformation.setAttribute("id","bhpSupervisingInformation");
                bhpSupervising.appendChild(bhpSupervisingInformation);
                bhpSupervisingInformation.textContent="Od wielu lat, z sukcesami sprawujemy kompleksowy nadzór BHP nad budowami w Polsce, oraz na terenie Unii Europejskiej. Uczestniczymy w sporządzaniu planu BIOZ, przeprowadzamy kontrolę warunków pracy, analizujemy i oceniamy ryzyko, w podejmowanych pracach na terenie obsługiwanych budów. Oferujemy także sporządzanie wszelkiej niezbędnej dokumentacji związanej z procesem.";
                isExisting=true;
                document.addEventListener("click",function(event){
                        if(!bhpSupervisingInformation.contains(event.target) && !bhpSupervising.contains(event.target)){
                                bhpSupervisingInformation.remove();
                                const isDivExisting4 = document.querySelector('bhpSupervisingInformation');
                                
                                isExisting=false;
                                
                        }
                });
                setTimeout(function() {
                        bhpSupervisingInformation.remove();
                    }, 10000);
                }
                
                
        });

f.addEventListener("click",function(){
                
                if(!isExisting){
                        
                const documentationInformation = document.createElement("div");
                documentationInformation.setAttribute("id","documentationInformation");
                documentation.appendChild(documentationInformation);
                documentationInformation.textContent="Przyjmujemy zlecenia na opracowanie: instrukcji BHP dla maszyn i urządzeń, oceny ryzyka zawodowego, instrukcję bezpieczeństwa pożarowego, wykonanie pełnej dokumentacji powypadkowej.";
                isExisting=true;
                document.addEventListener("click",function(event){
                        if(!documentationInformation.contains(event.target) && !documentation.contains(event.target)){
                                documentationInformation.remove();
                                const isDivExisting5 = document.querySelector('documentationInformation');
                                
                                isExisting=false;
                              
                        }
                });

                setTimeout(function() {
                        documentationInformation.remove();
                    }, 10000);
                }
                
                
        });

g.addEventListener("click",function(){
                if(!isExisting){
                        
                const firstAidInformation = document.createElement("div");
                firstAidInformation.setAttribute("id","firstAidInformation");
                firstAid.appendChild(firstAidInformation);
                firstAidInformation.textContent="Szkolenia organizowane przez BAJLEX przeznaczone są dla każdej grupy zawodowej, a także osób indywidualnych chcących uzyskać wiedzę w zakresie udzielania pierwszej pomocy. Dbając o jakość szkoleń, do ich prowadzenia wykorzystujemy prezentacje multimedialne, fantomy oraz defibrylator AED.";
                isExisting=true;
               
                document.addEventListener("click",function(event){
                        if(!firstAidInformation.contains(event.target) && !firstAid.contains(event.target)){
                                firstAidInformation.remove();
                                const isDivExisting6 = document.querySelector('firstAidInformation');
                                
                                isExisting=false;
                                
                        }
                });

                setTimeout(function() {
                        firstAidInformation.remove();
                    }, 10000);
                }
                
                
        });


h.addEventListener("click",function(){
                if(!isExisting){
                        
                const forkliftInformation = document.createElement("div");
                forkliftInformation.setAttribute("id","firstAidInformation");
                h.appendChild(forkliftInformation);
                forkliftInformation.textContent="BAJLEX prowadzi szkolenia przygotowujące do zdobycia uprawnień Urzędu Dozoru Technicznego w zakresie obsługi wózków jezdniowych podnośnikowych z wysięgnikiem z wyłączeniem wózków z napędem podnoszenia osoby obsługującej wraz z ładunkiem. Dobieramy najlepsze metody nauki w stosunku do indywidualnych potrzeb kursantów, co pomaga w przygotowaniu się do egzaminu państwowego. Jeżeli masz ukończone 18 lat oraz wykształcenie co najmniej podstawowe, skorzystaj z naszych usług i zdobądź uprawnienia!";
                isExisting=true;
               
                document.addEventListener("click",function(event){
                        if(!forkliftInformation.contains(event.target) && !h.contains(event.target)){
                                forkliftInformation.remove();
                                const isDivExisting6 = document.querySelector('forkliftInformation');
                                
                                isExisting=false;
                                
                        }
                });

                setTimeout(function() {
                        firstAidInformation.remove();
                    }, 20000);
                }
                
                
        });

link.addEventListener("click",function(){
        window.location.href="./index.html";
});

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 0) {
      navbar.classList.add("shadow");
      navbar.style.opacity=".85";
    } else {
      navbar.classList.remove("shadow");
      navbar.style.opacity="1";
    }
  });

  const nav = document.getElementById("navbar");
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
    mainPageWriting.textContent="O nas";
    mainPageWriting.addEventListener("click",function(){
        window.location.href="./uslugi.html";
    });


    const serivceWriting = document.createElement("a");
    serivceWriting.textContent="Usługi";

    serivceWriting.addEventListener("click",function(){
        window.location.href="./index.html";
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
                        mainPageWriting.textContent="O nas";
                        mainPageWriting.addEventListener("click",function(){
                                window.location.href="./uslugi.html";
                        });
         
                        serivceWriting.textContent="Usługi";
         
                        serivceWriting.addEventListener("click",function(){
                            window.location.href="./index.html";
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
                                 isExisting1=false;
                         }
                        }); 
                }else {
                        const menu = document.getElementById("menu");
                menu.remove();
                isExisting1 = false;
                }
        });
}
