/*

Run the program
Take song name
Return song Info
Get Spotify API

Get song name
Send req to Spotify API w/ song name
Recieve result
Print song info

Node Spotify "Song name"


*/

const SpotifyApi = require('spotify-web-api-node')
// credentials are optional
const config = {
    clientId: 'fcecfc72172e4cd267473117a17cbd4d',
    clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
    redirectUri: 'http://www.example.com/callback'
  }
  
var spotifyApi = new SpotifyApi()

const songName = process.argv[2]
console.log (spotifyApi)

spotifyApi.getTrack(songName)