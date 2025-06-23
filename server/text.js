const fetch = require('node-fetch');

const apiKey = 'AIzaSyCkFeHiPbfczRiORkUN4oGhKsJyf60Ajec';
const channelId = 'UCi-hS6rQNayQQnspMTPtAtQ';

async function getSubs() {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

getSubs();
