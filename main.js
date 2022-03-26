const movieArticles = document.querySelectorAll(".movie-info");
const movieBtns = document.querySelectorAll(".cool-grid img");



movieBtns.forEach((e) => {
  e.addEventListener("click", () => {
    // https://stackoverflow.com/questions/24665602/scrollintoview-scrolls-just-too-far/56391657#56391657
    const yOffset = -150;
    const element = document.querySelector(`.${e.id}`);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });

    

    setTimeout(() => {
      element.querySelector("img").classList.add("shakeThis");
    }, 1000);

    setTimeout(() => {
      element.querySelector("img").classList.remove("shakeThis");
    }, 3000);
    
    // element.querySelector("img").classList.remove("shakeThis");

    let audio = new Audio("assets/siuuu.mp3");
    audio.play();
  });
});

const arrowEl = document.querySelector(".slider i");
const moviesGrid = document.querySelector(".cool-grid");

arrowEl.addEventListener("click", () => {
  const yOffset = -150;
  const y = moviesGrid.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
});

// const showDescBtns = document.querySelectorAll(".movie-info button");
// showDescBtns.forEach(e => {
//   let movieInfoDiv = e.parentNode.querySelector("div");
//   movieInfoDiv.style.visibility = "hidden";
//   e.addEventListener("click", () => {
//     if (movieInfoDiv.style.visibility == "hidden")
//       movieInfoDiv.style.visibility = "visible";
//     else
//     movieInfoDiv.style.visibility = "hidden";
//   });

// });

const descFightClubImg = document.querySelector(".fightClub img");
let nortonInterval;
let bullTimeout;

descFightClubImg.addEventListener("mouseover", () => {
  clearInterval(nortonInterval);
  clearTimeout(bullTimeout);

  descFightClubImg.src = "assets/images/nortonXdurden.jpg";
  descFightClubImg.classList.add("shakeForever");
  
  
});

descFightClubImg.addEventListener("mouseleave", () => {
  descFightClubImg.src = "assets/images/norton.jpg";
  descFightClubImg.classList.remove("shakeForever");
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


