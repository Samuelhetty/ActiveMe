function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    // Check if height and weight are valid numbers
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerHTML = "Please provide valid height and weight values.";
        return;
    }

    // Calculate BMI
    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    // Display the result
    document.getElementById('result').innerHTML = "Your BMI is: " + bmi;
}