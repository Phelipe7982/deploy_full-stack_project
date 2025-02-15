import express from "express";
import { db } from "./connect.js";
import cors from "cors";

const app = express();
const PORT = 3001;
app.use(cors());

app.get("/", (req, res) => {
    res.send("Página inicial da api")
})

app.get("/artists", async (req, res) => {
    res.send(await db.collection("artists").find({}).toArray());
})

app.get("/songs", async (req, res) => {
    res.send(await db.collection("songs").find({}).toArray());
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})