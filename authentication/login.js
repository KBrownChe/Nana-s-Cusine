// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

const loginForm = document.querySelector("#loginForm");

// console.log("Login form =>", loginForm);

loginForm.addEventListener("submit", loginWithEmail);

function loginWithEmail(event) {
  event.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  console.log("Email => ", email);
  console.log("Password => ", password);

  let isOk = true;

  // validation and verification
  const emailError = loginForm.querySelector("#email-error");

  const passwordError = loginForm.querySelector("#password-error");

  if (email === "") {
    emailError.textContent = "Please enter an email address";
    isOk = false;
  } else if (!/^([\w-\.]+@[\w-]+\.[a-z]{2,})$/.test(email)) {
    emailError.textContent = "Please enter a valid email address";
    isOk = false;
  } else {
    emailError.textContent = '';
    isOk = true;
  }

  if (password === "") {
    passwordError.textContent = "Please enter a password";
    isOk = false;
  } else if (password.length < 8) {
    passwordError.textContent = "Please enter a password with at least 8 characters";
      isOk = false;
  } else {
    passwordError.textContent = '';
    isOk = true;
  }

  if(isOk) {
    signInWithEmailAndPassword(auth, email, password).then((user) => {
      console.log("user: ", user);
      console.log("user id: ", user.uid);
   //   window.location.href = '../index.html';
    }).catch((error) => {
      console.log("error: ", error);
      console.log('Error message: ', error.message);
    })
  }
}
