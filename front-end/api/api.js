import axios from "axios";

const URL = "http://localhost:3001";

const resposeArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = resposeArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseSongs.data);