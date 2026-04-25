const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PASSWORD_REGEX = {
  upper: /[A-Z]/,
  lower: /[a-z]/,
  number: /\d/,
};

export { EMAIL_REGEX, PASSWORD_REGEX };
