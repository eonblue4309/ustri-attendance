import React from "react";

const classes = [
  {
    date: "3/22/2018"
  }
];

const StudentList = () => (
  <ol>
    <li>Daniel Wung (Genkou)</li>
    <li>Alex Wrobel</li>
    <li>Karen Daniels</li>
  </ol>
);

export default class BrightAttendance extends React.Component {
  constructor() {
    super();
    this.state = {
      adding: false
    };
    this.add = this.add.bind(this);
  }

  add() {
    this.setState({ adding: true });
  }

  render() {
    return (
      <div>
        <h2>Brighton Study Group</h2>
        <button type="button" onClick={this.add}>
          Add attendance
        </button>
        {this.state.adding && <StudentList />}
        <ol>{classes.map(c => <li key={c.date}>{c.date}</li>)}</ol>
      </div>
    );
  }
}
