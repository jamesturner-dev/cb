const https = require("https");
const fs = request("fs");
const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const fileupload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

dotenv.config({ path: "./config/config.env" });
connectDB();

const directories = require("./routes/directories");
const links = require("./routes/links");
const auth = require("./routes/auth");
const users = require("./routes/users");
const count = require("./routes/count");
const shortUrl = require("./routes/shortUrl");
const search = require("./routes/search");
const suggested = require("./routes/suggested");

const app = express();

app.use(express.json());
app.use(cookieParser());

var cors = require("cors");

app.use(
  cors({
    origin: ["https://cb.link", "http://localhost:5173"],
    credentials: true,
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(fileupload());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/dir", directories);
app.use("/api/v1/links", links);
app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);
app.use("/api/v1/count", count);
app.use("/api/v1/shortUrl", shortUrl);
app.use("/api/v1/search", search);
app.use("/api/v1/suggested", suggested);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV || "development";

const server = https
  .createServer(// Provide the private and public key to the server by reading each
  // file's content with the readFileSync() method.
  {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  },app)
  .listen(4000, ()=>{
    console.log('server is runing at port 4000')
  });



app.listen(
  PORT,
  console.log(`Server running in ${MODE} mode on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
