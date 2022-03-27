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
    setTimeout(() => {
      element.querySelector("img").classList.add("shakeThis");
    }, 1000);

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


/* shake each description image while hovering */
movieArticles.forEach(e => {
  let img = e.querySelector("img");
  img.addEventListener("mouseover", () => {
    img.classList.add("shakeForever");
    img.classList.remove("shakeThis");
    
  });
  img.addEventListener("mouseleave", () => {
    img.classList.remove("shakeForever");
    img.remove("shakeThis");
  });
});
//------------------------------------

/* scroll back to top btn functionality */
