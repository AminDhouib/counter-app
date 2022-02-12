import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>
          {this.formatCounterValue()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success btn-sm"
        >
          +
        </button>

        <button
          onClick={() => this.props.onReduction(this.props.counter)}
          className="btn btn-danger btn-sm m-1"
        >
          -
        </button>

        <button
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
          className="btn btn-secondary btn-sm m-1"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 p-3 alert-";
    classes += this.props.counter.value < 0 ? "warning" : "primary";
    return classes;
  }

  formatCounterValue() {
    const value = this.props.counter.value;
    return value;
  }
}

export default Counter;
