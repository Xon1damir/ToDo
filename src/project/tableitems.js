import React from "react";
class Items extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let rows = [];
    // sorting
    let sortedTasks = this.props.tasks;
    if (this.props.sort_by == "id") {
      sortedTasks.sort(function (a, b) {
        return a.id - b.id;
      });
    } else if (this.props.sort_by == "text") {
      sortedTasks.sort(function (first, second) {
        if (first.task < second.task) return -1;
        if (first.task > second.task) return 1;
        return 0;
      });
    } else if (this.props.sort_by == "timing") {
      sortedTasks.sort(function (first_time, second_time) {
        if (first_time.time < second_time.time) return -1;
        if (first_time.time > second_time.time) return 1;
        return 0;
      });
    }

    // pushing

    for (let i = 0; i < sortedTasks.length; i++) {
      let a_id = sortedTasks[i].id;
      rows.push(
        <tr>
          <td>{sortedTasks[i].id}</td>
          <td>{sortedTasks[i].task}</td>
          <td>{sortedTasks[i].time}</td>
          <td>
            <button
              className="btn btn-outline-danger"
              onClick={(e) => this.props.deleteTasks(a_id, e)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    }
    return (
      <React.Fragment>
        {rows}
        <tr>
          <td>$</td>
          <td>
            <input
              onChange={this.props.handleChange}
              value={this.props.value}
              placeholder="Enter your work name "
            ></input>
          </td>
          <td>
            <input
              onChange={this.props.changeTiming}
              value={this.props.timing}
              placeholder="Enter your time "
            ></input>
          </td>
          <td>
            <button
              className="btn btn-outline-success"
              onClick={this.props.addTasks}
            >
              ADD
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}
export default Items;
