import React from "react"
import styled from "styled-components"

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

const SearchButton = styled.button.attrs({
  type: "submit",
})`
  color: #99d4c4;
  background-color: #344961;
  font-weight: bold;
  border-radius: 15px;
  width: 40%;
`

// const SearchForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   align-items: center;
//   width: 100%;
// `

export default function SearchForm(props) {
  const renderSearchBoxes = fieldName => {
    if (!props.isLoading) {
      return this.state[fieldName].map((field, index) => {
        const nameColumn =
          fieldName === "timings" ? "timing_name" : "category_name"
        const divStyles = {
          display: "inline-block",
          border: "1px dashed #474747",
          borderRadius: "15px",
          margin: "1%",
        }
        return (
          <div key={index} style={divStyles}>
            <HomePageLabel key={index} htmlFor={index}>
              {field[nameColumn]}
              <HomePageBox
                name={index}
                key={field[nameColumn]}
                onClick={() => {
                  this.updateSearchFilters(fieldName, field[nameColumn])
                }}
              />
            </HomePageLabel>
          </div>
        )
      })
    }
  }

  const updateSearchName = e => {
    this.setState({ searchName: e.target.value }, () => {
      console.log(`Current searchName value: ${this.state.searchName}`)
    })
  }

  return (
    <div>
      <FormSectionHeading>
        Filter by Name
        <NameSearch onChange={updateSearchName}></NameSearch>
      </FormSectionHeading>
      <FormSectionHeading>
        Filter by Timing
        <br />
        <div style={{ marginTop: 7 }}>{renderSearchBoxes("timings")}</div>
      </FormSectionHeading>
      <FormSectionHeading>
        Filter by Category
        <br />
        <div style={{ marginTop: 7 }}>
          {this.renderSearchBoxes("categories")}
        </div>
      </FormSectionHeading>
      <SearchButton
        onClick={e => {
          e.preventDefault()
          this.setState({ searching: true }, () => {
            this.setState({ searching: false })
          })
        }}
      >
        Search!
      </SearchButton>
    </div>
  )
}
