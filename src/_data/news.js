require('dotenv').config();

// console.log(require("dotenv").config())
const { default: axios } = require("axios");
//import 'dotenv/config'


module.exports = async function() {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=6a54a43d575c4d44a0e117eb032413d1&pageSize=5');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}