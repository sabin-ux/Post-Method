const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");  // 🔧 this is important
app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

// GET - Form page
app.get("/", (req, res) => {
    res.render("index", { email: '', username: '', message: '' });
});

// POST - Handle email submission
app.post("/submit", (req, res) => {
    const { username, email, password } = req.body;  // Destructure email, username, and password
    const message = "Sign Up Successful!";  // Success message
    res.render("index", { username, email, message });  // Send values and message to the view
    console.log("Username submitted:", username);
    console.log("Email submitted:", email);
    console.log("Password submitted:", password);
});

app.listen(3000, () => {
    console.log("The server is running on port 3000");
});