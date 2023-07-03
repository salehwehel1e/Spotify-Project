// import * as dfd from "danfojs-node";
import SpotifyWebApi from 'spotify-web-api-node';
// import cheerio from 'cheerio';
// import axios from 'axios';
// import _ from 'lodash';
// import jwt from 'jsonwebtoken';
// import fetch from 'node-fetch';
// import { getLyrics } from 'genius-lyrics-api';
// import react
// import React from 'react';
import axios from 'axios';

const client_id: string = '4b8ab60857d248d789e298cc29c88f8f';
const client_secret: string = 'e1102c7222d24e10bd366fcbcd9ebfb9';

const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
  },
  data: 'grant_type=client_credentials',
  method: 'POST',
};
heyyyyyyyy whats up!!!!

// spotify:track:0JJP0IS4w0fJx01EcrfkDe
axios(authOptions).then(response => {
  const token: string = response.data.access_token;
  console.log(token);

}).catch(error => {
  console.error(error);
});
