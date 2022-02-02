const axios = require("axios");

const fetchData = async () => {
  const { data } = await axios.get("https://api.github.com/repos/amithg2/github-demo/commits");
  console.log(data);
};

fetchData()