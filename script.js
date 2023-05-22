const checkBtn = document.getElementById('Check-Btn');
const firstContainer = document.getElementById("container");
const logo = document.getElementById('logo');
let isExisting = false;
let isExisting1 = false;
let mediaQuery = window.matchMedia("(max-width: 767px)");
checkBtn.addEventListener("click",function(){

    const newScreen = document.createElement("div");
    newScreen.setAttribute("id","newContainer");
    document.body.appendChild(newScreen);
    firstContainer.style.display="none";
    firstContainer.remove();

    const navbar = document.createElement("div");
    navbar.setAttribute("id","navbar");
    newScreen.appendChild(navbar);

    const logo1 = document.createElement("div");
    const mid = document.createElement("div");
    const contactBtn = document.createElement("button");
    logo1.addEventListener("click",function(){
        location.reload(offerSite);
    });   

    logo1.setAttribute("id","logo1");
    mid.setAttribute("id","mid");
    contactBtn.setAttribute("id","contactBtn");
    contactBtn.addEventListener("click",function(){
        window.location.href="./kontakt.html";
    });
   

    navbar.appendChild(logo1);
    navbar.appendChild(mid);
    navbar.appendChild(contactBtn);
    
    

    contactBtn.textContent="Skontaktuj się!";
    document.body.style.margin="0";
      
    const mainPageWriting = document.createElement("a");
    mainPageWriting.textContent="Strona główna";
    mainPageWriting.addEventListener("click",function(){
        location.reload(firstContainer);
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
      
    mid.appendChild(mainPageWriting);
    mid.appendChild(serivceWriting);
    mid.appendChild(contactWriting);
    mid.appendChild(newsWriting);
    mid.appendChild(spons);

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 0 ) {
          navbar.classList.add("shadow");
          navbar.style.opacity="0.85";
        } else {
          navbar.classList.remove("shadow");
          navbar.style.opacity="1";
        }
       
      });
   if(mediaQuery.matches){
        // mainPageWriting.style.display="remove";
        // serivceWriting.style.display="none";
        // contactWriting.style.display="none";
        // newsWriting.style.display="none";
        navbar.style.zIndex="999";
        navbar.style.opacity="1";
        contactBtn.style.display="none";
        
        mid.style.display="none";
        const hamburger = document.createElement("div");
        hamburger.classList.add("hamburger");
        navbar.appendChild(hamburger);
        const line1 = document.createElement("div");
        line1.classList.add("line");

        const line2 = document.createElement("div");
        line2.classList.add("line");

        const line3 = document.createElement("div");
        line3.classList.add("line");

        hamburger.appendChild(line1);
        hamburger.appendChild(line2);
        hamburger.appendChild(line3);
        

        navbar.style.display="flex";
        navbar.style.justifyContent="space-evenly";
        logo1.style.scale="0.8";
        
             
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
                   location.reload(firstContainer);
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
                        isExisting1=false;
                }
               });   
                } else {
                        const menu = document.getElementById("menu");
                menu.remove();
                isExisting1 = false;
                }
        });
        
   }

    
        
        
        const offerSite = document.createElement("div");
        offerSite.setAttribute("id","offerSite");
        newScreen.appendChild(offerSite);

        const offerWriting = document.createElement("h1");
        offerWriting.setAttribute("id","offerWriting");
        offerWriting.textContent="O firmie";
        offerSite.appendChild(offerWriting);

        const servicesDivs = document.createElement("h3");
        servicesDivs.setAttribute("id","servicesDivs");
        offerSite.appendChild(servicesDivs);
        servicesDivs.style.whiteSpace="pre-wrap";
        servicesDivs.textContent="Jesteśmy firmą wykonującą wyspecjalizowane usługi w zakresie BHP, PPOŻ oraz wszelkich zagadnień powiązanych. W szczególności oferujemy kompletną obsługę BHP dla firm - wszelkie aspekty BHP, które dotyczą pracodawcy, tj.: szkolenia BHP, niezbędna dokumentacja BHP, doradztwo prawne w zakresie BHP, inspekcja i nadzór BHP stanowisk pracy. \n\nŚwiadczymy również jednorazowe usługi oraz zlecenia krótkoterminowe. Bajlex to firma z wieloletnim doświadczeniem w branży, nasi specjaliści posiadają kwalifikacje uprawniające do kompleksowej obsługi firm w zakresie BHP i PPOŻ. Rozwiązujemy problemy dużych przedsiębiorstw jak i mniejszych, kilku osobowych firm na trenie Polski i za granicą. Nasze usługi obejmują nie tylko zakłady pracy, ale również budownictwo, a wszystkie proponowane przez nas usługi znajdziecie w zakładce „Usługi”. Zapraszamy do współpracy!\n\nOd chwili pojawienia się na rynku w 2005 roku, nasze doświadczenie i profesjonalizm rozwinęły się w trakcie współpracy z firmami działającymi w branży budownictwa, produkcji, oraz szeroko pojętych usług w wielu dziedzinach działalności gospodarczej. Nawiązaliśmy wiele relacji z Klientami, którzy cenią sobie nasze usługi. Wszystkich partnerów, którzy nam zaufali możecie znaleźć w zakładce „Partnerzy”.";
        if (mediaQuery.matches) {
                
                servicesDivs.textContent = "Jesteśmy firmą wykonującą wyspecjalizowane usługi w zakresie BHP, PPOŻ oraz wszelkich zagadnień powiązanych. W szczególności oferujemy kompletną obsługę BHP dla firm - wszelkie aspekty BHP, które dotyczą pracodawcy, tj.: szkolenia BHP, niezbędna dokumentacja BHP, doradztwo prawne w zakresie BHP, inspekcja i nadzór BHP stanowisk pracy. \n\nŚwiadczymy również jednorazowe usługi oraz zlecenia krótkoterminowe. Bajlex to firma z wieloletnim doświadczeniem w branży, nasi specjaliści posiadają kwalifikacje uprawniające do kompleksowej obsługi firm w zakresie BHP i PPOŻ. Rozwiązujemy problemy dużych przedsiębiorstw jak i mniejszych, kilku osobowych firm na trenie Polski i za granicą. Nasze usługi obejmują nie tylko zakłady pracy, ale również budownictwo, a wszystkie proponowane przez nas usługi znajdziecie w zakładce „Usługi”. Zapraszamy do współpracy!\n\nOd chwili pojawienia się na rynku w 2005 roku, nasze doświadczenie i profesjonalizm rozwinęły się w trakcie współpracy z firmami działającymi w branży budownictwa, produkcji, oraz szeroko pojętych usług w wielu dziedzinach działalności gospodarczej. Nawiązaliśmy wiele relacji z Klientami, którzy cenią sobie nasze usługi.";
                
                
              }
        const sponsors = document.createElement("div");
        sponsors.setAttribute("id","sponsors");
        servicesDivs.appendChild(sponsors);
        sponsors.style.width="100%";
        sponsors.style.height="100px";
        // sponsors.style.border="solid .5px black";
        const st = document.createElement("div");
        const nd = document.createElement("div");
        const rd = document.createElement("div");
        const th = document.createElement("div");
        const th1 = document.createElement("div");
        const th2 = document.createElement("div");
        const th3 = document.createElement("div");
        const th4 = document.createElement("div");
        const th5 = document.createElement("div");
        const th6 = document.createElement("div");
        const th7 = document.createElement("div");
        const th8 = document.createElement("div");
        const th9 = document.createElement("div");

        st.setAttribute("id","st");
        nd.setAttribute("id","nd");
        rd.setAttribute("id","rd");
        th.setAttribute("id","th");
        th1.setAttribute("id","th1");
        th2.setAttribute("id","th2");
        th3.setAttribute("id","th3");
        th4.setAttribute("id","th4");
        th5.setAttribute("id","th5");
        th6.setAttribute("id","th6");
        th7.setAttribute("id","th7");
        th8.setAttribute("id","th8");
        th9.setAttribute("id","th9");
        

        sponsors.appendChild(st);
        sponsors.appendChild(nd);
        sponsors.appendChild(rd);
        sponsors.appendChild(th);
        sponsors.appendChild(th1);
        sponsors.appendChild(th2);
        sponsors.appendChild(th3);
        sponsors.appendChild(th4);
        sponsors.appendChild(th5);
        sponsors.appendChild(th6);
        sponsors.appendChild(th7);
        sponsors.appendChild(th8);
        sponsors.appendChild(th9);

