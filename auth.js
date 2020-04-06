

 // Get the modal
 var modal = document.getElementById("registerform");
 var login = document.getElementById("loginform");

    
 // Get the button that opens the modal
 var btn = document.getElementById("register");
 var log = document.getElementById("loginF")
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks the button, open the modal 
 btn.onclick = function() {
   modal.style.display = "block";
   login.style.display = "none"
 }
 log.onclick = function(){
    modal.style.display = "none";
    login.style.display = "block"
 }
 


 var users =[];
var people= [{
    username:"vivian",
    password :"12345"
}, {
  username:"pat",
  password :"12345"
},
{
  username:"jenny",
  password :"12345"
}

]

function myFunction() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for(i=0; i< people.length; i++){
        if(username == people[i].username && password == people[i].password){
            console.log(username , "you are logged in")
            window.location = "menu.html";
        }
      
    }
   console.log("Wrong username and Password")
  }
function login(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for(i=0; i< users.length; i++){
        if(username == users[i].username && password == users[i].password){
            console.log(username , "you are logged in")
            window.location = "menu.html";
        }
      
    }
   console.log("Wrong username and Password")
    
}




function register(){
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var username = document.getElementById("Uusername").value
    var password = document.getElementById("Upassword").value
    console.log( fname, lname, username, password)
    users.push({
        fname: fname,
        lname: lname,
        username: username,
        password: password
    });

    window.location = "menu.html";
    console.log(users)
}