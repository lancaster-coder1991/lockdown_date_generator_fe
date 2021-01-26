import React, { useState, useEffect } from "react"
import { getDates } from "../axios"

export default function DateList(props) {
  const [dates, updateDates] = useState([])

  useEffect(() => {
    loadDates()
    console.log(`Dates loaded on first load of DateList:`, dates)
  }, [])

  const loadDates = async () => {
    await getDates().then(response => updateDates(response.data.dates))
  }

  console.log(props)

  return <div>this is the date list</div>
}
