var btn = document.querySelector(".btn");
btn.addEventListener("click", calBMI);


const span = document.querySelector("span");
const data = document.querySelector(".data");
const reset = document.querySelector(".reset");

reset.addEventListener("click", function () {
      span.style.display = "none";
      data.style.display = "none";
      
})



function calBMI () {
      var weight = document.querySelector(".weight");
      var height = document.querySelector(".height");
      var output = document.querySelector(".output");
      var data = document.querySelector(".data");
      var weightV = weight.value;
      var heightV = height.value;

      if(weightV > 0 && heightV > 0){ 
      var BMI = weightV/(heightV/100*heightV/100)
      BMI = Math.floor(BMI);
      output.innerHTML = BMI;
      }

      if (BMI < 18.5) {
            data.innerHTML = "UnderWeight";
            output.style.color = "red";
      } else if (BMI > 18.5 && BMI < 25.5) {
            data.innerHTML = "Normal";
            output.style.color = "green";
      } else if (BMI > 25.5) {
            data.innerHTML = "OverWeight";
            output.style.color = "red";
      }
}

