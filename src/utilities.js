export const randomCoordinates = () => {
  const x = Math.round(Math.random() * 9);
  const y = Math.round(Math.random() * 9);
  return [x, y];
};

export const randomBoolean = () => {
  return Math.random() > 0.5 ? true : false;
};

export default randomCoordinates;
