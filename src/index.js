
let start = {
    new: (function () {
        let newProject = document.getElementById('new');
        newProject.addEventListener('click', () => {
            newProject.style.display = 'none';
            form.style.display = 'grid';
        })

        let form = document.getElementById('form');
        form.addEventListener('submit',(event) => {
            event.preventDefault();
        })

        let submit = document.getElementById('submit');
        let list = [];
        let view = document.getElementById('project-list');
        submit.addEventListener('click',() => {
            let title = document.getElementById('project-name').value;
            let description = document.getElementById('project-description').value;
            let due = document.getElementById('project-due-date').value;
            let priority = document.getElementById('project-priority').value;
            let test = new Project(title, description, due, priority);
            console.log(test.info());
            form.reset();
            form.style.display = 'none';
            newProject.style.display = 'grid';
            list.push([title, description, due, priority]);
            let container = document.createElement('div');
            container.setAttribute('class', 'container');
            let add = document.createElement('button');
            let add2 = document.createElement('button');
            let add3 = document.createElement('button');
            add.setAttribute('class', 'add');
            add2.setAttribute('class', 'add2');
            add3.setAttribute('class', 'add3');
            add3.setAttribute('id', list.length-1 + 'a');
            add.setAttribute('id', list.length-1 + 'b');
            add2.setAttribute('id', list.length-1 + 'c');
            view.append(container);
            container.append(add3, add, add2);
            if(priority !== '') {
                add3.innerText = priority;
            } else {
                add3.innerText = 'Normal';
            }
            add.innerText = title;
            if(due !== '') {
                add2.innerText = due;
            } else {
                add2.innerText = 'No Due Date';
            }
            return list;
        });
    })(),

    view: (function () {
        let newProject = document.getElementById('new');
        let projectView = document.getElementById('project-view');
        let add = document.getElementsByClassName('add');
        let submit = document.getElementById('submit');
        submit.addEventListener('click', () => {
            for(i = 0; i < add.length; i++) {
                add[i].addEventListener('click', () => {

                // testing the highlight effect to know which project is being edited

                let test = document.getElementById('0a');
                    newProject.style.display = 'none';
                    projectView.style.display = 'grid';
                    test.style.backgroundColor = 'red';
                })
            }
        })
    })(),
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


