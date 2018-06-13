import React, { Component } from 'react';

class TaskForm extends Component{

  constructor(props) {
      super(props);
      this.state = {task: ""};
      this.inputUpdated = this.inputUpdated.bind(this);
      this.submitTask = this.submitTask.bind(this);

    }

  inputUpdated(e) {
      const input = e.target.value;
      this.setState({task: input});
  }

  submitTask (event) {
     event.preventDefault();
     const { task } = this.state;
     const { addTaskClick } = this.props;
     addTaskClick(task);
     this.setState( {task : ""} );
 }

render(){
  return(
    <div className="row input-area">
    {<form onSubmit={this.submitTask}>
      <div className="col-md-1"></div>
      <div className="form-group col-md-9">
        <input className="form-control" type="input" value={this.state.task} onInput={this.inputUpdated}></input>
      </div>
      <div className="form-group col-md-1">
        <button type="submit" className="btn btn-primary">Add</button>
      </div>
      <div className="col-md-1"></div>
      </form>}
    </div>);
}
}


export default TaskForm;
