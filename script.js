const checkBtn = document.getElementById('Check-Btn');
const firstContainer = document.getElementById("container");
const logo = document.getElementById('logo');

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


    logo1.setAttribute("id","logo1");
    mid.setAttribute("id","mid");
    contactBtn.setAttribute("id","contactBtn");

    navbar.appendChild(logo1);
    navbar.appendChild(mid);
    navbar.appendChild(contactBtn);
    
    contactBtn.textContent="Skontaktuj się!";
    document.body.style.margin="0";

    const mainPageWriting = document.createElement("a");
    mainPageWriting.textContent="Strona główna";
    mainPageWriting.href="#";


    const serivceWriting = document.createElement("a");
    serivceWriting.textContent="Usługi";
    serivceWriting.href="#";


    const contactWriting = document.createElement("a");
    contactWriting.textContent="Kontakt";
    contactWriting.href="#";

    mid.appendChild(mainPageWriting);
    mid.appendChild(serivceWriting);
    mid.appendChild(contactWriting);

    const newContent = document.createElement("div");
    newContent.setAttribute("id","newContent");
    newScreen.appendChild(newContent);

    const newContentLogo = document.createElement("div");
    newContentLogo.setAttribute("id","newContentLogo");

    const newContentText = document.createElement("div");
    newContentText.setAttribute("id","newContentText");

    const slideDownIcon = document.createElement("button");
    slideDownIcon.setAttribute("id","slideDownIcon");

    newContent.appendChild(newContentLogo);
    newContent.appendChild(newContentText);
    newContent.appendChild(slideDownIcon);

    newContentText.textContent="Potrzebujesz profesjonalnie wykonanych pomiarów natężenia oświetlenia? Zgłoś się do nas! \n\nNasza firma oferuje pełny zakres badań przeprowadzanych przez wykwalifikowaną kadrę, bazując na obowiązujących regulacjach prawnych. Do naszych badań wykorzystujemy wzorcowane przyrządy najwyższej klasy.";


    slideDownIcon.addEventListener("click",function(){
        newContent.style.display="none";

        const offerSite = document.createElement("div");
        offerSite.setAttribute("id","offerSite");
        newScreen.appendChild(offerSite);

        const offerWriting = document.createElement("h1");
        offerWriting.setAttribute("id","offerWriting");
        offerWriting.textContent="Nasza Oferta";
        offerSite.appendChild(offerWriting);

        const servicesDivs = document.createElement("div");
        servicesDivs.setAttribute("id","servicesDivs");
        offerSite.appendChild(servicesDivs);


/**************************FIRE COURSE***********************************/
        const fireCourse = document.createElement("div");
        fireCourse.setAttribute("id","fireCourse");
        const fireCourseIcon = document.createElement("div");
        fireCourseIcon.setAttribute("id","fireCourseIcon");
        const fireCourseText = document.createElement("div");
        fireCourseText.setAttribute("id","fireCourseText");
        fireCourseText.textContent="Szkolenia przeciwpożarowe";
        servicesDivs.appendChild(fireCourse);
        fireCourse.appendChild(fireCourseIcon);
        fireCourse.appendChild(fireCourseText);
/**************************FIRE COURSE END***********************************/


/**************************MEASURMENT***********************************/
        const measurement = document.createElement("div");
        measurement.setAttribute("id","measurement");
        const measurementIcon = document.createElement("div");
        measurementIcon.setAttribute("id","measurementIcon");
        const measurementText = document.createElement("div");
        measurementText.setAttribute("id","measurementText");
        measurementText.textContent="Pomiary środowiska pracy";
        servicesDivs.appendChild(measurement);
        measurement.appendChild(measurementIcon);
        measurement.appendChild(measurementText);
/**************************MEASURMENT END***********************************/


/**************************BHP***********************************/
        const BHP = document.createElement("div");
        BHP.setAttribute("id","BHP");
        const BHPIcon = document.createElement("div");
        BHPIcon.setAttribute("id","BHPIcon");
        const BHPText = document.createElement("div");
        BHPText.setAttribute("id","BHPText");
        BHPText.textContent="Szkolenia BHP";
        servicesDivs.appendChild(BHP);
        BHP.appendChild(BHPIcon);
        BHP.appendChild(BHPText);
/**************************BHP END***********************************/


/**************************OUTSOURCING***********************************/
        const outsourcing = document.createElement("div");
        outsourcing.setAttribute("id","outsourcing");
        const outsourcingIcon = document.createElement("div");
        outsourcingIcon.setAttribute("id","outsourcingIcon");
        const outsourcingText = document.createElement("div");
        outsourcingText.setAttribute("id","outsourcingText");
        outsourcingText.textContent="Outsourcing";
        servicesDivs.appendChild(outsourcing);
        outsourcing.appendChild(outsourcingIcon);
        outsourcing.appendChild(outsourcingText);
/**************************OUTSOURCING END***********************************/


/**************************BHP SUPERVISING***********************************/
        const bhpSupervising = document.createElement("div");
        bhpSupervising.setAttribute("id","bhpSupervising");
        const bhpSupervisingIcon = document.createElement("div");
        bhpSupervisingIcon.setAttribute("id","bhpSupervisingIcon");
        const bhpSupervisingText = document.createElement("div");
        bhpSupervisingText.setAttribute("id","bhpSupervisingText");
        bhpSupervisingText.textContent="Nadzór BHP na budowach";
        servicesDivs.appendChild(bhpSupervising);
        bhpSupervising.appendChild(bhpSupervisingIcon);
        bhpSupervising.appendChild(bhpSupervisingText);
/**************************BPH SUPERVISING END***********************************/
        

/**************************DOCUMENTATION***********************************/
        const documentation = document.createElement("div");
        documentation.setAttribute("id","documentation");
        const documentationIcon = document.createElement("div");
        documentationIcon.setAttribute("id","documentationIcon");
        const documentationText = document.createElement("div");
        documentationText.setAttribute("id","documentationText");
        documentationText.textContent="Dokumentacja BHP i PPOŻ";
        servicesDivs.appendChild(documentation);
        documentation.appendChild(documentationIcon);
        documentation.appendChild(documentationText);
/**************************DOCUMENTATION END***********************************/


/**************************FIRST AID***********************************/
        const firstAid = document.createElement("div");
        firstAid.setAttribute("id","firstAid");
        const firstAidIcon = document.createElement("div");
        firstAidIcon.setAttribute("id","firstAidIcon");
        const firstAidText = document.createElement("div");
        firstAidText.setAttribute("id","firstAidText");
        firstAidText.textContent="Szkolenia z pierwszej pomocy";
        servicesDivs.appendChild(firstAid);
        firstAid.appendChild(firstAidIcon);
        firstAid.appendChild(firstAidText);
/**************************FIRST AID END***********************************/


        const nextIcon = document.createElement("button");
        nextIcon.setAttribute("id","nextIcon");
        offerSite.appendChild(nextIcon);
        navbar.style.boxShadow="3px 1px 6px 5px rgba(0,0,0,.25)";
    });
});