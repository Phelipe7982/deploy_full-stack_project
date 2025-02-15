import { MongoClient } from "mongodb";

const URI = "mongodb+srv://Phelps_fullstack:phelps7982cluster@cluster0.xhjkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

export const db = client.db("spotify_project");

// console.log(db);