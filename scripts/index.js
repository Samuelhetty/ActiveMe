let wrapper = document.querySelector('.wrapper');
let loginlink = document.querySelector('.login-link');
let registerlink = document.querySelector('.register-link');
let btnPopup = document.querySelector('.btnLogin-popup');
let iconClose = document.querySelector('.icon-close');


registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});


btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

let nav = document.querySelector('.nav-list');

document.querySelector(('#menu-btn').onclick= ()=> {
    nav-list.classList.add('active');
});

/* login/signup */
 // Dummy database for storing user information
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

/* BMI Calculator*/

function calculateBMI() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    if (height > 0 && weight > 0) {
        const bmi = weight/((height/100) ** 2);
        const bmiResult = Your Body Mass Index is: ${bmi.tofixed(2)};
        document.getElementById("result").textContent = bmiResult;
    } else {
        document.getElementById("result").textContent = "Please enter valid Values.";
    }
}