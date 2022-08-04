require("dotenv").config();
require("express-async-errors");

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/songs");
const playlistRoutes = require("./routes/playlists");
const searchRoutes = require("./routes/search");
const express = require("express")
const connection= require( "./db");
const cors = require("cors")


const app = express();
connection();
app.use(cors());
app.use(express.json())





app.use("/api/users", userRoutes);
app.use("/api/login", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/playlists", playlistRoutes);
app.use("/api/", searchRoutes);

const port = process.env.PORT || 8080;

app.listen(port, console.log(`Listening on port ${port}...`))