const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname + "/views" });
});
app.get("/about", (req, res) =>
  res.sendFile("./about.html", { root: __dirname + "/views" })
);
app.get("/contact-me", (req, res) =>
  res.sendFile("./contact-me.html", { root: __dirname + "/views" })
);
app.get("/*", (req, res) =>
  res.sendFile("./404.html", { root: __dirname + "/views" })
);

app.listen(port, () => {
  console.log("She's all yours, Captain!");
});
