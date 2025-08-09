cd '.\MoviePick-master\movie picks\’

ls

npm install

npm run start

-------------if not working-------------
1. Get-ChildItem
2. cd .\movieFrontend\
3.  npm init -y
4.  npm install
5.  npm run dev

______________________________________________________________

1. Open fork
2. file ⇒ Init New Repository
3. select the file you want
4. Local Changes
5. stage
6. Write a commit message
7. Commit the files
8. push
9. add a remote

______________________________________________________________

https://www.figma.com/design/Zvs5yzr2pFDRXfk2I5bumm/MoviePick?node-id=0-1&t=REQT44jaUqHLa8Q1-1

______________________________________________________________

VITE_TMDB_API_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjhmMmRiMTkyYWQxMWQwZWRmOGIzMjNjNjQ5MDE0ZCIsIm5iZiI6MTc1MjU4NzYwNC41NjksInN1YiI6IjY4NzY1ZDU0ZGYzYTlkM2Y5MjYzNzRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dBhbssvT4hNFb5W5TQyKUSIkgSkXbEDe6PYZYIx1o5c

______________________________________________________________

// API Configuration - You'll need to replace 'YOUR_TMDB_API_KEY_HERE' with your actual API key
const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.VITE_TMDB_API_KEY}` // Now using the environment variable
  }
}
