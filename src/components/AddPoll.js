import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSubmitPoll } from "../actions/polls";

class AddPoll extends Component {
  state = {
    question: "",
    a: "",
    b: "",
    c: "",
    d: ""
  };

  handleInputChange(name, value) {
    this.setState({
      [name]: value
    });
  }

  handleSubmit = e => {
    const poll = { ...this.state };
    e.preventDefault();
    this.props.history.push("/");
    this.props.dispatch(handleSubmitPoll(poll));
  };

  isDisabled = () => {
    const { question, a, b, c, d } = this.state;
    return question === "" || a === "" || b === "" || c === "" || d === "";
  };
  render() {
    const { question, a, b, c, d } = this.state;
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <h3 style={{ marginBottom: 5 }}>What is your question?</h3>
        <input
          value={question}
          name="question"
          className="input"
          type="input"
          onChange={e => this.handleInputChange("question", e.target.value)}
        />
        <h3>What are the options?</h3>
        <label className="label" htmlFor="input">
          A.
        </label>
        <input
          value={a}
          name="a"
          className="input"
          type="input"
          onChange={e => this.handleInputChange("a", e.target.value)}
        />
        <label className="label" htmlFor="input">
          B.
        </label>
        <input
          value={b}
          name="b"
          className="input"
          type="input"
          onChange={e => this.handleInputChange("b", e.target.value)}
        />
        <label className="label" htmlFor="input">
          C.
        </label>
        <input
          value={c}
          name="c"
          className="input"
          type="input"
          onChange={e => this.handleInputChange("c", e.target.value)}
        />
        <label className="label" htmlFor="input">
          D.
        </label>
        <input
          value={d}
          name="d"
          className="input"
          type="input"
          onChange={e => this.handleInputChange("d", e.target.value)}
        />
        <button className="btn" type="submit" disabled={this.isDisabled()}>
          Submit
        </button>
      </form>
    );
  }
}

export default connect()(AddPoll);
