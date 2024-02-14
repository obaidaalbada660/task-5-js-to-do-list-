const formlist = document.querySelector(".formTask");
formlist.onsubmit = addTask;

function addTask(e){
    e.preventDefault();
    let tasks = [];
   
   task = document.querySelector(".formTask .input").value;
   tasks.push(task);
    
    
    let list = `
    <li class="task">
    <input type="checkbox"  name="checkbox" class="checkbox"/>
    <span class="task-title">${task}</span>
    </li>
    
    `;

    document.querySelector(".TasksList").innerHTML += list;
    e.target.reset();
    addline();

}
function addline(){

const check = document.querySelectorAll('.task input[type="checkbox"]');
    for(let i=0; i<check.length; i++) {
    check[i].onclick = function (e) {
        if(check[i].checked==true){
            check[i].nextElementSibling.classList.add("line");
        }
        else{
            check[i].nextElementSibling.classList.remove("line");
        }
    };
}

}




