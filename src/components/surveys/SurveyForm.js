// SurveyForm shows a form for a user to add input
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field
          type="text"
          label="Survey Title"
          name="title"
          component={SurveyField}
        />
        <Field
          type="text"
          label="Subject Line"
          name="subject"
          component={SurveyField}
        />
        <Field
          type="text"
          label="Email body"
          name="body"
          component={SurveyField}
        />
        <Field
          type="text"
          label="Recipient List"
          name="emails"
          component={SurveyField}
        />
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit((values) => console.log(values))}>
        {this.renderFields()}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "surveyForm",
})(SurveyForm);
