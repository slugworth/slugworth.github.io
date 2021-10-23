let monthOptions = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let dateOptions = [''];
let yearOptions = [''];

function submit() {
    let doSubmit = true;

    let username = document.getElementById('form-username').value;
    let email = document.getElementById('form-email').value;
    let phone = document.getElementById('form-phone').value;
    let password = document.getElementById('form-password').value;
    let confirm = document.getElementById('form-confirm').value;
    let gender0 = document.getElementById('gender-female').checked;
    let gender1 = document.getElementById('gender-male').checked;
    let gender2 = document.getElementById('gender-other').checked;
    let month = document.getElementById('birthday-month').value;
    let date = document.getElementById('birthday-date').value;
    let year = document.getElementById('birthday-year').value;
    let music0 = document.getElementById('music0').checked;
    let music1 = document.getElementById('music1').checked;
    let music2 = document.getElementById('music2').checked;
    let music3 = document.getElementById('music3').checked;
    let music4 = document.getElementById('music4').checked;
    let music5 = document.getElementById('music5').checked;

    //Regex matching created with help from RegExr.com
    let usernameRegex = /^[a-z0-9]{4,12}$/;
    let emailRegex = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[com|net|org|edu]{2,3}$/;
    let phoneRegex = /^(\d{3})-(\d{3})-(\d{4})$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,}$/;

    let validation = document.getElementById('validation');
    validation.innerHTML = '';

    if (!username) {
        validation.innerHTML += '<p>Please enter <span class="textred">Username</span></p>';
        doSubmit = false;
    } else if (!usernameRegex.test(username)) {
        validation.innerHTML += '<p>Please enter <span class="textorange">a valid Username</span></p>';
        doSubmit = false;
    }

    if (!email) {
        validation.innerHTML += '<p>Please enter <span class="textred">Email</span></p>';
        doSubmit = false;
    } else if (!emailRegex.test(email)) {
        validation.innerHTML += '<p>Please enter <span class="textorange">a valid Email Address</span></p>';
        doSubmit = false;
    }

    if (!phone) {
        validation.innerHTML += '<p>Please enter <span class="textred">Phone Number</span></p>';
        doSubmit = false;
    } else if (!phoneRegex.test(phone)) {
        validation.innerHTML += '<p>Please enter <span class="textorange">a valid Phone Number</span></p>';
        doSubmit = false;
    }

    if (!password) {
        validation.innerHTML += '<p>Please enter <span class="textred">Password</span></p>';
        doSubmit = false;
    } else if (!passwordRegex.test(password)) {
        validation.innerHTML += '<p>Please enter <span class="textorange">a valid Password</span></p>';
        doSubmit = false;
    }

    if (!confirm) {
        validation.innerHTML += '<p>Please enter <span class="textred">Password Confirmation</span></p>';
        doSubmit = false;
    }

    if (!gender0 && !gender1 && !gender2) {
        validation.innerHTML += '<p>Please select <span class="textred">Gender</span></p>';
        doSubmit = false;
    }

    if (!month || !date || !year) {
        validation.innerHTML += '<p>Please select <span class="textred">Birthday</span></p>';
        doSubmit = false;
    }

    if (!music0 && !music1 && !music2 && !music3 && !music4 && !music5) {
        validation.innerHTML += '<p>Please select <span class="textred">Favorite Music Genre</span></p>';
        doSubmit = false;
    }

    if (password !== confirm) {
        alert('passwords do not match');
        doSubmit = false;
    }

    if (doSubmit) {
        validation.innerHTML += '<p>Successful registration. Redirecting...</p>';
        window.location.href = "https://slugworth.github.io/";
        return false;
    }
}

function clear() {
    let validation = document.getElementById('validation');
    validation.innerHTML = '';
}

function setup() {
    for (let i = 1; i <= 31; i++) {
        dateOptions.push(i);
    }

    for (let i = 1970; i <= 2010; i++) {
        yearOptions.push(i);
    }

    let monthSelect = document.getElementById('birthday-month');
    let dateSelect = document.getElementById('birthday-date');
    let yearSelect = document.getElementById('birthday-year');

    for (let i = 0; i < monthOptions.length; i++) {
        let element = document.createElement('option');
        element.textContent = monthOptions[i];
        element.value = i;
        monthSelect.appendChild(element);
    }

    for (let i = 0; i < dateOptions.length; i++) {
        let element = document.createElement('option');
        element.textContent = dateOptions[i];
        element.value = i;
        dateSelect.appendChild(element);
    }

    for (let i = 0; i < yearOptions.length; i++) {
        let element = document.createElement('option');
        element.textContent = yearOptions[i];
        element.value = yearOptions[i];
        yearSelect.appendChild(element);
    }

    var buttonSubmit = document.getElementById('button-submit');
    var buttonClear = document.getElementById('button-clear');

    buttonSubmit.onclick = submit;
    buttonClear.onclick = clear;
}

window.onload = setup;