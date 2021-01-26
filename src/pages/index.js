import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Loading from "../components/loading"
import { getCategories, getDates, getTimings } from "../axios"
import "../components/index.css"

const HomePara = styled.p`
  text-align: center;
`

const HomeTitle = styled.h2`
  text-align: center;
`

const SearchForm = styled.form`
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

class IndexPage extends Component {
  state = {
    dates: [],
    timings: [],
    categories: [],
    searchName: "",
    searchTimings: [],
    searchCategories: [],
    isLoading: true,
  }

  componentDidMount() {
    Promise.all([getDates(), getTimings(), getCategories()]).then(
      responseArr => {
        this.setState({
          dates: responseArr[0].data.dates,
          timings: responseArr[1].data.timings,
          categories: responseArr[2].data.categories,
          isLoading: false,
        })
      }
    )
  }

  isLoading = () => {
    if (this.state.isLoading) return <Loading></Loading>
  }

  renderSearchBoxes = fieldName => {
    if (!this.state.isLoading) {
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

  updateSearchFilters = (type, key) => {
    const stateField = `search${type.slice(0, 1).toUpperCase() + type.slice(1)}`
    if (this.state[stateField].includes(key)) {
      this.setState(
        prevState => {
          return {
            [stateField]: prevState[stateField].filter(
              column => column !== key
            ),
          }
        },
        () => {
          console.log(
            `Currently selected ${type} filters: ${this.state[stateField].join(
              ", "
            )}`
          )
        }
      )
    } else {
      this.setState(
        prevState => {
          return {
            [stateField]: prevState[stateField].concat(key),
          }
        },
        () => {
          console.log(
            `Currently selected ${type} filters: ${this.state[stateField].join(
              ", "
            )}`
          )
        }
      )
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <HomeTitle>Welcome!</HomeTitle>
        <HomePara>
          Have you been stuck in the house during lockdown with your loved one,
          friends or family? Have you been stuck for ideas on how to pass those
          long nights and weekend days together? If you need inspiration for how
          to creatively spend your time during lockdown, then look no further!
          Simply browse the selection below or use our search form to find your
          perfect date :)
        </HomePara>
        <SearchForm>
          <FormSectionHeading>
            Filter by Name
            <NameSearch></NameSearch>
          </FormSectionHeading>
          <FormSectionHeading>
            Filter by Timing
            <br />
            <div style={{ marginTop: 7 }}>
              {this.renderSearchBoxes("timings")}
            </div>
          </FormSectionHeading>
          <FormSectionHeading>
            Filter by Category
            <br />
            <div style={{ marginTop: 7 }}>
              {this.renderSearchBoxes("categories")}
            </div>
          </FormSectionHeading>
        </SearchForm>
        {this.isLoading()}
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      </Layout>
    )
  }
}

export default IndexPage
