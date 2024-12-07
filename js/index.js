

const container = document.getElementById('container');
const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const loginBtn = document.getElementById('login');
const signBtn = document.getElementById('register');

let signUpName = document.getElementById('signUpName');
let signUpEmail = document.getElementById('signUpEmail');
let signUpPass = document.getElementById('signUpPass');
let signInEmail = document.getElementById('signinEmail');
let signInPass = document.getElementById('signinPass');

let arraySignUp = []



signUpBtn.addEventListener('click', function () {
    container.classList.add("active");
});

signInBtn.addEventListener('click', function () {
    container.classList.remove("active");
});





// if(localStorage.getItem("user") != null){
//     arraySignUp = JSON.parse(localStorage.getItem("user"));
// }

if (localStorage.getItem("user") != null) {
    arraySignUp = JSON.parse(localStorage.getItem("user"));

    if (!Array.isArray(arraySignUp)) {
        arraySignUp = [];
    }
}



function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z]+\.(com)$/;
    if (emailRegex.test(email)) {
        document.getElementById('vaild1').classList.add("d-none")
        return true;
    } else {
        document.getElementById('vaild1').classList.remove("d-none")
        return false;
    }
}


function validatePassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (passwordRegex.test(password)) {
        document.getElementById('vaild2').classList.add("d-none")
        return true;
    } else {
        document.getElementById('vaild2').classList.remove("d-none")

        return false;
    }
}






signBtn.addEventListener('click', function () {
    var user = {
        name: signUpName.value.trim(),
        email: signUpEmail.value.trim(),
        pass: signUpPass.value.trim()
    };

    if (validateEmail(user.email) && validatePassword(user.pass)) {
        let emailExists = false;
        for (let i = 0; i < arraySignUp.length; i++) {
            if (arraySignUp[i].email === user.email) {
                emailExists = true;
            }
        }

        if (emailExists) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Email is already registered. Please use another email.",
                showConfirmButton: false,
                timer: 3500
            });
        } else {
            arraySignUp.push(user);
            localStorage.setItem("user", JSON.stringify(arraySignUp));
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Registration completed successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
});




loginBtn.addEventListener('click', function () {
    var userSignIn = {
        emailSignIn: signInEmail.value.trim(),
        passSignin: signInPass.value.trim()
    };

    if (userSignIn.emailSignIn === "" || userSignIn.passSignin === "") {
        return;
    }

    let isExisting = false;
    let userName = "";

    for (let i = 0; i < arraySignUp.length; i++) {
        if (arraySignUp[i].email === userSignIn.emailSignIn && arraySignUp[i].pass === userSignIn.passSignin) {
            userName = arraySignUp[i].name;
            isExisting = true;
        }
    }

    if (isExisting) {
        localStorage.setItem("loggedInUser", userName);
        window.location.replace("main.html");
    } else {
        alert('Incorrect Email or Password');
    }
});


