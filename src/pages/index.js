import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Loading from "../components/loading"
import { getDates } from "../axios"

const homeParaStyles = {
  textAlign: `center`,
}

const HomeTitle = styled.h2`
  text-align: center;
`

class IndexPage extends Component {
  state = {
    dates: [],
    isLoading: true,
  }

  componentDidMount() {
    getDates().then(dates => {
      this.setState({ dates: dates.data.dates, isLoading: true }, () => {
        console.log(this.state.dates)
      })
    })
  }

  isLoading = () => {
    const { isLoading } = this.state
    if (isLoading) {
      return <Loading></Loading>
    }
  }

  render() {
    return (
      <Layout>
        {this.isLoading()}
        <SEO title="Home" />
        <HomeTitle>Welcome!</HomeTitle>
        <p style={homeParaStyles}>
          Have you been stuck in the house during lockdown with your loved one,
          friends or family? Have you been stuck for ideas on how to pass those
          long nights and weekend days together? If you need inspiration for how
          to creatively spend your time during lockdown, then look no further!
          Simply browse the selection below or use our search form to find your
          perfect date :)
        </p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      </Layout>
    )
  }
}

export default IndexPage
