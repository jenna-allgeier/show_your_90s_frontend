import Axios from "axios";

export const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://nineties-api.herokuapp.com' : 'http://localhost:3002';

const Client = Axios.create({ baseURL: BASE_URL });

Client.interceptors.request.use(
  (config) => {
    // Reads the token in localStorage
    const token = localStorage.getItem("token");
    console.log(token)
    // if the token exists, we set the authorization header
    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }
    return config; // We return the new config if the token exists or the default config if no token exists.
    // Provides the token to each request that passes through axios
  },
  (error) => Promise.reject(error)
);

export default Client;
