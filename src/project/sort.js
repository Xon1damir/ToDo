import React from "react";

class Sort extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let checkState = [];

    if (this.props.sort == false) {
      checkState.push(
        <button
          className="btn btn-outline-primary"
          onClick={this.props.changeSortState}
        >
          Sort
        </button>
      );
    } else if (this.props.sort_by == "id") {
      checkState.push(
        <button
          className="bg-1"
          onClick={(e) => this.props.changeSortBy("id", e)}
        >
          Serial number
        </button>,
        <button
          className="bg-2"
          onClick={(e) => this.props.changeSortBy("text", e)}
        >
          According to the text
        </button>,
        <button
          className="bg-2"
          onClick={(e) => this.props.changeSortBy("timing", e)}
        >
          Timing
        </button>
      );
    } else if (this.props.sort_by == "text") {
      checkState.push(
        <button
          className="bg-2 "
          onClick={(e) => this.props.changeSortBy("id", e)}
        >
          Serial number
        </button>,
        <button
          className="bg-1"
          onClick={(e) => this.props.changeSortBy("text", e)}
        >
          According to the text
        </button>,
        <button
          className="bg-2"
          onClick={(e) => this.props.changeSortBy("timing", e)}
        >
          Timing
        </button>
      );
    } else if (this.props.sort_by == "timing") {
      checkState.push(
        <button
          className="bg-2 "
          onClick={(e) => this.props.changeSortBy("id", e)}
        >
          Serial number
        </button>,
        <button
          className="bg-2 "
          onClick={(e) => this.props.changeSortBy("text", e)}
        >
          According to the text
        </button>,
        <button
          className="bg-1"
          onClick={(e) => this.props.changeSortBy("timing", e)}
        >
          Timing
        </button>
      );
    }
    return (
      <div className=" w-100 mx-auto d d-flex justify-content-around">
        {checkState}
      </div>
    );
  }
}

export default Sort;
