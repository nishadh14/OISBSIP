const InputValue = document.getElementById("input-value");
const ListContainer = document.getElementById("list-container");
const Complete = document.getElementById("CompletedList");

function displaycomplete(){
    var x = document.getElementById("complete");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("addTaskContent").style.display ="none";
    } else {
      x.style.display = "none";
      document.getElementById("addTaskContent").style.display ="block";

    }
}

function displayaddTask(){
    var x = document.getElementById("addTaskContent");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("complete").style.display ="none";
    } else {
      x.style.display = "none";
      document.getElementById("complete").style.display ="block";

    }
}

function addList(){
    if(InputValue.value === ''){
        alert("Write Something");
    }
    else{
    let li = document.createElement("li");
    li.innerHTML = InputValue.value;
    ListContainer.appendChild(li);
    }
    InputValue.value="";
}

ListContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.remove("LI")
        let li = document.createElement("li");
        li.innerHTML = e.target.innerHTML;
        Complete.appendChild(li);
    }
},false);

Complete.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.remove("LI")
    }
},false);


