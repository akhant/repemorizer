export const isError = errors => {
  return Object.values(errors).some(val => val !== "");
};
