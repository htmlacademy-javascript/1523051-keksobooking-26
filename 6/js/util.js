const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloatInclusive = (min, max, afterPoint) => {
  if (max>min) {
    return Number((min + Math.random() * (max - min)).toFixed(afterPoint));}
  if (min===max) {
    return Number(min.toFixed(afterPoint));
  }
  return 'Значение От больше значения До';
};

export {getRandomInt, getRandomFloatInclusive};
