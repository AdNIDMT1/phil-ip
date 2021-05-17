module.exports = function phil(string) {
  if (typeof string !== "string") throw new TypeError("Plz provide a string!");
  return string.replace(/\s/g, "");
};
