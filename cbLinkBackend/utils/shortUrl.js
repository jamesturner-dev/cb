const getShortURL = (n) => {
  let charMap =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
  let shortUrl = [];

  while (n) {
    shortUrl.push(charMap[n % 64]);
    n = Math.floor(n / 64);
  }

  return shortUrl.join("");
};

module.exports = getShortURL;