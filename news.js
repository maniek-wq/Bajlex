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
