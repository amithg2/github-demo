const axios = require("axios");
console.log(process.argv);
const sha = ''
const sendCommitNotification = async () => {
  try {
    // await axios.get("here the url of server");
    console.log("sending message to server - success");
  } catch (e) {
    console.log("sending message to server - ERROR");
    console.log(e);
  }
};

sendCommitNotification();
