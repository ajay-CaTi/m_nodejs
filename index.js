require("dotenv").config();
const express = require("express");
const app = express();
const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRoute");

//middleware
app.use(express.json());
app.use(express.static(process.env.PUBLIC_DIR));
app.use("/products", productRouter.router);
app.use("/users", userRouter.router);

// CREATE APi
// READ Get /products
// READ get products
// UPDATE API
// UPDATE API patch
// DELETE APi

app.listen(process.env.PORT, () => {
  console.log(`Server started`);
});
