let taskFormEl = document.getElementById('task-form');
        let taskEl = document.getElementById('task-el');

        console.log(taskEl.textContent);

        let taskList = localStorage.getItem('tasks')? JSON.parse(localStorage.getItem('tasks')):[];



        //Add task button working
        taskFormEl.addEventListener('submit',function(e){
            e.preventDefault();
            let task = taskEl.value;
            taskList.unshift(task);
            localStorage.setItem('tasks',JSON.stringify(taskList));
            taskEl.value='';
            display();
        });


        //display tasks
        display();
        function display(){
            let eachtask ='';
            taskList.forEach(function(task,i){
                eachtask+=`<li class="list-group-item list-group-item-secondary mb-3">
                                <span>${task}</span>
                                <i class="bi bi-archive-fill float-end" onclick="deleteTask(${i})"></i>
                                <i class="bi bi-pen-fill float-end  pe-4 " onclick="updateTask(${i})" ></i>
                            </li>`
            });

        document.getElementById('task-list-el').innerHTML = eachtask;
        }


        //delete

        function deleteTask(index){
            taskList.splice(index,1);
            localStorage.setItem('tasks',JSON.stringify(taskList));
            display();
        }


        //update 

        function updateTask(i){
            taskEl.value = taskList[i];
            taskList.splice(i,1);
            localStorage.setItem('tasks',JSON.stringify(taskList));
            display();
        }
