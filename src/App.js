import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [],
    isTotalVisible: false,
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleReduction = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleAdd = () => {
    const counters = this.state.counters;
    let highestId = 0;
    for (const counter of counters) {
      if (counter.id > highestId) {
        highestId = counter.id;
      }
    }
    counters.push({ id: highestId + 1, value: 0 });
    console.log(counters);
    this.setState({ counters: counters });
  };

  handleShowTotal = () => {
    let isTotalVisible = this.state.isTotalVisible;
    this.setState({ isTotalVisible: !isTotalVisible });
  };

  addTotal = () => {
    const counters = this.state.counters;
    let total = 0;
    for (const counter of counters) {
      total += counter.value;
    }
    return total;
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length}></NavBar>
        <main className="container m-2">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReduction={this.handleReduction}
            onAdd={this.handleAdd}
            onAddTotal={this.handleShowTotal}
          />
          <span>
            {this.state.counters.length === 0 && this.state.isTotalVisible ? (
              <h6> Add counters before getting total!</h6>
            ) : this.state.isTotalVisible ? (
              <h6> The total is {this.addTotal()}.</h6>
            ) : (
              <span></span>
            )}
          </span>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
