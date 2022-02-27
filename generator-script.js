let button = document.getElementById("generate");
let spinner = document.getElementById("spinner");
let random = document.getElementById("random");

let minVal = parseInt(localStorage.getItem("minVal"));
let maxVal = parseInt(localStorage.getItem("maxVal"));
let type = parseInt(localStorage.getItem("type"));

console.log("minVal", minVal);
console.log("maxVal", maxVal);
console.log("type", type);

button.addEventListener("click", () => {
  random.style.display = "none";
  spinner.style.display = "flex";

  setTimeout(() => {
    spinner.style.display = "none";
    let randomNumber = Math.floor(Math.random() * (maxVal - minVal))  + minVal + 1;
    if (type == 1) {
      console.log("Inside Type 1");
      randomNumber = randomNumber;
    } else if (type == 2) {
      if (randomNumber % 2 == 0) {
        console.log("Inside Type 3");
        randomNumber += 1;
      }
    } else if (type == 3) {
      if (randomNumber % 2 != 0) {
        console.log("Inside Type 3");
        randomNumber += 1;
      }
    }
    random.style.display = "flex";

    random.innerHTML = randomNumber.toString();
    console.log(randomNumber);
  }, 700);
});
