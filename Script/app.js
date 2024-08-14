 //SIGNUP CODE YE ?--------?
window.addEventListener("load", function () {
    console.log(localStorage.getItem("loginUser"))
    let userLogin=localStorage.getItem("loginUser")
  
    if(userLogin ){ // userlogin true hota hai dashboard pe hi fake ga hame search kar ke bhi nhi a sakte hai?
       this.window.location.replace("./dashboard.html")
    }
  });
  

//Sign Up ka code hai ye?
function signUp(event) {
  // event.preventDefault()

  let fullName = document.getElementById("s-name").value;
  let phoneNumber = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;

  var userObj = {
    fullName,
    phoneNumber,
    email,
    password,
  };
  // console.log(userObj)

  var getUser = JSON.parse(localStorage.getItem("user"));
  // console.log(getUser,"getUser")
  // return;

  //first user signup hora
  if (getUser === null) {
    var arr = [];
    arr.push(userObj);
    // console.log(arr)
    // console.log('First User SignUp')
    localStorage.setItem("user", JSON.stringify(arr));
    alert("User Singn Up");
    window.location.href = "./login.html"; //js me aise ek se dusre page pe jate hai? first user ke liye user
  } else {
    // console.log("User Sing Up")
    // console.log("getUser",getUser)
    var findUser = getUser.find(function (value) {
      // console.log(value.email, "value")
      if (value.email === email) {
        return true;
      }
    });
    //  // finduser undefiend milta hai tu signup karwaao warna nhi ke liye use ye niche wali condison?
    if (findUser === undefined) {
      getUser.push(userObj);
      localStorage.setItem("user", JSON.stringify(getUser));
      alert("User Singn Up");
      window.location.href = "./login.html"; // second user ke liye bhi use
    } else {
      //undefiend nhi hota tu alert use
      alert("Email address already exsit");
    }
    // console.log("findUser",findUser)
  }
}





// LOGIN CODE YE --------?
//jab bhi window  load hogi ye function chale ga onload wala?
window.addEventListener("load", function () {
  console.log(localStorage.getItem("loginUser"))
  let userLogin=localStorage.getItem("loginUser")

  if(userLogin ){ // userlogin true hota hai dashboard pe hi fake ga hame search kar ke bhi nhi a sakte hai?
     this.window.location.replace("./dashboard.html")
  }
});
// login ke liye use hora ab yaha se code?
function login(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  // console.log("Tausif")

  // console.log(email,password)

  var getUser = JSON.parse(localStorage.getItem("user")); //key hai users
  // console.log("getUser",getUser);

  //user login hai tu mile ga wrana -1 mile ga?
  let user = getUser.findIndex(function (value) {
    // console.log(value.email,"value")
    if (value.email === email && value.password === password) {
      //alag alag nhi ek sath check best perctic hai email password checking
      return true;
    }
    //nested condison use hori hai
    //  if(value.email === email){     //email ko only check kar re hai tu ture walan alese me?

    //   if(value.password ==password){ //password ki value same tu success hoga?
    //    console.log("login successfully")
    //    return true;
    //   }else{
    //   console.log("password is invalid")
    //   }
    //  }else{
    //   console.log("email address is invalid")

    //  }

  });
  //userIndex ki value -1 nhi hoti hai tu?
  if (user !== -1) {
    // console.log("Successfully Login");
    alert("Successfully Login");

    localStorage.setItem("loginUser", JSON.stringify(user)); //login key hai
    //replace method use hota hai back nhi aye ga login pe ?
    window.location.replace("./dashboard.html");
  } else {
    // agar -1 ke eqval hoti hai email password same nhi ke liye use?
    // console.log("email and password does not match");
    alert("email and password does not match");
  }
  // console.log(userIndex,"userIndex");
}







// DASHBOARDCODE YE -------- DASHBOARD code or sub se upper window me bhi is ka code hai?
let listParent = document.getElementById("listParent") 
let loginUser; // abhi undefiend hai ye

