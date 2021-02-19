import axios from "axios"

const instance = axios.create({
  baseURL: "https://lockdown-date-server.herokuapp.com/api",
})

export const getDates = (name, timings, categories) => {
  return instance.get(
    `/dates?name=${name}${timings
      .map(timing => `&timings=${timing}`)
      .join("")}${categories
      .map(category => `&categories=${category}`)
      .join("")}`
  )
}

export const getTimings = () => {
  return instance.get("/timings")
}

export const getCategories = () => {
  return instance.get("/categories")
}
