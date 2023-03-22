import express from 'express';
import fs from "fs"; // file system
import path from 'path'; // path module

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const PORT = '8888';

const app = express();
// ^ symbol of the beginning of the line and symbol of ending of the line means we have to pass route their.
// (req, res, next) is a resolver function
// utf-8 - encoding
// (err, data) - resolver function
// data.replace() - we have to pass the data or mounting point which is <div id="root"></div>
app.use("^/$", (req, res, next) => {
    fs.readFile(path.resolve("./build/index.html"), 'utf-8', (err, data) => {
        if(err) {
            return res.status(500).send("Server Error");
        }
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App/>)}</div>`)) // we r using ${} place holder to render the react application
    })
})

// when app found index.html of build folder, and get data then going first to mounting point, then ReactDOMServer
// render is as a String in APP component.

// we also want to serve the static files from build folder

// IMPORTANT : server side support for JSX we have to install bable for it.

app.use(express.static(path.resolve(__dirname, "..", "build")))
app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
})