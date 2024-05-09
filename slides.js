let slideIndices = {
  Athens: 1,
  Prague: 1,
  Berlin: 1,
};

function showSlides(slideName, n) {
  let slides = document.getElementsByClassName(`${slideName}_slides`);
  let dots = document.getElementsByClassName(`${slideName}_dot`);
  let slideIndex = slideIndices[slideName];

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


// Thumbnail image controls (example for "Athens")
function currentSlide_Athens(n) {
  showSlides("Athens", (slideIndices.Athens = n));
}



// Thumbnail image controls (example for "Athens")
function currentSlide_Prague(n) {
  showSlides("Prague", (slideIndices.Prague = n));
}



// Thumbnail image controls (example for "Athens")
function currentSlide_Berlin(n) {
  showSlides("Berlin", (slideIndices.Berlin = n));
}


showSlides("Athens", slideIndices.Athens); // Show first slide of Athens
showSlides("Prague", slideIndices.Athens); // Show first slide of Athens
showSlides("Berlin", slideIndices.Athens); // Show first slide of Athens
