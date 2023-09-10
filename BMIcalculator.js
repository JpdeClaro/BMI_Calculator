
function calculateBMI() {
    // Inputs Here:
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);


    // Calcucating the BMI
    //checks if the value is a valid number or not NaN.
    if (!isNaN (weight) && !isNaN (height) && height > 0){
        let bmi = weight / (height * height);
        //BMI Range with Result Displayed
        if(bmi >= 18.5 && bmi <= 24.9){
            let resultElement = document.getElementById('addResult');
        resultElement.innerHTML = `Your BMI is: ${bmi.toFixed(2)}` + ' it means that you are NORMAL ';

        }else if (bmi < 16){
            let resultElement = document.getElementById('addResult');
            resultElement.innerHTML = `Your BMI is: ${bmi.toFixed(2)}` + ' it means that you are "Severe Thinness".';

        }else if (bmi >= 16 && bmi <= 17){
            let resultElement = document.getElementById('addResult');
            resultElement.innerHTML = `Your BMI is: ${bmi.toFixed(2)}` + ' it means that you are "Moderate Thinness".';

        }else if (bmi >= 17.1 && bmi <= 18.4){
            let resultElement = document.getElementById('addResult');
            resultElement.innerHTML = `Your BMI is: ${bmi.toFixed(2)}` + ' it means that you are "Mid Thiness".';

        }else if (bmi >= 25.1 && bmi <= 30){
            let resultElement = document.getElementById('addResult');
            resultElement.innerHTML = `Your BMI is: ${bmi.toFixed(2)}` + ' it means that you are "Overweight".';

        }else if (bmi >= 30.1 && bmi <= 35){
            let resultElement = document.getElementById('addResult');
            resultElement.innerHTML = `Your BMI is: ${bmi.toFixed(2)}` + ' it means that you are "Obese Class 1".';

        }else if (bmi >= 35.1 && bmi <= 40){
            let resultElement = document.getElementById('addResult');
            resultElement.innerHTML = `Your BMI is: ${bmi.toFixed(2)}` + ' it means that you are "Obese Class 2".';

        }else if (bmi >= 40.1){
            let resultElement = document.getElementById('addResult');
            resultElement.innerHTML = `Your BMI is: ${bmi.toFixed(2)}` + ' it means that you are "Obese Class 3".';

        }
        
    } else {
        alert('Please enter valid number')
    }

};