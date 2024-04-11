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
    navbar.classList.add('active');
});

iconClosed.addEventListener('click', ()=> {
    navbar.classList.remove('active');
});


/*login/sigup*/
// Function to handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("usernameLogin").value;
    let password = document.getElementById("passwordLogin").value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Login failed');
        }
    })
    .then(data => {
        alert("Login successful!");
        // Redirect to user dashboard or perform other actions
    })
    .catch(error => {
        alert("Invalid username or password!");
    });
});

// Function to handle signup form submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("emailSignup").value; // Get the email value
    let password = document.getElementById("passwordSignup").value;

    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: email, email, password }) // Send email as username
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Signup failed');
        }
    })
    .then(data => {
        alert("Signup successful! You can now login.");
        // Clear the signup form after successful signup
        document.getElementById("signupForm").reset();
    })
    .catch(error => {
        alert("Username (email) already exists!");
    });
});


/* BMI Calculator*/

var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    countBmi();
  }

}


function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
     }else if(35<=bmi){
    result = 'Extremely obese';
     }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
document.querySelector("#bmi-result").innerHTML = bmi.toFixed(2);

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

/* Initialize Swiper */

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      centeredSlides: false,
      slidesPerGroupSkip: 1,
      grabCursor: true,
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        769: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});