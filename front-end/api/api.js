import axios from "axios";
import "dotenv/config";

// const { NODE_ENV } = process.env;
const URL = "https://deploy-full-stack-project.onrender.com/api";

const resposeArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = resposeArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseSongs.data);