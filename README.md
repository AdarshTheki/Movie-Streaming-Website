### React Stream Website

### Description:

A web application for streaming TV shows and movies, built with React, using the TMDB API.

### Features:

- TV and Movie listing with category-wise filtering
- Detailed information pages for each title
- Related and recommended titles
- Search functionality
- Filter by genre, year, and rating
- Infinite scroller
- Slider show for featured titles
- Watched trailers

### API Used:

- TMDB API `https://api.themoviedb.org/3`

### Technologies Used:

- React
- Axios
- React-Player
- SASS
- Firebase (for hosting)
- React-Loading-Skeleton
- React-Icons
- Redux Toolkit

### Screenshot:

!screenshot.png

### Setup:

- Clone the repository
- Run npm install to install dependencies
- Create a Firebase project and set up hosting
- Set up TMDB API key
- Run npm start to start the application

### License:

- [MIT License]()

### Author:

- [Adarsh Verma]()

### Image Size Adjust:

```js
{
    "base_url": "http://image.tmdb.org/t/p/",
    "secure_base_url": "https://image.tmdb.org/t/p/",
    "max width": "w1920_and_h800_multi_faces",
    "backdrop_sizes": [ "w300", "w780", "w1280", "original" ],
    "logo_sizes": [ "w45", "w92", "w154", "w185", "w300", "w500", "original" ],
    "poster_sizes": [ "w92", "w154", "w185", "w342", "w500", "w780", "original" ],
    "profile_sizes": [ "w45", "w185", "h632", "original" ],
    "still_sizes": [ "w92", "w185", "w300", "original" ]
}
```
