import React from "react";
import { connect } from "react-redux";

import { fetSurveys } from "../../actions";

const SurveyList = ({ surveys }) => {
  function renderSurveys() {
    return surveys
      .reverse()
      .map(({ _id, title, subject, body, yes, no, dateSent }) => {
        return (
          <div class="card darken-1" key={_id}>
            <div class="card-content">
              <span class="card-title">{title}</span>
              <p>{body}</p>
              <p className="right">
                Send On: {new Date(dateSent).toLocaleDateString()}
              </p>
            </div>
            <div class="card-action">
              <a href="#">Yes: {yes}</a>
              <a href="#">No: {no} </a>
            </div>
          </div>
        );
      });
  }
  return (
    <div>
      <h2>Surveys</h2>
      {renderSurveys()}
    </div>
  );
};

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, fetSurveys)(SurveyList);
