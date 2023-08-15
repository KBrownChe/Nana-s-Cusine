import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import "../firebaseConfig";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { signUpToast, signUpToastElement, signUpToastMessage } from "../components/toast";

const signupForm =document.querySelector("#signupForm");

console.log("signup Form =>", signupForm);

signupForm.addEventListener("submit", signupFormWithEmail);

function signupFormWithEmail(event) {
  event.preventDefault();

  const username = signupForm.username.value;
  const email = signupForm.email.value;
  const password = signupForm.password.value;
  const confirmPassword = signupForm['confirm-password'].value;
  const gender = signupForm.gender.value;
 
  // console.log('username =>', username);
  // console.log('email =>', email);
  // console.log('password =>', password);
  // console.log('confirmPassword =>', confirmPassword);
  // console.log('gender =>', gender);

  let isOk = true;

  // validation and verification
  const nameError = signupForm.querySelector("#name-error");
  // console.log('name Error => ', nameError);

  const emailError = signupForm.querySelector("#email-error");
  // console.log('email Error => ', emailError);

  const passwordError = signupForm.querySelector("#password-error");
  // console.log('password Error => ', passwordError);

  const confirmPasswordError = signupForm.querySelector("#confirm-password-error");
  // console.log('confirm Password Error => ', confirmPasswordError);

  const genderError = signupForm.querySelector('#gender-error');
  // console.log('gender Error => ', genderError);


  if (username === ""){
    nameError.textContent = "Please enter a username";
    isOk = false;
  } else {
    nameError.textContent = "";
    isOk = true;
  }

  if (gender === ""){
    genderError.textContent = "Please select gender";
    isOk = false;
  } else {
    genderError.textContent = "";
    isOk = true;
  }

  if (email === "") {
    emailError.textContent = "Please enter an email address";
    isOk = false;
  } 
  else if (!/^([\w-\.]+@[\w-]+\.[a-z]{2,})$/.test(email)) {
    emailError.textContent = "Please enter a valid email address";
    isOk = false;
  } 
  else {
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

  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Please enter a password";
    isOk = false;
  } else if (confirmPassword !== password){
    confirmPasswordError.textContent = "Passwords do not match";
    isOk = false;
  } else {
    confirmPasswordError.textContent = '';
    isOk = true;
  }

  if(isOk) {
    const auth = getAuth();
    const db = getFirestore();
    createUserWithEmailAndPassword(auth, email, password).then(async (userCredentials) => {
      console.log("user credentials: ", userCredentials);
      console.log("user: ", userCredentials.user);
      console.log("user id: ", userCredentials.user.uid);

      await setDoc(doc(db, "users", userCredentials.user.uid), {
        username: username,
        gender: gender,
      })

   //   window.location.href = '../index.html';
    }).catch((error) => {
      console.log("error: ", error);
      console.log('Error message: ', error.message);
      signUpToastElement.classList.replace('bg-success', 'bg-danger');
      signUpToastMessage.textContent = error.message;
      signUpToast.show();
    })
  }
}