const axios = require("axios");
const sha = process.argv[3]
const sendCommitNotification = async () => {
  try {
    // await axios.get("here the url of server");
    console.log(sha);
    console.log("sending message to server - success");
  } catch (e) {
    console.log("sending message to server - ERROR");
    console.log(e);
  }
};

sendCommitNotification();
