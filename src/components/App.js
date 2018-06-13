import React, { Component } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    let tasks = JSON.parse(localStorage.getItem("tasks"));
			if(!tasks)
			{
				tasks =
					[
						{task: 'Go to Dentist', isComplete: false},
						{task: 'Do Gardening', isComplete: true},
						{task: 'Renew Library Account', isComplete: false},
					];
			}

      this.state = {
        tasks: tasks
      }

      this.deleteTask = this.deleteTask.bind(this);
      this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
      this.addTaskClick = this.addTaskClick.bind(this);
    }


    toggleTaskStatus(index) {
      let tasks = JSON.parse(JSON.stringify(this.state.tasks));

      if(tasks[index].isComplete)
			{
					tasks[index].isComplete = false;
			}
			else{
					tasks[index].isComplete = true;
			}

      this.setState({
        tasks: tasks
      });

  	}

    deleteTask(index) {

      let tasks = JSON.parse(JSON.stringify(this.state.tasks));
			tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
  	}

    addTaskClick(task) {

        let tasks = JSON.parse(JSON.stringify(this.state.tasks));
  			let newTask = {
        task,
        isComplete: false,
  			};
        tasks.push(newTask);
        this.setState({
          tasks: tasks
        });

  	}


  render() {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    return (
      <div className="container">
<br/>
<br/>
          <TaskForm addTaskClick={this.addTaskClick}/>
          <TaskList tasks={this.state.tasks}
            toggleTaskStatus={this.toggleTaskStatus}
            deleteTask={this.deleteTask}/>
      </div>
    );
  }
}

export default App;
