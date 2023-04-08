let isExisting = false;
const link = document.getElementById("logo1");
const a = document.getElementById("offerSite");
const b = document.getElementById("measurement");
const c = document.getElementById("BHP");
const d = document.getElementById("outsourcing");
const e = document.getElementById("bhpSupervising");
const f = document.getElementById("documentation");
const g = document.getElementById("firstAid");

a.addEventListener("click",function(){
                offerSite.style.backgroundColor="rgba(0, 198, 197, 0.6)";
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
                                if(!isDivExisting){offerSite.style.backgroundColor="rgba(0, 198, 197, 1)";}
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
                        offerSite.style.backgroundColor="rgba(0, 198, 197, 0.6)";
                const measurementInformation = document.createElement("div");
                measurementInformation.setAttribute("id","measurementInformation");
                measurement.appendChild(measurementInformation);
                measurementInformation.textContent="Specjalizujemy się w wykonywaniu pomiarów środowiska pracy, bazując na obowiązujących regulacjach prawnych. Oferujemy pełny zakres badań czynników szkodliwych i uciążliwych w środowisku pracy, w tym pomiary natężenia oświetlenia.";
                isExisting=true;
                document.addEventListener("click",function(event){
                        if(!measurementInformation.contains(event.target) && !measurement.contains(event.target)){
                                measurementInformation.remove();
                                const isDivExisting1 = document.querySelector('measurementInformation');
                                if(!isDivExisting1){offerSite.style.backgroundColor="rgba(0, 198, 197, 1)";}
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
                        offerSite.style.backgroundColor="rgba(0, 198, 197, 0.6)";
                const BHPInformation = document.createElement("div");
                BHPInformation.setAttribute("id","BHPInformation");
                BHP.appendChild(BHPInformation);
                BHPInformation.textContent="Oferujemy pełną gamę szkoleń w zakresie BHP (wstępne, oraz okresowe dla wszystkich grup pracowniczych). Jeśli jesteś zainteresowany szkoleniem na odległość, możesz połączyć się z nami z dowolnego miejsca online, a my udzielimy pełnowartościowego, unikatowego szkolenia BHP, z wykorzystaniem profesjonalnych prezentacji multimedialnych.";
                isExisting=true;
                document.addEventListener("click",function(event){
                        if(!BHPInformation.contains(event.target) && !BHP.contains(event.target)){
                                BHPInformation.remove();
                                const isDivExisting2 = document.querySelector('BHPInformation');
                                if(!isDivExisting2){offerSite.style.backgroundColor="rgba(0, 198, 197, 1)";}
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
                        offerSite.style.backgroundColor="rgba(0, 198, 197, 0.6)";
                const outsourcingInformation = document.createElement("div");
                outsourcingInformation.setAttribute("id","outsourcingInformation");
                outsourcing.appendChild(outsourcingInformation);
                outsourcingInformation.textContent="Nawiązujemy współpracę z firmami, oferując wykonywanie pełnego zakresu zadań służby BHP, w celu wypełnienia przepisów związanych z bezpieczeństwem i higieną pracy.";
                isExisting=true;
                document.addEventListener("click",function(event){
                        if(!outsourcingInformation.contains(event.target) && !outsourcing.contains(event.target)){
                                outsourcingInformation.remove();
                                const isDivExisting3 = document.querySelector('outsourcingInformation');
                                if(!isDivExisting3){offerSite.style.backgroundColor="rgba(0, 198, 197, 1)";}
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
                        offerSite.style.backgroundColor="rgba(0, 198, 197, 0.6)";
                const bhpSupervisingInformation = document.createElement("div");
                bhpSupervisingInformation.setAttribute("id","bhpSupervisingInformation");
                bhpSupervising.appendChild(bhpSupervisingInformation);
                bhpSupervisingInformation.textContent="Od wielu lat, z sukcesami sprawujemy kompleksowy nadzór BHP nad budowami w Polsce, oraz na terenie Unii Europejskiej. Uczestniczymy w sporządzaniu planu BIOZ, przeprowadzamy kontrolę warunków pracy, analizujemy i oceniamy ryzyko, w podejmowanych pracach na terenie obsługiwanych budów. Oferujemy także sporządzanie wszelkiej niezbędnej dokumentacji związanej z procesem.";
                isExisting=true;
                document.addEventListener("click",function(event){
                        if(!bhpSupervisingInformation.contains(event.target) && !bhpSupervising.contains(event.target)){
                                bhpSupervisingInformation.remove();
                                const isDivExisting4 = document.querySelector('bhpSupervisingInformation');
                                if(!isDivExisting4){offerSite.style.backgroundColor="rgba(0, 198, 197, 1)";}
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
                        offerSite.style.backgroundColor="rgba(0, 198, 197, 0.6)";
                const documentationInformation = document.createElement("div");
                documentationInformation.setAttribute("id","documentationInformation");
                documentation.appendChild(documentationInformation);
                documentationInformation.textContent="Przyjmujemy zlecenia na opracowanie: instrukcji BHP dla maszyn i urządzeń, oceny ryzyka zawodowego, instrukcję bezpieczeństwa pożarowego, wykonanie pełnej dokumentacji powypadkowej.";
                isExisting=true;
                document.addEventListener("click",function(event){
                        if(!documentationInformation.contains(event.target) && !documentation.contains(event.target)){
                                documentationInformation.remove();
                                const isDivExisting5 = document.querySelector('documentationInformation');
                                if(!isDivExisting5){offerSite.style.backgroundColor="rgba(0, 198, 197, 1)";}
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
                        offerSite.style.backgroundColor="rgba(0, 198, 197, 0.6)";
                const firstAidInformation = document.createElement("div");
                firstAidInformation.setAttribute("id","firstAidInformation");
                firstAid.appendChild(firstAidInformation);
                firstAidInformation.textContent="Szkolenia organizowane przez BAJLEX przeznaczone są dla każdej grupy zawodowej, a także osób indywidualnych chcących uzyskać wiedzę w zakresie udzielania pierwszej pomocy. Dbając o jakość szkoleń, do ich prowadzenia wykorzystujemy prezentacje multimedialne, fantomy oraz defibrylator AED.";
                isExisting=true;
               
                document.addEventListener("click",function(event){
                        if(!firstAidInformation.contains(event.target) && !firstAid.contains(event.target)){
                                firstAidInformation.remove();
                                const isDivExisting6 = document.querySelector('firstAidInformation');
                                if(!isDivExisting6){offerSite.style.backgroundColor="rgba(0, 198, 197, 1)";}
                                isExisting=false;
                                
                        }
                });

                setTimeout(function() {
                        firstAidInformation.remove();
                    }, 10000);
                }
                
                
        });

link.addEventListener("click",function(){
    window.location.href="index.html"
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