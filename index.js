require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const app = express();
const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRoute");

// db connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDb");
  console.log("db connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

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
