const axios = require("axios");
const sha = process.argv[2]
const sendCommitNotification = async () => {
  try {
    await axios.get(`https://auditech-server.herokuapp.com/commits/new/${sha}`, );
    console.log("sending message to server - success");
  } catch (e) {
    console.log("sending message to server - ERROR");
    console.log(e);
  }
};

sendCommitNotification();
