import React, { Component } from 'react';


class Task extends Component{


  onDeleteTask(event){
    event.preventDefault();
    const deleteTask = this.props.deleteTask;
    deleteTask(this.props.index);
  }

  toggle(event){

    const toggle = this.props.toggleTaskStatus;
    toggle(this.props.index);
  }

  render() {
const task = this.props.task;
const toggle = this.toggle.bind(this);
const taskClass = task.isComplete ? 'col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text complete' : 'col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text';
const onDeleteTask = this.onDeleteTask.bind(this);

          return (
            <li className="list-group-item checkbox">
                <div className="row">
                  <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                    <label><input id={this.props.index} type="checkbox" checked={task.isComplete}  onChange={toggle}  value="" className="checkbox" /></label>
                  </div>
                  <div className={taskClass}>
                    {task.task}
                  </div>
                  <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                    <a  onClick={onDeleteTask}  href="/" ><i id="deleteTask" className="delete-icon glyphicon glyphicon-trash"></i></a>
                  </div>
                </div>
              </li>
      )};

}


export default Task;
