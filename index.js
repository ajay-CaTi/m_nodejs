const http = require("http");
const fs = require("fs");
const PORT = 4000;

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

// console.log(product);

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/product")) {
    const id = req.url.split("/")[2];
    const product = products.find((p) => p.id === +id);
    console.log(req.url, req.method);

    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    const da = index
      .replace("**title**", product.title)
      .replace("**url**", product.thumbnail)
      .replace("**price**", product.price)
      .replace("**rating**", product.rating);
    res.end(da);
    return;
  }

  switch (req.url) {
    case "/":
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(index);
      break;

    case "/api":
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(data));
      break;

    default:
      res.end("<h1>Not Found</h1>");
      break;
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Listening http://localhost:${4000}`);
});
