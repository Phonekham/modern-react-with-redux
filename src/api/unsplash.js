import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 4400daddffec65fd202ec21d290a530d8554bcdfd48f36131e657b7d77d89b81"
  }
});
