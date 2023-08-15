// import bootstrap from "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";

const signUpToastElement = document.querySelector('#signup-toast');
console.log("toastElement", signUpToastElement);

const signUpToast = new bootstrap.Toast(signUpToastElement);

const signUpToastMessage = signUpToastElement.querySelector('#toast-message');
console.log("toastMesssage", signUpToastMessage);

export {
  signUpToastMessage,
  signUpToast,
  signUpToastElement,
}