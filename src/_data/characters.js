// const axios = require("axios");

module.exports = async function () {
  console.log("fetching characters");
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  return data;
};
