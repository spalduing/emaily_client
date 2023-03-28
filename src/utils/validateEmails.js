const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const validateEmails = (emails = "") => {
  const invalidEmails = emails
    .split(",")
    .map((email) => email.trim())
    .filter((email) => regex.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return null;
};

export default validateEmails;
