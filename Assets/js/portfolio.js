let slidePosition = 0;
slideShow();

function slideShow() {
    let i;
    let slides = document.getElementsByClassName("theSlides");
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    slidePosition++;
    if (slidePosition > slides.length) {slidePosition = 1}
    slides[slidePosition-1].style.display = "flex";
    setTimeout(slideShow, 5000); // Change image every 2 seconds

}

