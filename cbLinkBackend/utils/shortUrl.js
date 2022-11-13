const getShortURL = (n) => {
  const charMap =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
  const shortUrl = [];

  while (n) {
    shortUrl.push(charMap[n % 64]);
    n = Math.floor(n / 64);
  }

  return shortUrl.join("");
};

module.exports = getShortURL;