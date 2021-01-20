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

const NameSearch = styled.input.attrs({
  placeholder: "Search by name",
})`
  border-radius: 25px;
  font-size: 0.8rem;
  width: 70%;
  text-align: center;
  margin-bottom: 3%;
`

const HomePageLabel = styled.label`
  font-size: 0.8rem;
  width: 100%;
  text-align: center;
  margin-bottom: 3%;
`

const HomePageBox = styled.input.attrs({
  type: "checkbox",
})`
  margin-left: 3%;
  margin-right: 3%;
  border-radius: 50%;
`

class IndexPage extends Component {
  state = {
    dates: [],
    searchName: "",
    searchTimings: [],
    searchCategories: [],
    isLoading: true,
  }

  componentDidMount() {
    getDates()
      .then(dates => {
        this.setState({ dates: dates.data.dates }, () => {
          console.log(this.state.dates)
        })
      })
      .then(() => {
        return getTimings()
      })
      .then(timings => {
        this.setState({ timings: timings.data.timings })
      })
      .then(() => {
        return getCategories()
      })
      .then(categories => {
        this.setState({
          categories: categories.data.categories,
          isLoading: false,
        })
      })
  }

  isLoading = () => {
    if (this.state.isLoading) return <Loading></Loading>
  }

  renderSearchBoxes = fieldName => {
    if (!this.state.isLoading) {
      return this.state[fieldName].map(field => {
        const nameColumn = `${fieldName.slice(0, fieldName.length - 1)}_name`
        console.log(nameColumn)
        return <HomePageBox key={field[nameColumn]} />
      })
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
          <NameSearch></NameSearch>
          <HomePageLabel>
            Filter by time of day:
            {this.renderSearchBoxes("timings")}
          </HomePageLabel>
          <HomePageLabel>
            Filter by category:
            {this.renderSearchBoxes("categories")}
          </HomePageLabel>
        </SearchForm>
        {this.isLoading()}
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      </Layout>
    )
  }
}

export default IndexPage