/**************************FIRE COURSE***********************************/
// {
//         const fireCourse = document.createElement("div");
//         fireCourse.setAttribute("id","fireCourse");
//         const fireCourseIcon = document.createElement("div");
//         fireCourseIcon.setAttribute("id","fireCourseIcon");
//         const fireCourseText = document.createElement("div");
//         fireCourseText.setAttribute("id","fireCourseText");
//         fireCourseText.textContent="Szkolenia przeciwpożarowe";
//         servicesDivs.appendChild(fireCourse);
//         fireCourse.appendChild(fireCourseIcon);
//         fireCourse.appendChild(fireCourseText);
// }     
        
//         fireCourse.addEventListener("click",function(){
               
//                 if(!isExisting){
//                 const fireCourseInformation = document.createElement("div");
//                 fireCourseInformation.setAttribute("id","fireCourseInformation");
//                 fireCourse.appendChild(fireCourseInformation);
//                 fireCourseInformation.textContent="W trakcie szkoleń PPOŻ zdobędziesz praktyczne umiejętności oraz wiedzę teoretyczną, które są niezbędne w sytuacji zagrożenia pożarowego oraz ratowania ludzkiego życia.";
//                 isExisting=true;
//                 document.addEventListener("click",function(event){
//                         if(!fireCourseInformation.contains(event.target) && !fireCourse.contains(event.target)){
//                                 fireCourseInformation.remove();
//                                 const isDivExisting = document.querySelector('fireCourseInformation');
                                
