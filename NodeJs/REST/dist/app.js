"use strict";
const express = require("express");
// const userRoutes = require("./Routes/userRouter")
const app = express();
app.use(express.json());
// app.use("/User/",userRoutes);
app.listen(3000, (req, resp) => {
    console.log("Server is started at 3000!");
});
