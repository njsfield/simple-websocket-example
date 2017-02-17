module.exports = () => {
  return Math.random().toString(36).split('').filter((value, index, self) => {
    return self.indexOf(value) === index;
  }).join('').substr(2, 8);
};
