
// ====================================================================//
// Chat code
// This function runs when the window loads
window.addEventListener("load", function () {
  const userLogin = localStorage.getItem("loginUser");

  if (userLogin) {
    window.location.replace("./dashboard.html");
  }
});

function login(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  const getUser = JSON.parse(localStorage.getItem("user"));
  console.log(getUser);
  const user = getUser.find((value) => value.email === email && value.password === password);

  if (user) {
    alert("Successfully Login");
    localStorage.setItem("loginUser", JSON.stringify(user));
    window.location.replace("./dashboard.html");
    window.location.href = "./dashboard.html";
  } else {
    alert("Email and password do not match");
  }
}
















