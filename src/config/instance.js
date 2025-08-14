import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTVjOGRlNWViYWFjMWNlMmMwYjc1ZmJhOTgwMDQ4MiIsInN1YiI6IjY0MTQ5MzFiYjQyMjQyNDE0MmE0NmQxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nJVimJfnnidPs-tHhkKvO9kNO0WGYwvj-NUp5eJrqA8`,
  },
});

export default instance;
