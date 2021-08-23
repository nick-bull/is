export const is = (...types) => (...args) => {
  const typesArray = [].concat(...types);
  const argsArray = [].concat(...args);

  // eslint-disable-next-line valid-typeof
  return argsArray.every((arg) => typesArray.some((type) => typeof arg === type));
};
