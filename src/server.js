require("dotenv").config();
const express = require('express');
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const initRoutes = require('./routes')

const app = express();
app.use(
    cors({
      origin: '*',
      methods: ["POST", "PUT", "DELETE", "GET"],
    })
  );


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
initRoutes(app)

dbConnect();

const PORT = process.env.PORT || 3308

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});