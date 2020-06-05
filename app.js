function calculateBmi () {
    const name = document.getElementById("name");
    const weightVal = document.getElementById("weight");
    const heightVal = document.getElementById("height");
    const result = document.querySelector("#result");

    const weight = parseFloat(weightVal.value);
    const height = parseFloat(heightVal.value);
    
    let bmi = (weight / (height * height)).toFixed(2);

       /* if (bmi <= 18.5) {
            console.log("Underweight");
        } else if ( bmi = 18.5 && bmi < 24.9) {
            console.log("Normal weight");
        } else if (bmi = 25 && bmi < 29.9) {
            console.log("Overweight");
        } else (bmi >= 30 )  
            console.log("Obesity"); */
       

    result.innerHTML = ` ${name.value}'s BMI is ${bmi}. You result is`

}
