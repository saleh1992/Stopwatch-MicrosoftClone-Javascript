let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let span = Array.from(document.querySelectorAll("span"));
let allbtn = document.querySelector("#start-stop");
let paragrh = document.createElement("p");
let secCounter = 0;
let minCounter = 0;
let hrCounter = 0;

allbtn.addEventListener("click", () => {
  span.forEach((spanBtns) => {
    spanBtns.classList.toggle("active");
    //this manual method for toggle
    // spanBtns.getAttribute("class") == "active"?
    // spanBtns.removeAttribute("class"):
    // spanBtns.setAttribute("class", "active");
  });
  if (span[0].classList.contains("active") == false) {
    console.log("play");
    stopwatch();
    flag.removeAttribute("disabled")
    rest.removeAttribute("disabled")
  } else {
    console.log("stop");
    stopInterval();
  }
});
rest.addEventListener("click", () => {
  hour.innerHTML = "00";
  min.innerHTML = "00";
  sec.innerHTML = "00";
  secCounter = 0;
  minCounter = 0;
  hrCounter = 0;
  paragrh.innerHTML = "";
  span.forEach((restPlay) => {
    restPlay.classList.toggle("active");
  });

  stopInterval();
  flag.setAttribute("disabled","")
  rest.setAttribute("disabled","")
});
flag.addEventListener("click", () => {
  flagg();
});

function stopwatch() {
  interval = setInterval(() => {
    secCounter++;
    sec.innerHTML = "0" + secCounter;
    if (secCounter > 9) {
      sec.innerHTML = secCounter;
    }
    if (secCounter > 59) {
      secCounter = 0;
      minCounter++;
      min.innerHTML = "0" + minCounter;
    }
    if (minCounter > 9) {
      min.innerHTML = minCounter;
    }
    if (minCounter > 59) {
      minCounter = 0;
      hrCounter++;
      min.innerHTML = "0" + hrCounter;
    }
    if (hrCounter > 9) {
      min.innerHTML = hrCounter;
    }
  }, 1000);
}
function stopInterval() {
  clearInterval(interval);
}
function flagg() {
  document.body.appendChild(paragrh);
  // paragrh.innerHTML = hour.innerHTML + ":" + min.innerHTML + ":" + sec.innerHTML
  paragrh.innerHTML += `${hour.innerHTML}:${min.innerHTML}:${sec.innerHTML} <br>`;
  console.log(paragrh);
}