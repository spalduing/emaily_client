import React from "react";
import { Link } from "react-router-dom";

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <button
        type="button"
        className="yellow darken-3 btn-flat  white-text"
        onClick={onCancel}
      >
        Back
        <i className="material-icons right">navigate_before</i>
      </button>

      <button type="button" className="teal btn-flat right white-text">
        Send Survey
        <i className="material-icons right">done</i>
      </button>
    </div>
  );
};

export default SurveyFormReview;
