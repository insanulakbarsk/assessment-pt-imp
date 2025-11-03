import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // ganti sesuai domain Laravel
  withCredentials: true, // untuk cookie auth jika pakai sanctum
});

export default api;
