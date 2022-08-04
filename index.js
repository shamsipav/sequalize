const userModule = require('./user.controller.cjs');
const express = require("express");
const app = express();
const port = 3000;

app.get("/create", async (req, res) => {
    let user = await userModule.newUser();
    res.send(`User object ${JSON.stringify(user)} was created`);
});

app.get("/list", async (req, res) => {  
    let users = await userModule.getUsers();
    res.send(`${JSON.stringify(users)}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
