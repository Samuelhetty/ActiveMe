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
        document.getElementById('result').innerHTML = "Please provide valid height and weight values.";
        return;
    }

    // Convert height to meters (from centimeters)
    height = height / 100; // converting cm to meters

    // Calculate BMI
    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    // Display the result
    document.getElementById('result').innerHTML = "Your BMI is: " + bmi;
}

/* workout */

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultDiv = document.getElementById('result');

    searchButton.addEventListener('click', async () => {
        const name = searchInput.value.trim();
        if (name === '') {
            resultDiv.textContent = 'Please enter a name to search.';
            return;
        }

        const url = `https://exercisedb.p.rapidapi.com/exercises/name/${name}?limit=10`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'adb293fa25msh1419109d969e210p186661jsna332c01df47d',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            if (data.length === 0) {
                resultDiv.textContent = 'No results found.';
                return;
            }
            resultDiv.innerHTML = ''; // Clear previous results
            data.forEach(item => {
                const exerciseName = item.name;
                const exerciseDescription = item.description || 'No description available';
                const videos = item.videos || [];
                const exerciseDiv = document.createElement('div');
                exerciseDiv.innerHTML = `<strong>${exerciseName}</strong><br>${exerciseDescription}<br>`;
                if (videos.length > 0) {
                    exerciseDiv.innerHTML += '<strong>Videos:</strong><br>';
                    videos.forEach(video => {
                        exerciseDiv.innerHTML += `<a href="${video.url}" target="_blank">${video.title}</a><br>`;
                    });
                }
                exerciseDiv.innerHTML += '<br>';
                resultDiv.appendChild(exerciseDiv);
            });
        } catch (error) {
            console.error(error);
            resultDiv.textContent = 'An error occurred while fetching data.';
        }
    });
});