import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({msg: "hello world!"});
})

app.listen(4000, () => console.log("port is running on 4000"));