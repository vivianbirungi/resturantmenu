


text =""
const LIST = []


var selected = new Array();
var totalprice = 0



var button = document.createElement("button");
button.innerHTML = "Do Something";  
var chks = document.getElementsByTagName("INPUT");
var list = document.getElementById("list")
var current;
text=""
function order(){ 
    LIST.forEach(function (arrayItem) {
        var x = arrayItem.name;
         id = LIST.indexOf(arrayItem)
        const item = 
        `<li class="selecteditem">
        <a><i class="text ">${arrayItem.name}</i>
        <i class="co">${arrayItem.price}</i>
        <i class="fa fa-trash-o de" job="remove" id=${id}></i>
        </a>
      </li>
    `;
    const position = "beforeend"
      list.insertAdjacentHTML(position, item)
      
    });
    
    document.getElementById("total").innerHTML = totalprice;
   
   
}

document.addEventListener("click", function(e){

        // if(e.selected){
            console.log(e)

            var selectedItem = e.target
            var name = selectedItem.name;
            var price = selectedItem.value;

            if(selectedItem.checked){
            console.log("selectedItem")
            
           LIST.push({
                name: name,
                price : price
            });
            totalprice += parseInt(price)
            console.log(LIST, totalprice)
            }
            else{
                if(LIST.length != 0){
                   
             LIST.forEach(function (arrayItem) {
                var x = arrayItem.name;
               
                if(x == name){
                    const index = LIST.indexOf(arrayItem)
                    LIST.splice(index, 1);
                    totalprice -= price
                    console.log(LIST, totalprice)
                }
            });
                 console.log(LIST)
            //  if(element.name == name){
            //      console.log("Am out")
            //  }

            }}
            // addTodo(todo, id, false, false);
            // LIST.push({
            //     name: todo,
            //     id: id,
            //     done: false,
            //     trash: false
            // });
            // id++
        // }
        // input.value = ""
    

});

var listItems = document.querySelectorAll("ul li");

listItems.forEach(function(item) {
  item.onclick =  function(){
   
   console.log(item)
}
});

list.addEventListener("click", function(even){
    const element = event.target
    const elementjob = element.attributes.job.value;

    if(elementjob == 'remove'){
        removeTodo(element);
    }

})

function removeTodo(element){
    element.parentNode.parentNode.remove(element.parentNode)

    LIST[element.id].trash = true;
    LIST.forEach(function (arrayItem) {
        var x = arrayItem.name;
       
        if(arrayItem.trash){
            const index = LIST.indexOf(arrayItem)
            LIST.splice(index, 1);
            console.log(LIST)
        }

});
}


