const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloatInclusive = (min, max, afterPoint) => {
  if (max>min) {
    return (min + Math.random() * (max - min)).toFixed(afterPoint);}
  else {
    if (min===max) {
      return min.toFixed(afterPoint);
    } else {
      return 'Значение От больше значения До';
    }
  }
};

getRandomInt(1, 6);
getRandomFloatInclusive(0.5, 1.5);
