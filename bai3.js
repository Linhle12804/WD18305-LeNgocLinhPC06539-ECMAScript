var fs = require("fs");
var axios = require("axios");

fs.readFile("./data.json", { encoding: "utf8" }, async function (err, data) {
  console.log("Data loaded from disk", data);

  const res = await axios.get("http://jsonplaceholder.typicode.com/todos/1");
  console.log("Data downloaded from url", res.data);
});
