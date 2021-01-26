import React, { useState } from "react"

export default function DateList() {
  const [articles, updateArticles] = useState([])

  return <div>this is the date list</div>
}

//button from index.js is pressed
//info from searchName, searchTimings and searchCategories is passed to DateList via props
//DateList runs getArticles function from axios.js using filters passed from index.js as arguments
//When the response is received, DateList state is updated with the array of articles
//DateList runs a function that renders a new DateCard for every date in the array
