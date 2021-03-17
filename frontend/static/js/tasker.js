export let tasker = {
    selectElements: function () {
        this.taskInput = $("#myTodo");
        this.taskDueDate = $("#duedate");
        this.taskStatus = $("#status");
        this.taskList = $('#todolist');
        this.addButton = $('#addTodo');
    },
    buildTask: function () {
        // console.log('works');
        let taskListItem = $('tr');
        let taskName = $('td');
        let taskStatus = $('div');
        taskStatus.addClass = 'completed';
        taskStatus.innerHtml = this.taskStatus.val();
        let taskDueDate = $('td');
        taskDueDate.innerHtml = 'Due on ' + this.taskDueDate.val();
        taskName.append(taskStatus);
        taskListItem.append(taskName);
        taskListItem.append(taskDueDate);
        this.taskList = taskListItem;

        localStorage.setItem('taskname', this.taskInput.val());
        localStorage.setItem('taskstatus', this.taskDueDate.val());
        localStorage.setItem('taskdue', this.taskStatus.val());
    },

    // error: function() {
    //     // this.errorMessage.style.display = "block";
    // },
    addTask: function () {
        let taskValue = this.taskInput.val();
        // this.errorMessage.style.display = "none";

        if (taskValue === "") {
            // this.error();
            console.log('empty string');
        } else {
            this.buildTask();
            this.taskInput.val() = "";
        }
    },
    enterkey: function(event){
        if (event.keyCode === 13 || event.which === 13){
            this.addTask();
        }
    },
    bindEvents: function() {

        //Atasez metoda addTask eventului onClick pt addButton 
        this.addButton.onClick = this.addTask.bind(this);

        //Idem pt ENTER
        this.taskInput.onkeypress = this.enterkey.bind(this);
    }
};
