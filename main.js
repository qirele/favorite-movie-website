const movieArticles = document.querySelectorAll(".movie-info");
const movieBtns = document.querySelectorAll(".cool-grid img");


/* clicking at the movie btns result in a scroll motion towards corresponding movie description  */
movieBtns.forEach((e) => {
  e.addEventListener("click", () => {
    // https://stackoverflow.com/questions/24665602/scrollintoview-scrolls-just-too-far/56391657#56391657
    const yOffset = -150;
    const element = document.querySelector(`.${e.id}`);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });

    
    /* when we scroll down after clicking, shake the description image after 1 second */
    element.style.transition = "transform 0.5s";
    
    element.style.transform = "translateX(5000px)";

    setTimeout(() => {
      element.querySelector("img").classList.add("shakeThis");
      
      element.style.transform = "translateX(0px)";
      element.style.transform = "none";
    }, 400);

    setTimeout(() => {
      element.querySelector("img").classList.remove("shakeThis");
    }, 3000);
    
    element.querySelector("img").classList.remove("shakeThis");

    let audio = new Audio("assets/siuuu.mp3");
    audio.play();
  });
});
// ------------------------------------------------------------------



/* scroll to content ARROW ----------------------------------------*/
const arrowEl = document.querySelector(".slider i");
const moviesGrid = document.querySelector(".cool-grid");

arrowEl.addEventListener("click", () => {
  const yOffset = -150;
  const y = moviesGrid.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
});
// -------------------------------------------------------------------


/* CHANGE  fight club description IMAGE once every 2 seconds*/
const descFightClubImg = document.querySelector(".fightClub img");
let nortonInterval;
let bullTimeout;

descFightClubImg.addEventListener("mouseover", () => {
  clearInterval(nortonInterval);
  clearTimeout(bullTimeout);

  descFightClubImg.src = "assets/images/nortonXdurden.jpg";  
  
});

descFightClubImg.addEventListener("mouseleave", () => {
  descFightClubImg.src = "assets/images/norton.jpg";
  nortonInterval = setInterval(() => {changeImg()}, 2000);
});

nortonInterval = setInterval(() => {changeImg()}, 2000);

function changeImg() {
  descFightClubImg.src = "assets/images/nortonXdurden.jpg";
  descFightClubImg.classList.add("shakeThis");
  

  bullTimeout = setTimeout(() => {
    descFightClubImg.src = "assets/images/norton.jpg";
    descFightClubImg.classList.remove("shakeThis");
  }, 500);
}
// -----------------------------------------------------------------------



movieArticles.forEach(e => {

  /* shake each description image while hovering */
  let img = e.querySelector("img");
  let h1 = e.querySelector("h1");
  let p = e.querySelector("p");
  

  img.addEventListener("mouseover", () => {
    img.classList.add("shakeForever");
    img.classList.remove("shakeThis");
  });
  img.addEventListener("mouseleave", () => {
    img.classList.remove("shakeForever");
    img.classList.remove("shakeThis");
  });


  /* hide everything except button in article when toggled button */
  let toggle = e.querySelector("input");
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      img.style.opacity = "0";
      h1.style.opacity = "0";
      p.style.opacity = "0";
      
      
    } else {
      img.style.opacity = "1";
      h1.style.opacity = "1";
      p.style.opacity = "1";
      
    }
  });


});
//------------------------------------

/* scroll back to top btn functionality */
const topBtn = document.querySelector("#scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
//-----------------------------------------


/* make movie btns pressable by enter key */
movieBtns.forEach(el => {
  el.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      el.click();
    }
    
  });
});

