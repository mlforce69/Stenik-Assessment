const dots = document.getElementById("dots");
const moreText = document.getElementById("more");
const btnText = document.getElementById("myBtn");
const male = document.querySelectorAll(".gender-item")[0];
const female = document.querySelectorAll(".gender-item")[1];
const categories = document.querySelector(".categories ");

console.log(categories);

male.addEventListener("click", function () {
  categories.classList.toggle("visible");
});

female.addEventListener("click", function () {
  categories.classList.toggle("visible");
});

btnText.addEventListener("click", function () {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Виж повече >";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Виж по-малко >";
    moreText.style.display = "inline";
  }
});

$(document).ready(function () {
  $(".new-products").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  });
});
