import React from "react";

const Form = props => (
  <form>
    <div className="form-group">
      <h4>
        <strong>Location</strong>
      </h4>
      <input
        className="form-control"
        type="text"
        value={props.q}
        name="q"
        onChange={props.handleInputChange}
        required
      />
      <h4>
        <strong>Start Time</strong>
      </h4>
      <input
        className="form-control"
        type="number"
        value={props.start_time}
        name="start_time"
        onChange={props.handleInputChange}
        required
      />
      <h4>
        <strong>End Time</strong>
      </h4>
      <input
        className="form-control"
        type="number"
        value={props.end_time}
        name="end_year"
        onChange={props.handleInputChange}
        required
      />
    </div>
    <div className="pull-right">
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-lg btn-danger"
      >
        Submit
      </button>
    </div>
  </form>
);

export default Form;