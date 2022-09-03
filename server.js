const experss = require("express");
const app = experss();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const PORT = 8080;
app.use(experss.json(), cors());
app.get("/", (req, res) => {
  res.send("backend connected");
});

dotenv.config();
mongoose
  .connect("mongodb+srv://Nitesh9609:Nitesh9609@cluster0.fnrsx.mongodb.net/ApnaGhar?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => {
    console.log("Database is Connected");
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
