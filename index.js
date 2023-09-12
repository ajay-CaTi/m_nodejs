const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const app = express();
const PORT = 4000;
const morgan = require("morgan");

app.use(express.json());
// third party middleware
app.use(morgan("default"));
app.use(express.static("public"));

// app.use((req, res, next) => {
//   console.log(
//     req.get("User-Agent"),
//     new Date(),
//     req.method,
//     req.ip,
//     req.hostname
//   );
//   next();
// });

// auth middleware
// console.log(req.query.password); // /?password=123 auth depends on req.query
const auth = (req, res, next) => {
  // if (req.body.password === "123") {
  //   next();
  // } else {
  //   res.sendStatus(401);
  // }
  next();
};

// :id url parameter
app.get("/product/:id", auth, (req, res) => {
  console.log(req.params);
  res.json({ type: "get", data: `${new Date()}` });
});

app.post("/", (req, res) => {
  res.json({ type: "POST" });
});

app.put("/", (req, res) => {
  res.json({ type: "put" });
});

app.delete("/", (req, res) => {
  res.json({ type: "delete" });
});

app.patch("/", (req, res) => {
  res.json({ type: "patch" });
});

app.get("/demo", (req, res) => {
  // res.send("Hello express");
  // res.file("pathHere");
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server started`);
});
