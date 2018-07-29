const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  // Validate the input handle
  data.handle = !isEmpty(data.handle) ? data.handle : "";
  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to be between 2 and 40 characters";
  }
  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle is required";
  }

  // Validate the input status
  data.status = !isEmpty(data.status) ? data.status : "";
  if (Validator.isEmpty(data.status)) {
    errors.status = "Status field is required";
  }

  // Validate the input skills
  data.skills = !isEmpty(data.skills) ? data.skills : "";
  if (Validator.isEmpty(data.skills)) {
    errors.skills = "Skills field is required";
  }

  // Validate the input website
  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "No a valid URL";
    }
  }

  // Validate the input youtube
  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "No a valid URL";
    }
  }

  // Validate the input twitter
  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "No a valid URL";
    }
  }

  // Validate the input facebook
  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "No a valid URL";
    }
  }

  // Validate the input linkedin
  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "No a valid URL";
    }
  }

  // Validate the input instagram
  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "No a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
