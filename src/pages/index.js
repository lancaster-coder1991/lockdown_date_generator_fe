import React, { Component } from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Loading from "../components/loading"
import SearchForm from "../components/searchform"
import SearchResult from "../components/searchResult"

import { getDates } from "../axios"
import "../components/index.css"

const HomePara = styled.p`
  text-align: center;
`

const HomeTitle = styled.h2`
  text-align: center;
`

const ResultsContainer = styled.main`
  display: flex;
  flex-direction: column;
`

class IndexPage extends Component {
  state = {
    dates: [],
    filteredDates: [],
    isLoading: true,
    hasSearched: false,
  }

  componentDidMount() {
    getDates("", [], []).then(({ data: { dates } }) => {
      this.setState(
        {
          dates,
          isLoading: false,
        },
        () => {
          console.log(
            "loaded dates and associated relations: ",
            this.state.dates
          )
        }
      )
    })
  }

  isLoading = () => {
    if (this.state.isLoading) return <Loading></Loading>
  }

  updateDates = (name, timings, categories) => {
    console.log(
      `Filtering dates based on name: ${name}, timings: ${timings}, categories: ${categories}`
    )
    this.setState({ isLoading: true }, () => {
      getDates(name, timings, categories).then(res => {
        this.setState(
          {
            filteredDates: res.data.dates,
            isLoading: false,
            hasSearched: true,
          },
          () => {
            console.log(this.state.filteredDates)
          }
        )
      })
    })
  }

  renderSearchResults = () => {
    const { hasSearched, dates, filteredDates } = this.state
    const dateNamesUsed = []
    const datesToRender = []
    if (!hasSearched) {
      dates.forEach(date => {
        if (!dateNamesUsed.includes(date.date_name)) {
          dateNamesUsed.push(date.date_name)
          datesToRender.push(date)
        }
      })
      return datesToRender.map((date, index) => {
        const allDatesForThisName = dates.filter(
          thisDate => thisDate.date_name === date.date_name
        )
        return (
          <SearchResult
            key={index}
            result={date}
            allDates={allDatesForThisName}
          ></SearchResult>
        )
      })
    } else {
      filteredDates.forEach(date => {
        if (!dateNamesUsed.includes(date.date_name)) {
          dateNamesUsed.push(date.date_name)
          datesToRender.push(date)
        }
      })
      const uniqueFilteredDateNames = filteredDates.filter(
        (val, ind, arr) => arr.indexOf(val) === ind
      )
      return uniqueFilteredDateNames.map((date, index) => {
        const allDatesForThisName = dates.filter(
          thisDate => thisDate.date_name === date.date_name
        )
        return (
          <SearchResult
            key={index}
            result={date}
            allDates={allDatesForThisName}
          ></SearchResult>
        )
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
        <SearchForm
          isLoading={this.state.isLoading}
          updateDates={this.updateDates}
        ></SearchForm>
        {this.isLoading()}
        <ResultsContainer>{this.renderSearchResults()}</ResultsContainer>
        {/* <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br /> */}
      </Layout>
    )
  }
}

export default IndexPage

//test passing update dates method to search form and updating state in index.js with new dates
//add date card component
//when hit search, run getDates method here and update dates property of state with new values
//create a render dates method that maps over the dates property of state and creates a new datecard for each
