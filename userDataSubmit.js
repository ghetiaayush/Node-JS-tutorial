// function userDataSubmit(req,res) {res.write(`<h1>Form Submitted</h1>`);}module.exports = userDataSubmit;

const querystring = require("querystring");

function userDataSubmit(req, resp) {
  let dataBody = [];

  req.on("data", (chunk) => {
    dataBody.push(chunk);
  });

  req.on("end", () => {
    let rawData = Buffer.concat(dataBody).toString();
    let readableData = querystring.parse(rawData);

    let dataString =
      "My name is " +
      readableData.name +
      " and my password is " +
      readableData.password;

    console.log(dataString);
  });

  resp.write(`<h1>You can get data from user form here</h1>`);
}

module.exports = userDataSubmit;
