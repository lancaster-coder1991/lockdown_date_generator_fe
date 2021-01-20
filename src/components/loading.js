import React, { Component } from "react"
import styled from "styled-components"
import Spinner from "../images/spinner.gif"

const Loader = styled.img.attrs({
  src: `${Spinner}`,
})`
  text-align: center;
`

export default class Loading extends Component {
  render() {
    return <Loader></Loader>
  }
}
