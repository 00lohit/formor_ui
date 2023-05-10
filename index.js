const express = require("express");
const path = require("path");
const app = express();
const uiPath = path.join(__dirname, "/");

app.use("/", express.static(uiPath));

app.get("/healthcheck", (_req, res) => {
  res.status(200).json({ title: "Health check" });
});

app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: uiPath });
});

app.listen(3000, () => {
  console.log("Server started successfully");
});
