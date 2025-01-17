const express = require("express");
const mongoose = require("mongoose");
// const connectDB = require("./config/connectDB");
const app = express();
const path = require("path");
const upload = require("./middlewares/upload");
// require("dotenv").config();
let port = process.env.PORT || 5000;
// Middlewares
app.use(express.json());

// Connect to database
let url =
    "mongodb+srv://anouar1994:ca_19206656@cluster0.sywgc.mongodb.net/projectDB?retryWrites=true&w=majority";
const connectDB = mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));
// Routes Middlewares

// Register or Login User
app.use("/api/user", require("./routes/user"));
// Manage user profil
app.use("/api/profile", require("./routes/api"));
// Manage POSTS
app.use("/api/posts", require("./routes/posts"));
// Manage Hosting
app.use("/api/host", require("./routes/hosting"));
//Admin management
app.use("/api/admin", require("./routes/admin"));

// Upload
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app.post("/upload", upload, (req, res) => {
//     res.send("image uploaded successfully");
// });
// // Mange Image folder
// app.use("/images", express.static(path.join(__dirname, "images")));

if (process.env.NODE_ENV === "production") {
    app.use("/", express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client/build/index.html"));
    });
}

// Start the server
app.listen(port, () => {
    console.log("Server up and Running");
});