//                                 isExisting=false;
//                         }
                
//                 }); 

//                 setTimeout(function() {
//                         fireCourseInformation.remove();
//                     }, 10000);
//                 }
      
//         });
// /**************************FIRE COURSE END***********************************/


// /**************************MEASURMENT***********************************/
// {
//         const measurement = document.createElement("div");
//         measurement.setAttribute("id","measurement");
//         const measurementIcon = document.createElement("div");
//         measurementIcon.setAttribute("id","measurementIcon");
//         const measurementText = document.createElement("div");
//         measurementText.setAttribute("id","measurementText");
//         measurementText.textContent="Pomiary środowiska pracy";
//         servicesDivs.appendChild(measurement);
//         measurement.appendChild(measurementIcon);
//         measurement.appendChild(measurementText);
// }
//         measurement.addEventListener("click",function(){
                
//                 if(!isExisting){
                        
//                 const measurementInformation = document.createElement("div");
//                 measurementInformation.setAttribute("id","measurementInformation");
//                 measurement.appendChild(measurementInformation);
//                 measurementInformation.textContent="Specjalizujemy się w wykonywaniu pomiarów środowiska pracy, bazując na obowiązujących regulacjach prawnych. Oferujemy pełny zakres badań czynników szkodliwych i uciążliwych w środowisku pracy, w tym pomiary natężenia oświetlenia.";
//                 isExisting=true;
//                 document.addEventListener("click",function(event){
//                         if(!measurementInformation.contains(event.target) && !measurement.contains(event.target)){
//                                 measurementInformation.remove();
//                                 const isDivExisting1 = document.querySelector('measurementInformation');
                                
//                                 isExisting=false;
                                
//                         }
//                 });
//                 setTimeout(function() {
//                         measurementInformation.remove();
//                     }, 10000);
//                 }
                
                
//         });

// /**************************MEASURMENT END***********************************/


// /**************************BHP***********************************/
// {
//         const BHP = document.createElement("div");
//         BHP.setAttribute("id","BHP");
//         const BHPIcon = document.createElement("div");
//         BHPIcon.setAttribute("id","BHPIcon");
//         const BHPText = document.createElement("div");
//         BHPText.setAttribute("id","BHPText");
//         BHPText.textContent="Szkolenia BHP";
//         servicesDivs.appendChild(BHP);
//         BHP.appendChild(BHPIcon);
//         BHP.appendChild(BHPText);
// }

//         BHP.addEventListener("click",function(){
                
//                 if(!isExisting){
                       
//                 const BHPInformation = document.createElement("div");
//                 BHPInformation.setAttribute("id","BHPInformation");
//                 BHP.appendChild(BHPInformation);
//                 BHPInformation.textContent="Oferujemy pełną gamę szkoleń w zakresie BHP (wstępne, oraz okresowe dla wszystkich grup pracowniczych). Jeśli jesteś zainteresowany szkoleniem na odległość, możesz połączyć się z nami z dowolnego miejsca online, a my udzielimy pełnowartościowego, unikatowego szkolenia BHP, z wykorzystaniem profesjonalnych prezentacji multimedialnych.";
//                 isExisting=true;
//                 document.addEventListener("click",function(event){
//                         if(!BHPInformation.contains(event.target) && !BHP.contains(event.target)){
//                                 BHPInformation.remove();
//                                 const isDivExisting2 = document.querySelector('BHPInformation');
                               
