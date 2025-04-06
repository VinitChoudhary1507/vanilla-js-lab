const range = document.querySelector('.range');
const text = document.querySelector(".information"); 
const numData = document.querySelector(".num"); 
const passwordText = document.querySelector(".password"); 

passwordText.addEventListener("input", (e) => {
  const password = passwordText.value.trim();
  const length = password.length;
  range.value = length;
  numData.innerHTML = length;

  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  let result = "";

  if (length <= 20) {
    if (hasUpper || hasLower || hasSymbol) {
      result = "Password is weak";
    } else if (hasUpper && hasLower && hasSymbol && hasNumber && length >= 12) {
      result = "Password is super strong";
    } else {
      result = "Password is strong";
    }
  } else {
    if (!hasUpper || !hasLower) {
      result = "Password word limit exceeded";
    } else {
      result = "Password is strong";
    }
    range.value = 10;
    numData.innerHTML = 10;
  }

  text.innerText = result;
});