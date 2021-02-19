import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { getCategories, getTimings } from "../axios"

const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`

const FormSectionHeading = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bold;
  margin-bottom: 5%;
`

const NameSearch = styled.input.attrs({
  placeholder: "Search by name",
})`
  border-radius: 25px;
  font-size: 0.8rem;
  width: 70%;
  text-align: center;
  margin-bottom: 3%;
  margin-top: 3%;
`

const HomePageLabel = styled.label`
  font-size: 0.8rem;
  width: 100%;
  text-align: center;
  margin-bottom: 3%;
  margin-top: 3%;
  font-weight: normal;
  page-break-inside: avoid;
`

const HomePageBox = styled.input.attrs({
  type: "checkbox",
})`
  margin-left: 3%;
  margin-right: 5%;
  border-radius: 50%;
`

const SearchButton = styled.button`
  color: #99d4c4;
  background-color: #344961;
  font-weight: bold;
  border-radius: 15px;
  width: 40%;
`

export default function SearchForm(props) {
  const [timings, addTimings] = useState()
  const [categories, addCategories] = useState()
  const [searchName, setName] = useState("")
  const [searchTimings, setTimings] = useState([])
  const [searchCategories, setCategories] = useState([])

  useEffect(() => {
    Promise.all([getTimings(), getCategories()]).then(responseArr => {
      addTimings(responseArr[0].data.timings)
      addCategories(responseArr[1].data.categories)
    })
  }, [])

  const renderSearchBoxes = stateFieldObj => {
    if (!props.isLoading && stateFieldObj.value) {
      return stateFieldObj.value.map((field, index) => {
        const nameColumn =
          stateFieldObj.name === "timings" ? "timing_name" : "category_name"
        const divStyles = {
          display: "inline-block",
          border: "1px dashed #474747",
          borderRadius: "15px",
          margin: "1%",
        }
        const preCheckBox = stateFieldObj.stateSearchFilter.includes(
          field[nameColumn]
        )
          ? "checked"
          : ""
        return (
          <div key={index} style={divStyles}>
            <HomePageLabel key={index} htmlFor={index}>
              {field[nameColumn]}
              <HomePageBox
                name={index}
                key={field[nameColumn]}
                defaultChecked={preCheckBox}
                onClick={() => {
                  updateSearchFilters(stateFieldObj.name, field[nameColumn])
                }}
              />
            </HomePageLabel>
          </div>
        )
      })
    }
  }

  const updateSearchName = e => {
    setName(e.target.value)
  }

  const updateSearchFilters = (type, key) => {
    console.log(`Adding ${key} to ${type} search array`)
    const stateField = type === "timings" ? searchTimings : searchCategories
    if (stateField.includes(key)) {
      if (type === "timings")
        setTimings(searchTimings.filter(column => column !== key))
      else setCategories(searchCategories.filter(column => column !== key))
    } else {
      if (type === "timings") setTimings(searchTimings.concat(key))
      else setCategories(searchCategories.concat(key))
    }
  }

  return (
    <MainForm>
      <FormSectionHeading>
        Filter by Name
        <NameSearch onChange={updateSearchName}></NameSearch>
      </FormSectionHeading>
      <FormSectionHeading>
        Filter by Timing
        <br />
        <div style={{ marginTop: 7 }}>
          {renderSearchBoxes({
            name: "timings",
            value: timings,
            stateSearchFilter: searchTimings,
          })}
        </div>
      </FormSectionHeading>
      <FormSectionHeading>
        Filter by Category
        <br />
        <div style={{ marginTop: 7 }}>
          {renderSearchBoxes({
            name: "categories",
            value: categories,
            stateSearchFilter: searchCategories,
          })}
        </div>
      </FormSectionHeading>
      <SearchButton
        onClick={e => {
          e.preventDefault()
          props.updateDates(searchName, searchTimings, searchCategories)
        }}
      >
        Search!
      </SearchButton>
    </MainForm>
  )
}