//                                 isExisting=false;
                             
//                         }
//                 });
//                 setTimeout(function() {
//                         BHPInformation.remove();
//                     }, 10000);
//                 }
                
                
//         });
// /**************************BHP END***********************************/


// /**************************OUTSOURCING***********************************/
// {
//         const outsourcing = document.createElement("div");
//         outsourcing.setAttribute("id","outsourcing");
//         const outsourcingIcon = document.createElement("div");
//         outsourcingIcon.setAttribute("id","outsourcingIcon");
//         const outsourcingText = document.createElement("div");
//         outsourcingText.setAttribute("id","outsourcingText");
//         outsourcingText.textContent="Outsourcing";
//         servicesDivs.appendChild(outsourcing);
//         outsourcing.appendChild(outsourcingIcon);
//         outsourcing.appendChild(outsourcingText);
// }

//         outsourcing.addEventListener("click",function(){
                
//                 if(!isExisting){
                       
//                 const outsourcingInformation = document.createElement("div");
//                 outsourcingInformation.setAttribute("id","outsourcingInformation");
//                 outsourcing.appendChild(outsourcingInformation);
//                 outsourcingInformation.textContent="Nawiązujemy współpracę z firmami, oferując wykonywanie pełnego zakresu zadań służby BHP, w celu wypełnienia przepisów związanych z bezpieczeństwem i higieną pracy.";
//                 isExisting=true;
//                 document.addEventListener("click",function(event){
//                         if(!outsourcingInformation.contains(event.target) && !outsourcing.contains(event.target)){
//                                 outsourcingInformation.remove();
//                                 const isDivExisting3 = document.querySelector('outsourcingInformation');
                                
//                                 isExisting=false;
                               
//                         }
//                 });
//                 setTimeout(function() {
//                         outsourcingInformation.remove();
//                     }, 10000);
//                 }
                
                
//         });
// /**************************OUTSOURCING END***********************************/


// /**************************BHP SUPERVISING***********************************/
// {
//         const bhpSupervising = document.createElement("div");
//         bhpSupervising.setAttribute("id","bhpSupervising");
//         const bhpSupervisingIcon = document.createElement("div");
//         bhpSupervisingIcon.setAttribute("id","bhpSupervisingIcon");
//         const bhpSupervisingText = document.createElement("div");
//         bhpSupervisingText.setAttribute("id","bhpSupervisingText");
//         bhpSupervisingText.textContent="Nadzór BHP na budowach";
//         servicesDivs.appendChild(bhpSupervising);
//         bhpSupervising.appendChild(bhpSupervisingIcon);
//         bhpSupervising.appendChild(bhpSupervisingText);
// }

//         bhpSupervising.addEventListener("click",function(){
                
//                 if(!isExisting){
                        
//                 const bhpSupervisingInformation = document.createElement("div");
//                 bhpSupervisingInformation.setAttribute("id","bhpSupervisingInformation");
//                 bhpSupervising.appendChild(bhpSupervisingInformation);
//                 bhpSupervisingInformation.textContent="Od wielu lat, z sukcesami sprawujemy kompleksowy nadzór BHP nad budowami w Polsce, oraz na terenie Unii Europejskiej. Uczestniczymy w sporządzaniu planu BIOZ, przeprowadzamy kontrolę warunków pracy, analizujemy i oceniamy ryzyko, w podejmowanych pracach na terenie obsługiwanych budów. Oferujemy także sporządzanie wszelkiej niezbędnej dokumentacji związanej z procesem.";
//                 isExisting=true;
//                 document.addEventListener("click",function(event){
//                         if(!bhpSupervisingInformation.contains(event.target) && !bhpSupervising.contains(event.target)){
//                                 bhpSupervisingInformation.remove();
//                                 const isDivExisting4 = document.querySelector('bhpSupervisingInformation');
                                
//                                 isExisting=false;
                                
