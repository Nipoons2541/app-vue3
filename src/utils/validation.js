export const validationRules = {
  NUMBER: /[^0-9]/g,
  ENGLISH: /[^A-Za-z]/g,
  THAI: /[^ก-๙]/g,
};
export const validationInput = (input, reg) => {
  const value = input;
  const matching = value.match(reg);
  if (matching) {
    return true;
  } else {
    return false;
  }
};
