import axios from "axios"

const instance = axios.create({
  baseURL: "https://lockdown-date-server.herokuapp.com/api",
})

export const getDates = () => {
  return instance.get("/dates")
}

export const getTimings = () => {
  return instance.get("/timings")
}
