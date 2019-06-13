import axios from "axios";

const KEY = "AIzaSyDHfCWhVoOENu3JUQvUHd6rXF_G1UGf-i0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
