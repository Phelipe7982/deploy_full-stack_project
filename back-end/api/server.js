import express from "express";
import { db } from "./connect.js";
import cors from "cors";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3001;
app.use(cors());

app.get("/api/", (req, res) => {
    res.send("Página inicial da api")
})

app.get("/api/artists", async (req, res) => {
    res.send(await db.collection("artists").find({}).toArray());
})

app.get("/api/songs", async (req, res) => {
    res.send(await db.collection("songs").find({}).toArray());
})

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", async (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})