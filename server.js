"use strict";
const log = console.log;

const express = require("express");
// starting the express server
const app = express();

/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(__dirname + "/build"));

app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }
    // send index.html   
    res.sendFile(__dirname + "/public/index.html");   
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
	log(`Listening on port ${port}...`)
});