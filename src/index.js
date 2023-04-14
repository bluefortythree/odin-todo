
let start = {
    new: (function () {
        let newProject = document.getElementById('new');
        let form = document.getElementById('form');
        let submit = document.getElementById('submit');
        newProject.addEventListener('click', () => {
            newProject.style.display = 'none';
            form.style.display = 'grid';
        })
        form.addEventListener('submit',(event) => {
            event.preventDefault();
        })
        submit.addEventListener('click',() => {
            let title = document.getElementById('project-name').value;
            let description = document.getElementById('project-description').value;
            let due = document.getElementById('project-due-date').value;
            let priority = document.getElementById('project-priority').value;
            let test = new Project(title, description, due, priority);
            console.log(test.info());
        })
    })()
}


class Project {
    constructor(_title, _description, _dueDate, _priority) {
        this.title = _title;
        this.description = _description;
        this.dueDate = _dueDate;
        this.priority = _priority;
        }
    
    info() {
        return {
            Title: this.title, 
            Description: this.description, 
            'Due Date': this.dueDate, 
            Priority: this.priority,
        }
    }

}

