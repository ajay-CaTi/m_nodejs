const express = require("express");
const app = express();
const PORT = 4000;
const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRoute");

//middleware
app.use(express.json());
app.use(express.static("public"));
app.use("/products", productRouter.router);
app.use("/users", userRouter.router);

// CREATE APi
// READ Get /products
// READ get products
// UPDATE API
// UPDATE API patch
// DELETE APi

app.listen(PORT, () => {
  console.log(`Server started`);
});
