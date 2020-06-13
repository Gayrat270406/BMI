function calculateBmi() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  var newbmivalue = weight / (height * height);

  /* if (bmi <= 18.5) {
            console.log("Underweight");
        } else if ( bmi = 18.5 && bmi < 24.9) {
            console.log("Normal weight");
        } else if (bmi = 25 && bmi < 29.9) {
            console.log("Overweight");
        } else (bmi >= 30 )  
            console.log("Obesity"); */

  document.getElementById("result").innerHTML = "Your BMI is " + newbmivalue;
}
