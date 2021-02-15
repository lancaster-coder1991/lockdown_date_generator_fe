import axios from "axios"

const instance = axios.create({
  baseURL: "https://lockdown-date-server.herokuapp.com/api",
})

export const getDates = (timings, categories) => {
  return instance.get("/dates", {
    params: {
      timings: timings,
      categories: categories,
    },
  })
}

export const getTimings = () => {
  return instance.get("/timings")
}

export const getCategories = () => {
  return instance.get("/categories")
}
