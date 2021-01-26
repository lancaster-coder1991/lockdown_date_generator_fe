import React, { useState, useEffect } from "react"
import { getDates } from "../axios"

export default function DateList() {
  const [dates, updateDates] = useState([])

  useEffect(() => {
    loadDates()
    console.log(`Dates loaded on first load of DateList:`, dates)
  }, [])

  const loadDates = async () => {
    await getDates().then(response => updateDates(response.data.dates))
  }

  return <div>this is the date list</div>
}

//button from index.js is pressed
//info from searchName, searchTimings and searchCategories is passed to DateList via props
//DateList runs getDates function from axios.js using filters passed from index.js as arguments
//When the response is received, DateList state is updated with the array of Dates
//DateList runs a function that renders a new DateCard for every date in the array