//                         }
//                 });
//                 setTimeout(function() {
//                         bhpSupervisingInformation.remove();
//                     }, 10000);
//                 }
                
                
//         });
// /**************************BPH SUPERVISING END***********************************/
        

// /**************************DOCUMENTATION***********************************/
// {
//         const documentation = document.createElement("div");
//         documentation.setAttribute("id","documentation");
//         const documentationIcon = document.createElement("div");
//         documentationIcon.setAttribute("id","documentationIcon");
//         const documentationText = document.createElement("div");
//         documentationText.setAttribute("id","documentationText");
//         documentationText.textContent="Dokumentacja BHP i PPOŻ";
//         servicesDivs.appendChild(documentation);
//         documentation.appendChild(documentationIcon);
//         documentation.appendChild(documentationText);
// }

//         documentation.addEventListener("click",function(){
                
//                 if(!isExisting){
                        
//                 const documentationInformation = document.createElement("div");
//                 documentationInformation.setAttribute("id","documentationInformation");
//                 documentation.appendChild(documentationInformation);
//                 documentationInformation.textContent="Przyjmujemy zlecenia na opracowanie: instrukcji BHP dla maszyn i urządzeń, oceny ryzyka zawodowego, instrukcję bezpieczeństwa pożarowego, wykonanie pełnej dokumentacji powypadkowej.";
//                 isExisting=true;
//                 document.addEventListener("click",function(event){
//                         if(!documentationInformation.contains(event.target) && !documentation.contains(event.target)){
//                                 documentationInformation.remove();
//                                 const isDivExisting5 = document.querySelector('documentationInformation');
                                
//                                 isExisting=false;
                              
//                         }
//                 });

//                 setTimeout(function() {
//                         documentationInformation.remove();
//                     }, 10000);
//                 }
                
                
//         });
// /**************************DOCUMENTATION END***********************************/


// /**************************FIRST AID***********************************/

//         const firstAid = document.createElement("div");
//         firstAid.setAttribute("id","firstAid");
//         const firstAidIcon = document.createElement("div");
//         firstAidIcon.setAttribute("id","firstAidIcon");
//         const firstAidText = document.createElement("div");
//         firstAidText.setAttribute("id","firstAidText");
//         firstAidText.textContent="Szkolenia z pierwszej pomocy";
//         servicesDivs.appendChild(firstAid);
//         firstAid.appendChild(firstAidIcon);
//         firstAid.appendChild(firstAidText);


//         firstAid.addEventListener("click",function(){
//                 if(!isExisting){
                        
//                 const firstAidInformation = document.createElement("div");
//                 firstAidInformation.setAttribute("id","firstAidInformation");
//                 firstAid.appendChild(firstAidInformation);
//                 firstAidInformation.textContent="Szkolenia organizowane przez BAJLEX przeznaczone są dla każdej grupy zawodowej, a także osób indywidualnych chcących uzyskać wiedzę w zakresie udzielania pierwszej pomocy. Dbając o jakość szkoleń, do ich prowadzenia wykorzystujemy prezentacje multimedialne, fantomy oraz defibrylator AED.";
//                 isExisting=true;
               
//                 document.addEventListener("click",function(event){
//                         if(!firstAidInformation.contains(event.target) && !firstAid.contains(event.target)){
//                                 firstAidInformation.remove();
//                                 const isDivExisting6 = document.querySelector('firstAidInformation');
                                
//                                 isExisting=false;
                                
//                         }
//                 });

//                 setTimeout(function() {
//                         firstAidInformation.remove();
//                     }, 10000);
//                 }
                
                
//         });

