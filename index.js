const express = require("express");
const app = express();
const PORT = 4000;
const { router } = require("./routes/productRoute");

//middleware
app.use(express.json());
app.use(express.static("public"));
app.use("/api", router);

// CREATE APi
// READ Get /products
// READ get products
// UPDATE API
// UPDATE API patch
// DELETE APi

app.listen(PORT, () => {
  console.log(`Server started`);
});
