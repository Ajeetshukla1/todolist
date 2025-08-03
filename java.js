let totalTasks=0;
let completedTasks=0;
function add_task(task){
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(task));
    const checkBox = document.createElement("input");
    checkBox.type="checkbox";
    checkBox.className="taskDoneCheck";
    checkBox.checked = false;
    li.style.textDecoration='none';
        li.style.textDecoration = task.completed ? 'line-through' : 'none';
        checkBox.addEventListener('change', function() {
            li.style.textDecoration = checkBox.checked ? 'line-through' : 'none';
            completedTasks += checkBox.checked ? 1 : -1;
            update_counters();
            
        });
    const delete_button=document.createElement("button");
    delete_button.textContent="Delete";
    delete_button.className="delete_btn";
    delete_button.addEventListener('click',function(){
        if(checkBox.checked){
            completedTasks--;
        }
        totalTasks--;
        li.remove();
        update_counters();
       
        
        
    });

    li.appendChild(checkBox);
    li.appendChild(delete_button);
    document.querySelector('.item ul').appendChild(li);
    totalTasks++;
    update_counters();

}
function update_counters(){
    document.getElementById('total_tasks').textContent=totalTasks;
    document.getElementById('task_completed').textContent=completedTasks;
}


document.querySelector('.addtask').addEventListener('click',function(){
    const item=document.querySelector('#taskInput');
    if(item.value.trim()==''){
        alert('Enter a task!');
        return;
    }
    add_task(item.value);
    item.value='';
})