//jab bhi window  load hogi ye function chale ga onload wala?
window.addEventListener("load", function(){  
     
  let userLogin=localStorage.getItem("loginUser")

  if(!userLogin ){ // userlogin false hota hai  login.html pr jaye ga
     window.location.replace("./login.html")
     return   // aage code bade ga hi nhi false tu jab tak user login nhi hoga tab tak dashboard pe nhi a sakte ?zzz
  }
    // console.log("Hello Loading")
    let getUser = JSON.parse(localStorage.getItem("loginUser"))
    loginUser= getUser //abhi getuser undefind hai but aage user mile ga tu is se global variable me upper loginuser me save kar diya hai puri js file  me accesse ho jaye?
    let fullName = document.getElementById("f_name")
    if(fullName){ // ab or page pe error nhi aye gi?
      fullName.innerHTML = "Welcome" + " " + loginUser.fullName
    }
    //deshbord ka code? listparent ke liye condison use?
    if(listParent){ //ye true hota hai tu matlab miltahai?
      let getPost = JSON.parse(localStorage.getItem("post")) ||[]  //false aya ga tu empty array milega
      console.log(getPost,"getPost")
  
      for (let value of getPost) {
        // console.log("value",value)     //+= purani value bhi rehe or  new bhi aye?
        listParent.innerHTML +=`<div class="card" style="width: 18rem;"> 
        <div class="card-body"> 
        <h5 class="card-title">${value.title}</h5>
        <p class="card-text">${value.desc}</p>
        <button class="btn btn-info" onclick="eidtPost(${value.id},this)">EDIT</button>
        <button class="btn btn-warning" onclick="deletePost(${value.id},this)">DELETE</button>
        </div>
        </div>`
        
      }// jab referace karte hai tu ye wali UI ati hai? value.id dynamic pass hori hai?id se localstorage me update karege or this se butoon eidt  elemnt ko update karwaye ge?
  
    }
  })
  



