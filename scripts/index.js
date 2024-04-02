let home = document.querySelector(".home")
let wrapper = document.querySelector('.wrapper');
let loginlink = document.querySelector('.login-link');
let registerlink = document.querySelector('.register-link');
let btnPopup = document.querySelector('#form-open');
let btnPopup1 = document.querySelector('#form-open1');
let iconClose = document.querySelector('.icon-close');


registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});


btnPopup.addEventListener('click', ()=> {
    home.classList.add('show');
});

btnPopup1.addEventListener('click', ()=> {
    home.classList.add('show');
});

iconClose.addEventListener('click', ()=> {
    home.classList.remove('show');
});




/*let nav = document.querySelector('.nav-list');

document.querySelector(('#menu-btn').onclick= ()=> {
    nav-list.classList.add('active');
});*/

/* login/signup */
 // Dummy database for storing user information
 function loginSignup() {
    let users = [];

 // Function to handle login form submission
 document.getElementById("form-box login").addEventListener("submit", function(event) {
     event.preventDefault();
     let username = document.getElementById("usernameLogin").value;
     let password = document.getElementById("passwordLogin").value;
     let user = users.find(u => u.username === username && u.password === password);
     if (user) {
         alert("Login successful!");
         // Redirect to user dashboard or perform other actions
     } else {
         alert("Invalid username or password!");
     }
 });

 // Function to handle signup form submission
 document.getElementById("form-box register").addEventListener("submit", function(event) {
     event.preventDefault();
     let username = document.getElementById("usernameSignup").value;
     let email = document.getElementById("emailSignup").value;
     let password = document.getElementById("passwordSignup").value;
     let existingUser = users.find(u => u.username === username);
     if (existingUser) {
         alert("Username already exists!");
     } else {
         users.push({ username: username, email: email, password: password });
         alert("Signup successful! You can now login.");
         // Clear the signup form after successful signup
         document.getElementById("signupForm").reset();
     }
 });
}

/* BMI Calculator*/

function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    // Check if height and weight are valid numbers
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('bmi-result').innerHTML = "Please provide valid height and weight values.";
        return;
    }

    // Convert height to meters (from centimeters)
    height = height / 100; // converting cm to meters

    // Calculate BMI
    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    // Display the result
    document.getElementById('bmi-result').innerHTML = "Your BMI is: " + bmi;
}

/* workout */

document.getElementById("searchButton").addEventListener("click", async () => {
    const muscleGroup = document.getElementById("searchInput").value;
    const url = `https://work-out-api1.p.rapidapi.com/search?Muscles=${encodeURIComponent(muscleGroup)}&type=video`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'adb293fa25msh1419109d969e210p186661jsna332c01df47d',
            'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        document.getElementById("result").innerHTML = result;
    } catch (error) {
        console.error(error);
    }
});

/*Calories Calculater*/

/*function calculateCalories() {
    const weight = document.getElementById('weight').value;
    const duration = document.getElementById('duration').value;

    const caloriesBurned = 5 * weight * duration;

    const calResult = document.getElementById('calResult');
    calResult.innerHTML = <p>Calories Burned: ${caloriesBurned} kcal</p>;
}*/


function calculateCalories() {
    var weight = parseFloat(document.getElementById('weight').value);
    var duration = parseFloat(document.getElementById('duration').value);

    // Check if weight and duration are valid numbers
    if (isNaN(weight) || isNaN(duration)) {
        alert("Please provide valid weight and duration values.");
    }
    else {
        const caloriesBurned = 5 * weight * duration;
        const calResult = document.getElementById('calResult');
        calResult.innerHTML = <p>Calories Burned: ${caloriesBurned.toFixed(2)} kcal</p>;
    }

}
