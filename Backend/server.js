const express = require("express");
const userRoutes = require("./Routes/userRoutes");
const app = express();
const PORT = process.env.PORT || 6000;
app.use(express.json());
app.use(express.urlencoded());
app.listen(PORT, () => {
  console.log("Server don start for port: " + PORT);
});
app.get("/", function (req, res) {});
app.use("/user/api", userRoutes);
