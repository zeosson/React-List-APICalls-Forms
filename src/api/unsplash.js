import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID 08bbefa111025da7842d0f6cbeb3465803f7e4dfa5d5d83788d34f54c40b8124"
      }
});