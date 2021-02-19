import React from "react"
import styled from "styled-components"

const SearchCard = styled.div`
  border: 1px solid #474747;
  margin: 2%;
  display: grid;
`

const SearchCardName = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bold;
  margin-bottom: 5%;
`

const SearchCardTag = styled.span`
  text-align: left;
`

export default function SearchResult(props) {
  const { result, allDates } = props
  const allTimings = [...new Set(allDates.map(date => date.timing_name))].join(
    ", "
  )
  const allCategories = [
    ...new Set(allDates.map(date => date.category_name)),
  ].join(", ")

  return (
    <SearchCard>
      <SearchCardName>{result.date_name}</SearchCardName>
      {/* <span>Timings: {renderTags(allTimings)}</span>

      <span>Categories: {renderTags(allCategories)} </span> */}
      <span>
        <b>Suggested Timings:</b> {allTimings}
      </span>
      <span>
        <b>Categories:</b> {allCategories}
      </span>
    </SearchCard>
  )
}
