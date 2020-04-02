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

var allfoods = [{
       name :"Matooke",
       price : 0,
       description :""
},

{
    name:"Rice",
    price : 0,
    description :""
},
{
    name :"Posho",
    price : 0,
    description :""
},
{
    name :"Potatoes",
    price : 0,
    description :"" 
},
{
    name :"Cassava",
    price : 0,
    description :""
},
{
    name :"Yams",
    price : 0,
    description :""
},
{
    name : "Chips",
    price : 5000,
    description:""
},
{
    name:"Liver",
    price : 6000,
    description:""
},
{
    name :"Beef",
    price : 6000,
    description:""
},
{
    name:"Chicken",
    price : 8000,
    description:""
},
{
    name :"Beans",
    price : 5000,
    description :""
},
{
    name: "Gnuts",
    price : 3000,
    description :""
},
{
    name :"Gravy",
    price : 1000,
    description: ""
}

]
text =""

function login(){
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
var selected = new Array();
var totalprice = ""


function register(){
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
}
var button = document.createElement("button");
button.innerHTML = "Do Something";
function displayfood(){

    var list = document.createElement('div');

    for (var i = 0; i < allfoods.length; i++) {
        // Create the list item:
        var item = document.createElement('ul');
         var itemchild = document.createElement('li')
        // Set its contents:
        var itemchild1= itemchild.appendChild(document.createTextNode(allfoods[i].name));
        var itemchild1= itemchild.appendChild(document.createTextNode(allfoods[i].price));
        var itemchild1= itemchild.appendChild(document.createTextNode(allfoods[i].description));


        // Add it to the list:
        list.appendChild(itemchild1);
        // list.appendChild(price)
        // list.appendChild(description)
    }

    // Finally, return the constructed list:
    return list;

}
// document.getElementById('foo').appendChild(displayfood(allfoods[0]));
var chks = document.getElementsByTagName("INPUT");
var current;
text=""
function order(){
        //Create an Array.
        var li = document.createElement("li");
        var totalprice = 0
         text ="<ul>"
        
        var obj ={}
 
        //Reference the Table.
        // var tblFruits = document.getElementById("tblFruits");
 
        //Reference all the CheckBoxes in Table.
        console.log(chks)
        
        // Loop and push the checked CheckBox value in Array.
        for (var i = 0; i < chks.length; i++) {
            if (chks[i].checked) {
                // obj["name"] = chks[i].name
                // obj["price"] = chks[i].value
                // // console.log(JSON.stringify(selected))
        li.setAttribute('id',chks[i].value);

                selected.push(chks[i].name)
                totalprice +=  + parseInt(chks[i].value) 
                current = chks[i]
                console.log(current)
                // li.setAttribute(id, chks[i].name)
                 text += "<li>" + "<b>" + chks[i].name + "</b>" + "<span>" + chks[i].value + "</span>" +"</li>";
                
                 //  var rm = document.getElementById('remove')
                //  rm.onclick = function(){
                //      console.log("go")
                //  }
               
            }
        }
console.log(totalprice)

        text += "</ul>";
        // console.log( totalprice + JSON.stringify(selected))
        // return totalprice

 
        //Display the selected CheckBox values.
        // if (selected.length > 0) {
        //     alert("Selected values: " + selected.join(","));
        // }
document.getElementById("demo").innerHTML = text;
document.getElementById("total").innerHTML = totalprice;
// document.getElementById( "remove" ).onclick = function() {
//     removefoods(selected, i);
//    };


   
}




