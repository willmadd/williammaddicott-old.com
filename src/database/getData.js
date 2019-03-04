const axios = require("axios");

exports.getData=()=>{
  return axios.get('https://www.williammaddicott.com/test-api.php')
}
