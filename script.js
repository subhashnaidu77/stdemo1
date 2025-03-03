const listContainer = document.getElementById("list-container");
const input_box = document.getElementById("input-box");

function addtask(){
if(input_box.value===''){
alert("Enter some data");


}else{

    let li= document.createElement("li");
    li.innerHTML = input_box.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = '\u00d7';
    li.appendChild(span);
}
input_box.value="";
savetask()
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI" ){
        e.target.classList.toggle("tick");
        savetask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savetask();
    }
})

function savetask(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();

