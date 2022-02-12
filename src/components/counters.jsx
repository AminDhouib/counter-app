import { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onReduction,
      onAdd,
      onAddTotal,
    } = this.props;

    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onReduction={onReduction}
            counter={counter}
          >
            <h4>Title</h4>
          </Counter>
        ))}

        <button onClick={onAdd} className="btn btn-primary btn-sm m-2">
          Add Counter
        </button>

        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset All To 0
        </button>

        <button onClick={onAddTotal} className="btn btn-primary btn-sm m-2">
          Show / Hide Total
        </button>
      </div>
    );
  }
}

export default Counters;
