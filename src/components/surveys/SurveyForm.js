// SurveyForm shows a form for a user to add input
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class SurveyForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit((values) => console.log(values))}>
        <div>
          <Field type="text" name="surveyTitle" component="input" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "surveyForm",
})(SurveyForm);
