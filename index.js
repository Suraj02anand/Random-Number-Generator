
let minRange = document.getElementById("minRange");
let maxRange = document.getElementById("maxRange");
let selectTag = document.getElementById("type");

document.querySelector('form').addEventListener('submit',(e)=>{
    let selectedOption = selectTag.options[selectTag.selectedIndex];
    if(isNaN(parseInt(minRange.value)) || parseInt(isNaN(maxRange.value))){
        alert('Invalid Format')
    }
    if (minRange.value >= maxRange.value) {
        alert("Invalid Range");
        e.preventDefault();
    } else {
        localStorage.setItem("minVal", minRange.value);
        localStorage.setItem("maxVal", maxRange.value);
        localStorage.setItem("type", selectedOption.value);
      }
})
