const express = require("express");
const app = express();

app.get("/", (req, resp) => {
    resp.send("Hello World!");
});

const port = process.env.port || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});