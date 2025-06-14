let btn = document.querySelector("#searchbar");
let inp = document.querySelector("#mail");

btn.onclick = function () {
  const inputValue = inp.value.trim();

  const isValidMobile = /^[0-9]{10}$/.test(inputValue);

  if (isValidMobile) {
    window.open(`index1.html`, '_blank');
  } else {
    alert("Please enter a valid mobile number.");
  }
};
