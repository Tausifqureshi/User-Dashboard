// window.addEventListener("load", function () {
//   console.log(localStorage.getItem("loginUser"));
//   let userLogin = localStorage.getItem("loginUser");

//   if (userLogin) {
//     this.window.location.replace("./dashboard.html");
//   }
// });

// //Sign Up ka code hai ye?
// function signUp(event) {
//   // event.preventDefault()

//   let fullName = document.getElementById("s-name").value;
//   let phoneNumber = document.getElementById("phone").value;
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("pass").value;

//   var userObj = {
//     fullName,
//     phoneNumber,
//     email,
//     password,
//   };

//   var getUser = JSON.parse(localStorage.getItem("user"));
//   //first user signup hora
//   if (getUser === null) {
//     var arr = [];
//     arr.push(userObj);

//     localStorage.setItem("user", JSON.stringify(arr));
//     alert("User Singn Up");
//     window.location.href = "./login.html";
//   } else {
//     var findUser = getUser.find(function (value) {
//       if (value.email === email) {
//         return true;
//       }
//     });

//     if (findUser === undefined) {
//       getUser.push(userObj);
//       localStorage.setItem("user", JSON.stringify(getUser));
//       alert("User Singn Up");
//       window.location.href = "./login.html";
//     } else {
//       alert("Email address already exsit");
//     }
//   }
// }


// Check if user is logged in on window load
window.addEventListener("load", function () {
  const userLogin = localStorage.getItem("loginUser");
  if (userLogin) {
    window.location.replace("./dashboard.html");
  }
});

// Function for user sign-up
function signUp(event) {
  event.preventDefault();

  const fullName = document.getElementById("s-name").value;
  const phoneNumber = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;

  const userObj = { fullName, phoneNumber, email, password };
  let getUser = JSON.parse(localStorage.getItem("user")) || [];

  const findUser = getUser.find((value) => value.email === email);

  if (!findUser) {
    getUser.push(userObj);
    localStorage.setItem("user", JSON.stringify(getUser));
    alert("User Signed Up");
    window.location.href = "./login.html";
  } else {
    alert("Email address already exists");
  }
}
















// window.addEventListener("load", function () {
//   // Check if a user is already logged in
//   const userLogin = JSON.parse(localStorage.getItem("loginUser"));

//   if (userLogin) {
//     window.location.replace("./dashboard.html");
//   }
// });

// function signUp(event) {
//   event.preventDefault(); // Prevent form submission

//   const fullName = document.getElementById("s-name").value;
//   const phoneNumber = document.getElementById("phone").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("pass").value;

//   // Retrieve the list of users from local storage
//   const getUser = JSON.parse(localStorage.getItem("user")) || [];

//   // Check if the email already exists in the users array
//   const existingUser = getUser.find((user) => user.email === email);

//   if (existingUser) {
//     alert("Email address already exists.");
//   } else {
//     // Create a new user object
//     const userObj = {
//       fullName,
//       phoneNumber,
//       email,
//       password, // Note: You should hash the password for security
//     };

//     // Push the new user to the array
//     getUser.push(userObj);

//     // Store the updated user array in local storage
//     localStorage.setItem("user", JSON.stringify(getUser));

//     alert("User Sign Up");
//     window.location.href = "./login.html";
//   }
// }
