import React, { Component } from "react"
import styled from "styled-components"

const Loader = styled.img.attrs({
  src:
    "https://www.bing.com/images/search?view=detailV2&ccid=6nCVjA0S&id=93AC386EE4034B08280807A53061E630217E7CF3&thid=OIP.6nCVjA0S936UiBlDUsov4QHaE9&mediaurl=https%3a%2f%2fwww.imagesource.com%2fwp-content%2fuploads%2f2019%2f06%2fRio.jpg&exph=1288&expw=1920&q=image&simid=608014760958888052&ck=4CA3F9FFD38C92BE49672A2DDC08D68C&selectedIndex=0&FORM=IRPRST&ajaxhist=0",
})`
  text-align: center;
`

export default class Loading extends Component {
  render() {
    return (
      <img src="https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg"></img>
    )
  }
}
