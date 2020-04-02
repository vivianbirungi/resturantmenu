function addItem(){
    var ul = document.getElementById("dynamic-lits");
    var candidate = document.getElementById("candidaet");
    var li = document.createElement("li");
    var button = document.createElement("button")
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    li.appendChild(button)
    ul.appendChild(li);
    button.addEventListener("click", function removeItem(){
        // var ul = document.getElementById("dynamic-list");
        // var candidate = document.getElementById("candidate");
        var item = document.getElementById(candidate.value);
        ul.removeChild(item);
    })

}

function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
}
