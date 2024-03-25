const popUpMenu = document.querySelector(".popUpMenu");
const bringUpMenu = document.querySelector("#bringupMenu");
const closeMenu = document.querySelector("#closeMenu");
const signUpModal = document.querySelector(".signUpModal");
const signUpBtn = document.querySelectorAll("#signUpBtn");
const cancel = document.querySelector("#cancel");
const nameInput = document.querySelector("#name");
const passwordInput = document.querySelector("#password");
const emailInput = document.querySelector("#email");
console.log(
  popUpMenu,
  bringUpMenu,
  closeMenu,
  signUpModal,
  signUpBtn,
  nameInput,
  passwordInput,
  emailInput
);
bringUpMenu.addEventListener("click", function () {
  popUpMenu.classList.add("popUpMenu-active");
});
closeMenu.addEventListener("click", function () {
  popUpMenu.classList.remove("popUpMenu-active");
});
signUpBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    signUpModal.classList.add("signUpModal-active");
  });
});
cancel.addEventListener("click", function () {
  signUpModal.classList.remove("signUpModal-active");
});
const users = [];
signUpModal.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameInput.value;
  const password = passwordInput.value;
  const email = emailInput.value;
  const newUser = {
    name: name,
    password: password,
    email: email,
  };
  nameInput.value = "";
  passwordInput.value = "";
  emailInput.value = "";
  users.push(newUser);
  console.log(newUser);
  console.log(users);
});
