const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  // Validate the input school
  data.school = !isEmpty(data.school) ? data.school : "";
  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is required";
  }

  // Validate the input degree
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is required";
  }

  // Validate the input fieldofstudy
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study field is required";
  }

  // Validate the input from
  data.from = !isEmpty(data.from) ? data.from : "";
  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
