import React, { Component } from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Loading from "../components/loading"
import SearchForm from "../components/searchform"
import { getCategories, getDates, getTimings } from "../axios"
import "../components/index.css"

const HomePara = styled.p`
  text-align: center;
`

const HomeTitle = styled.h2`
  text-align: center;
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
    searching: false,
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
        <SearchForm isLoading={this.state.isLoading}></SearchForm>
        {this.isLoading()}
        {/* <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br /> */}
      </Layout>
    )
  }
}

export default IndexPage

//refactor this code:
//scrap datelist component
//move search form into its own component and pass the update search fields method to the new component
//add date card component
//when hit search, run getDates method here and update dates property of state with new values
//create a render dates method that maps over the dates property of state and creates a new datecard for each
