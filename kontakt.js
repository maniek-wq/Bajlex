const link = document.getElementById("logo1");

link.addEventListener("click",function(){
  window.location.href="index.html";
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



