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




let navbar = document.querySelector('.nav-list');
let menuBTN = document.querySelector('.menuBTN');
let iconClosed = document.querySelector('.icon-closed');

menuBTN.addEventListener('click', ()=> {
    navbar.classList.add('show');
});

iconClosed.addEventListener('click', ()=> {
    navbar.classList.remove('show');
});



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

function calculateCalories() {
    // Get weight and duration values from input fields
    var weight = document.getElementById("cal_weight").value;
    var duration = document.getElementById("duration").value;

    // Validate inputs
    if (weight === "" || duration === "") {
        alert("Please enter your weight and workout duration.");
        return;
    }

    // Calculate calories burned (Assuming a simple formula, actual formula may vary)
    var caloriesBurned = (weight * 2.2) * (duration / 60) * 4.184; // Example formula

    // Display the result
    var resultDiv = document.getElementById("calResult");
    resultDiv.innerHTML = "<p>Calories Burned: " + caloriesBurned.toFixed(2) + " calories</p>";
}


/*contact form*/

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone_number: document.getElementById("phone_number").value,
        address: document.getElementById("address").value,
        message: document.getElementById("form-MSG").value,
    };

    const serviceID ="service_blbwqt9";
    const templateID ="template_jnezkng";

    emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("phone_number").value = '';
        document.getElementById("address").value = '';
        document.getElementById("form-MSG").value = '';
        console.log(res);
        alert("Your message was sent successfully");
    })
    .catch((err) => console.log(err));
}