function addPost(){
    // console.log("addpost")
    let title = document.getElementById("title")
    let desc =  document.getElementById("desc")

  if(!title.value || !desc.value){ //agar koi bina value adda kiye add post pe click karta hai tu ye alert aye ga empty?
      alert("Please Enetr Your Value")
      return
    }
    //CARD DIV Code
    // let cardDiv = document.createElement("div")
    // cardDiv.classList.add("card")  // class add ye sub dynemic data add hora js se?

    // //CARD BODY Code
    // let cardBodyDiv = document.createElement("div")
    // cardBodyDiv.classList.add("card-body")  // class add ye sub dynemic data add hora js se?

    // //CARD TITLE Code 
    // let cardTitle = document.createElement("h5")
    // cardTitle.classList.add("card-title") // class add ye sub dynemic data add hora js se?
    // cardTitle .innerHTML = title.value
    // cardBodyDiv.append(cardTitle)

    // //CRAD TEXT Code
    // let cardText = document.createElement("p") // class add ye sub dynemic data add hora js se?
    // cardText.classList.add("card-text")
    // cardText .innerHTML = desc.value
    // cardBodyDiv.append(cardText)
    

    // //EIDT BUTTON
    // let eidtBtn = document.createElement("button")
    // eidtBtn.innerHTML="EIDT"
    // cardBodyDiv.append(eidtBtn)
    // eidtBtn.classList.add("btn","btn-info")  // class add hori yaha se eidt button pe?


    // //DELETE BUTTON
    // let deleteBtn = document.createElement("button")
    // deleteBtn.innerHTML ="DELETE"
    // cardBodyDiv.append(deleteBtn)
    // deleteBtn.classList.add("btn","btn-danger")  // class add hori yaha se eidt button pe?


    // //CARD DIV
    // cardDiv.append(cardBodyDiv)
    // console.log(cardBodyDiv, "cardBodyDiv")
    // listParent.append(cardDiv)


    //         title.value = ""    //value add to inpiute empty hoga yaha se?
    //         desc.value = ""

//SORT Cart Tarkia Itana Lengthy code ki zarurt nhi useki upper jaisa kiye? Ab sort cart kare ge?


let id; //id abhi initial nhi hai? uniq id use hori hai
let getPost = JSON.parse(localStorage.getItem("post")) || []  //null milta to emptry array dega ye?
console.log("getpost",getPost)

if(getPost.length >0){   //is me koi value hoti hai? jab koi value hogi is ki lemgth 0se jayada hogi?
  id = getPost[0].id + 1   //jo bhi id aye gi us me plus 1 add hoga
}else{  
   id = 1   //id ki value yaha pe initial hori hai
}
// if(getPost == null){ //first post null milta hai to id 1 ke barabar hogi?
//   id = 1 //id ki value yaha pe initial hori hai

// }else{ //agar null nhi milta hai tu
//   console.log(getPost[0])
//   id = getPost[0].id + 1   //jo bhi id aye gi me plus 1 add hoga
     
// }


let todoBox = `
    <div class="card" style="width: 18rem;">
    <div class="card-body"> 
    <h5 class="card-title">${title.value}</h5>
    <p class="card-text">${desc.value}</p>
    <button class="btn btn-info" onclick="eidtPost(${id}, this)">EDIT</button>
    <button class="btn btn-warning" onclick="deletePost(${id}, this)">DELETE</button>
    </div>
    </div>`
   //pura dynamic data adda hora but ye sort tarika hai?post add karte hai tu ye wala UI ati hai
    // console.log(todoBox,"todoBox") 
    // listParent.innerHTML += todoBox;  //yaha pe upper ki tara append nhi innerhtml me jaye ga?+= se agar kuch add kiye but fir se add karo ke tu value repit nhi hogi dubra? purani value bhi rahe or add bhi ho jaye?
    
    listParent.innerHTML = todoBox +listParent.innerHTML //is se ul pe jab bhi kuch add kare ge start se hoga laset se nhi hoga upper wale se last se hora ta?


    let postObj={
      id: id,
      title: title.value,
      desc: desc.value
    }
    getPost.unshift(postObj)
    localStorage.setItem("post",JSON.stringify(getPost))

 // upper is ka sort tarike se ||[] hua hai id ke niche line 98
    // if(getPost == null){  //agar getpost null to empty array create us me postobje jaye ga?
    //   let array = []  //empty array hai ye?
    //   array.push(postObj)
    // localStorage.setItem("post",JSON.stringify(array)); //post key hai
    // }else{
    //   getPost.unshift(postObj)
    //   localStorage.setItem("post",JSON.stringify(getPost));

    // }


    title.value = ""    //value add to inpiute empty hoga yaha se?
    desc.value = ""

  }

 // detele ke liye code?
 function deletePost(id,e){  //jo dynamic id upper pass kiye ohi id yaha mil ri hai 
  
    console.log("deletepost",id,e)
    // return

  let getPost = JSON.parse(localStorage.getItem("post"))
    // console.log(getPost)

  let indexNum = getPost.findIndex(function (value){    //id kitne index pe mile ga yaha se
    if(value.id === id){
      return true
    }
  })
    console.log(indexNum)

  getPost.splice(indexNum,1)//delete karne ke liye use hora sile kaha se kah tak detele indexnum me jo aye ga us ka first detele hoga?
  localStorage.setItem("post",JSON.stringify(getPost))
   
  //remove element screen
  e.parentNode.parentNode.remove()


 }



function eidtPost(id,e){    //jo dynamic id upper pass kiye ohi id yaha mil ri hai 
    // console.log("eidtPost",id,e)

    let indexNum;   //initial nhi hai abhi value? 
    let getPost = JSON.parse(localStorage.getItem("post"))
    let post  = getPost.find(function (value, index){   //finde 2 parameter leta hai value and index jo index pe?
      if(value.id === id){
        // console.log(index)

        indexNum = index // value assing hohi yaha se indexNum?
        return true  //matalb post variabal is me save karwana 
      }
    }) 
    //     console.log(indexNum)
  
    // console.log("post", post)
  

    let eidtTitle = prompt("edit title",post.title)
    let eidtDesc = prompt("edit desc", post.desc)

    
    let editObj ={
      id: post.id,    //psot se id mil ri hai ? ham ne post ke eqval hi id kar di hai?
      title: eidtTitle,
      desc: eidtDesc
    }
    getPost.splice(indexNum, 1, editObj)     //kuch delete ya add karta hai ye method? ye 2 value leta hai index or delete kaha se karna hai? 1 delete hora or add hora hai editobj?

    localStorage.setItem("post",JSON.stringify(getPost))
    let h5Title = e.parentNode.firstElementChild
    let pDesc = e.parentNode.firstElementChild.nextElementSibling
    h5Title.innerHTML = eidtTitle
    pDesc.innerHTML = eidtDesc

}   




//LogOut Code ye ?

function logout(){
  localStorage.removeItem("loginUser")
  window.location.replace("./login.html")
}


















