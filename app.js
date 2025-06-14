let btn = document.querySelector("#searchbar");
let inp = document.querySelector("#mail");

btn.onclick = function () {
  if (inp.value.trim() !== "") {
    
    window.open(`index1.html`, '_blank');
  } else {
   
    alert("Please enter a value before proceeding.");
  }
};
