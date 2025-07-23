import axios, { type AxiosInstance } from "axios";

export const axiosClient = (baseURL?: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseURL || "https://url-shortener-service.p.rapidapi.com",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key":
        "c714f15a4fmsh834b9c29cf34deap1d7308jsned36279fefe2",
      "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
    },
  });

  return instance;
};

export const ApiClient = axiosClient();
