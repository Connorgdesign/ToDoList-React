import React, { Component } from 'react';
import Task from './Task'

class TaskList extends Component{
  render() {
  const { tasks } = this.props;
  return(
    <div>
      { tasks.map((task, index) =>
          <Task task={task} index={index} toggleTaskStatus={this.props.toggleTaskStatus} deleteTask={this.props.deleteTask}/>
      )}
    </div>
      );
  }
}


export default TaskList;
