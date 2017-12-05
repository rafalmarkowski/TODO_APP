function addNewTask(title){
	var taskLi = document.createElement('li');
	
	taskLi.classList.add('single-task');
	taskLi.innerHTML = title;
	
	//add task to DOM
	tasksContainer.appendChild(taskLi);
}