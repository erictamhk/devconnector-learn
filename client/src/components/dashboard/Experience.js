import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Monent from "react-moment";
import { deleteExperience } from "../../action/profileActions";

class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Monent format="YYYY/MM/DD">{exp.from}</Monent>&nbsp;-&nbsp;
          {exp.to === null ? (
            "Now"
          ) : (
            <Monent format="YYYY/MM/DD">{exp.to}</Monent>
          )}
        </td>
        <td>
          <button onClick={this.onDeleteClick.bind(this,exp._id)} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Experience Credentials</h4>
        <table className="table">
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Years</th>
            <th />
          </tr>
          {experience}
        </table>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