// /**************************FIRST AID END***********************************/


        const nextIcon = document.createElement("button");
        nextIcon.setAttribute("id","nextIcon");
        offerSite.appendChild(nextIcon);
        if (mediaQuery.matches) {
                nextIcon.style.position="fixed";
                nextIcon.style.bottom="3%";
                nextIcon.style.transform="translateY(-5%)";
                nextIcon.style.left="50%";
                nextIcon.style.transform="translateX(-50%)";
                nextIcon.style.animation="none";
                nextIcon.style.opacity="0.8";
              }
        nextIcon.addEventListener("click",function(){
                offerSite.style.justifyContent="space-evenly";
                nextIcon.style.display="none";
                const nextSection = document.createElement("div");
                nextSection.setAttribute("id","nextSection");
                document.body.appendChild(nextSection);     
                const newH = document.createElement('div');
                newH.setAttribute("id","newH");
                newH.textContent="Współpracując z nami zyskujesz:";
                nextSection.appendChild(newH);
                if(mediaQuery.matches){
                        nextSection.remove();
                }
                const advantages = document.createElement('div');
                advantages.setAttribute("id","advantages");
                nextSection.appendChild(advantages);

                const advantage1 = document.createElement('div');
                        advantage1.setAttribute("id","advantage1");
                        const advImg = document.createElement('div');
                        const advText = document.createElement('div');
                        advImg.setAttribute("id","advImg");
                        advText.setAttribute("id","advText");
                        advText.textContent="Szybką realizacje usług";

                        advantage1.appendChild(advImg);
                        advantage1.appendChild(advText);
                        advantages.appendChild(advantage1);
                      
                const advantage2 = document.createElement('div');
                        advantage2.setAttribute("id","advantage2");
                        const advImg1 = document.createElement('div');
                        const advText1 = document.createElement('div');
                        advantage2.appendChild(advImg1);
                        advantage2.appendChild(advText1);

                        advImg1.setAttribute("id","advImg1");
                        advText1.setAttribute("id","advText1");
                        advText1.textContent="Wysoki poziom świadczonych usług";
                        advantages.appendChild(advantage2);

                const advantage3 = document.createElement('div');
                        advantage3.setAttribute("id","advantage3");
                        const advImg2 = document.createElement('div');
                        const advText2 = document.createElement('div');
                        advantage3.appendChild(advImg2);
                        advantage3.appendChild(advText2);
                        advantages.appendChild(advantage3);

                        advImg2.setAttribute("id","advImg2");
                        advText2.setAttribute("id","advText2");
                        advText2.textContent="Wiedzę i doświadczenie specjalisty ds. BHP";

                        if (mediaQuery.matches) {
                                newH.style.display="none";
                                advantages.style.display="none";
                                advantage1.display="none";

                              }  
                const newSection = document.createElement("div");
                newSection.setAttribute("id", "new-section");
                      
                const newHeader = document.createElement("h1");
                newHeader.setAttribute("id","newHeader");
                newSection.appendChild(newHeader);
                newHeader.textContent="W celu zapoznania się ze szczegółową ofertą dostosowaną do potrzeb państwa firmy, prosimy o kontakt";
                       
                const newButton = document.createElement("button");
                newButton.setAttribute("id","newButton");
                newSection.appendChild(newButton);
                newButton.textContent="Skontaktuj się!";
                newButton.addEventListener("click",function(){
                        window.location.href="./kontakt.html";
                });
                
                const footer = document.createElement("div");
                footer.setAttribute("id","footer")
                newSection.appendChild(footer);

                        const socialMedia = document.createElement("div");
                        socialMedia.setAttribute("id","socialMedia");
                        footer.appendChild(socialMedia);

                                const facebook = document.createElement("div");
                                        facebook.setAttribute("id","facebook");
                                        

                                        facebook.addEventListener("click",function(){
                                                window.open("https://www.facebook.com/profile.php?id=100076476510012&sk=services", "_blank");
                                             });

                                const instagram = document.createElement("div");
                                        instagram.setAttribute("id","instagram");

                                        instagram.addEventListener("click",function(){
                                                window.open("https://www.instagram.com/bajlex_bhp/", "_blank");
                                             });
                        
                                socialMedia.appendChild(facebook);
                                socialMedia.appendChild(instagram);

                const copyright = document.createElement("div");
                        copyright.setAttribute("id","copyright");
                                copyright.textContent="Bajlex wszystkie prawa zastrzeżone ©";
                                if (mediaQuery.matches) {
                                        newHeader.style.fontSize="1.2rem";

                                        newHeader.style.width="100%";
                                        newHeader.style.height="max-content";
                                        newButton.style.width="200px";
                                        copyright.style.fontSize="1rem";
                                        newSection.style.justifyContent="space-evenly";
                                      }
                        footer.appendChild(copyright);
                
                window.addEventListener("scroll", function() {
                if ((window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight)  {
                document.body.appendChild(newSection);
                window.removeEventListener("scroll", arguments.callee);
                }
                
        });
                

              
        });
   

    logo1.addEventListener("click",function(){
        
    });
});

