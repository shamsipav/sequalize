import { newUser, getUsers } from './user.controller.js';

import express from 'express';
const app = express();
const port = 3000;

app.get("/create", async (req, res) => {
    let user = await newUser();
    res.send(`User object ${JSON.stringify(user)} was created`);
});

app.get("/list", async (req, res) => {  
    let users = await getUsers();
    res.send(`${JSON.stringify(users)}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
