import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Loading from "../components/loading"
import { getDates } from "../axios"
import "../components/index.css"

const HomePara = styled.p`
  text-align: center;
`

const HomeTitle = styled.h2`
  text-align: center;
`

const SearchForm = styled.form`
  display: flex;
  justify-content: space-evenly;
`

const NameSearch = styled.input.attrs({
  placeholder: "Search by name",
})`
  border-radius: 25px;
  font-size: 0.8rem;
  width: 50%;
  text-align: center;
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
    getDates().then(dates => {
      this.setState({ dates: dates.data.dates, isLoading: false }, () => {
        console.log(this.state.dates)
      })
    })
  }

  isLoading = () => {
    if (this.state.isLoading) return <Loading></Loading>
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
        {this.isLoading()}
        <SearchForm>
          <NameSearch></NameSearch>
          <label>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
          </label>
        </SearchForm>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      </Layout>
    )
  }
}

export default IndexPage
