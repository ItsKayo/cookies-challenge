const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8080;

app.use(cookieParser())

app.get("/", (req, res) => {
    res.send('Home page')
})

app.get("/login",  (req, res) => {
    let opts = {
        maxAge: 900000,
        httpOnly: true,
        sameSite: 'strict'
    };

    res.cookie('name', 'Bob', opts);
    res.send('Login successful');
})

app.get("/hello", (req, res) => {
    res.send(`Welcome ${req.cookies.name}!`)
})

app.listen(port, () => {console.log(`Server listenig on port ${port}`)})