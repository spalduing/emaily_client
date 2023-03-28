import React from "react";
import map from "lodash/map";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actions from "../../actions/";
import FIELDS from "./formFields";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = () => {
    return map(FIELDS, ({ label, name }) => (
      <div>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    ));
  };
  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields()}

      <button
        type="button"
        className="yellow darken-3 btn-flat  white-text"
        onClick={onCancel}
      >
        Back
        <i className="material-icons right">navigate_before</i>
      </button>

      <button
        type="button"
        className="teal btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps({ form }) {
  return { formValues: form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
