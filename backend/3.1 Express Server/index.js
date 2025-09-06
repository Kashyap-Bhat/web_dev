import express from "express";

const app = express();
const port = 3000;
app.listen(port, () =>{
    console.log(`the server is live at port ${port}`);
})