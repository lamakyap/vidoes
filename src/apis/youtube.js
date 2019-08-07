import axios from 'axios';

const KEY = 'AIzaSyCwouoMDkWR4oBhy1gTKA64mkW1W9QLbLk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
});
