import axios from "axios"

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDEwNjA3YTVkNzFjNWIwZjEzNjY3MTViMDU4YjU2YyIsIm5iZiI6MTczNjE1OTgzMi4xMzIsInN1YiI6IjY3N2JiMjU4OGZkNmY1MTA5ZDcyZDViZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LfHdMkcLHSDBd98JAzXcrZz96EsA17_1hMuaukHHWEU'
      }
})
export default instance