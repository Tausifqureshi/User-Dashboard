//DASHBOARD code or sub se upper window me bhi is ka code hai?
let listParent = document.getElementById("listParent");
let loginUser;

window.addEventListener("load", function () {
  let userLogin = localStorage.getItem("loginUser");

  if (!userLogin) {
    window.location.replace("./login.html");
    return;
  }

  let getUser = JSON.parse(localStorage.getItem("loginUser"));
  loginUser = getUser;
  let fullName = document.getElementById("f_name");
  if (fullName) {
    fullName.innerHTML = "Welcome" + " " + loginUser.fullName;
  }

  if (listParent) {
    let getPost = JSON.parse(localStorage.getItem("post")) || [];
    console.log(getPost, "getPost");

    for (let value of getPost) {
      listParent.innerHTML += `<div class="card" style="width: 18rem;"> 
        <div class="card-body"> 
        <h5 class="card-title">${value.title}</h5>
        <p class="card-text">${value.desc}</p>
        <button class="btn btn-info" onclick="eidtPost(${value.id},this)">EDIT</button>
        <button class="btn btn-warning" onclick="deletePost(${value.id},this)">DELETE</button>
        </div>
        </div>`;
    }
  }
});

function addPost() {
  let title = document.getElementById("title");
  let desc = document.getElementById("desc");

  if (!title.value || !desc.value) {
    alert("Please Enetr Your Value");
    return;
  }

  let id;
  let getPost = JSON.parse(localStorage.getItem("post")) || [];
  console.log("getpost", getPost);

  if (getPost.length > 0) {
    id = getPost[0].id + 1;
  } else {
    id = 1;
  }

  let todoBox = `
    <div class="card" style="width: 18rem;">
    <div class="card-body"> 
    <h5 class="card-title">${title.value}</h5>
    <p class="card-text">${desc.value}</p>
    <button class="btn btn-info" onclick="eidtPost(${id}, this)">EDIT</button>
    <button class="btn btn-warning" onclick="deletePost(${id}, this)">DELETE</button>
    </div>
    </div>`;

  listParent.innerHTML = todoBox + listParent.innerHTML;

  let postObj = {
    id: id,
    title: title.value,
    desc: desc.value,
  };
  getPost.unshift(postObj);
  localStorage.setItem("post", JSON.stringify(getPost));

  title.value = "";
  desc.value = "";
}

// detele ke liye code?
function deletePost(id, e) {
  console.log("deletepost", id, e);

  let getPost = JSON.parse(localStorage.getItem("post"));

  let indexNum = getPost.findIndex(function (value) {
    if (value.id === id) {
      return true;
    }
  });
  console.log(indexNum);

  getPost.splice(indexNum, 1);
  localStorage.setItem("post", JSON.stringify(getPost));

  //remove element screen
  e.parentNode.parentNode.remove();
}

function eidtPost(id, e) {
  let indexNum;
  let getPost = JSON.parse(localStorage.getItem("post"));
  let post = getPost.find(function (value, index) {
    if (value.id === id) {
      indexNum = index;
      return true;
    }
  });

  let eidtTitle = prompt("edit title", post.title);
  let eidtDesc = prompt("edit desc", post.desc);

  let editObj = {
    id: post.id,
    title: eidtTitle,
    desc: eidtDesc,
  };
  getPost.splice(indexNum, 1, editObj);
  localStorage.setItem("post", JSON.stringify(getPost));
  let h5Title = e.parentNode.firstElementChild;
  let pDesc = e.parentNode.firstElementChild.nextElementSibling;
  h5Title.innerHTML = eidtTitle;
  pDesc.innerHTML = eidtDesc;
}

//LogOut Code ye ?
function logout() {
  localStorage.removeItem("loginUser");
  window.location.replace("./login.html");
}
