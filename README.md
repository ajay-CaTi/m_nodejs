# Important

# What is the difference between res header and res setHeader?

This two methods do exactly the same thing, set the headers HTTP response. The only difference is res. setHeader() allows you only to set a singular header and res. header() will allow you to set multiple headers.

#

response.setHeader() allows you only to set a singular header.

response.writeHead() will allow you to set pretty much everything about the response head including status code, content, and multiple headers.

# Parameters: It accepts three parameters as mentioned above and described below:

statusCode <number>: It accepts the status codes that are of number type.
statusMessage <string>: It accepts any string that shows the status message.
headers <Object>: It accepts any function, array, or string.

# const t2 = performance.now();

# What is buffer vs stream in node JS?

- A buffer is a temporary memory that a stream takes to hold some data until it is consumed.

- A buffer is a space in memory (typically RAM) that stores binary data. In Node. js, we can access these spaces of memory with the built-in Buffer class. Buffers store a sequence of integers, similar to an array in JavaScript. Unlike arrays, you cannot change the size of a buffer once it is created.

# What is middleware?

Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.

# 3 ways to send data

- URL
- QUERY
- DATA

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

var express = require('express'); var app = express();
app.get('/', function(req, res, next) { next());
})
app.listen(3000);

# // this function(res, res, next) is middleware

# .get HTTP method for which the middleware function applies.# / Path (route) for which the middleware function applies.

# next -- Callback argument to the middleware function, called "next" by convention.

# next will be called with either the rejected value or the thrown Error.

# bodyParser PURANA plugin need to import But now it is default in express just use express.json()

# Static hosting built with static middle ware like

app.use(express.static("public"));
public flder me /index.html or /data.json en file ko access kerne me koi server nterfarance nahi h

# static hosting is above level and serve files directly through this folder

- express.static serves static assets such as HTML files, images, and so on.
- express.json parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
- express.urlencoded parses incoming requests with URL-encoded payloads. NOTE: Available with Express 4.16.0+

res.send() // HTML
res.sendFile() // file
res.json() // json

#

Course Content :
00:00:00 Course RoadMap
00:02:54 Ch 1 : Modules System, FS, REPL, NPM, Package.json
00:56:29 Ch 2 : Web Server using Node JS
02:07:11 Ch 3 : Express JS
03:01:52 Ch 4 : REST APIs and CRUD
03:33:55 Ch 5 : Model View Controller (MVC) and File structure
04:13:05 Ch 6 : Mongo DB basics, Mongo Atlas
06:02:05 Ch 7 : Mongoose, Schema, Model and CRUD operations
07:20:38 Ch 8 : MERN - Connecting API with React
08:11:27 Ch 9 : Deploying MERN app on live cloud server
08:48:54 Ch 10 : Server Side Rendering - with EJS
09:30:39 Ch 11: Authentication using JWT
10:42:30 Ch 12 : Events, Streams, Sockets - socket.io

Node JS

1. Run Time + APi
2. Async
3. Non-Blocking I/O

Node js not a web server

Use express to make it web server

Use Electron to make application

Node is usefull in Heavy I/O

## Small code

1.  [
    index.js
    import { sum, diff } from "./lib.js";
    console.log(sum(4, 5), diff(7, 9));

lib.js
const sum = (a, b) => {
return a + b;
};
const diff = (a, b) => {
return a - b;
};
export { sum, diff };

package.json
{
"type": "module"
}

]

2.  [
    lib.js
    exports.sum = (a, b) => {
    return a + b;
    };
    exports.diff = (a, b) => {
    return a - b;
    };

// module.exports.sum=sum;
// module.exports.diff=diff;

index.js
const lib = require("./lib.js");
console.log(lib.sum(4, 5), lib.diff(7, 9));
]

Each file in Node is called module

Peviously node support common js( require ) module
but now it also support EJS module

# git

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ajay-CaTi/m_nodejs.git
git push -u origin main
