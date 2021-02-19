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

export default function SearchResult(props) {
  const { result, allDates } = props
  return (
    <SearchCard>
      <SearchCardName>{result.date_name}</SearchCardName>
    </SearchCard>
  )
}
