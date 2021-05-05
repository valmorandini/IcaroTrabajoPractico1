var modal = document.getElementById("id01");

// funcion1 - header
window.onscroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "1rem 1rem";
    document.getElementById("logo").style.height = "9rem";
  } else {
    document.getElementById("navbar").style.padding = "3rem 1rem";
    document.getElementById("logo").style.height = "12rem";
  }
};

// funcion2 - login

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// funcion3 - rangos

openPage = (pageName, elmnt, color) => {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("rangos__tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("rangos__tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
};

document.getElementById("defaultOpen").click();

// funcion 4 - galeria

var slideIndex = 1;
showSlides(slideIndex);

plusSlides = (n) => {
  showSlides((slideIndex += n));
};

currentSlide = (n) => {
  showSlides((slideIndex = n));
};

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("galeria__item");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
