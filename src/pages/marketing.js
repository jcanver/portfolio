import React from 'react'
import styled from 'styled-components'
import { withSiteData } from 'react-static'
import handleNavigate from 'utils/navigation'
import timeout from 'utils/timeout'
import Nav from 'components/Nav'
import Flex from 'components/Flex'
import ActivityIndicator from 'components/ActivityIndicator'
import MarketingContent from 'containers/MarketingContent'
import kltSrc from 'assets/images/kltaggart-home-screenshot.png'
import templeSrc from 'assets/images/temple-bar-home-screenshot.png'
import grandSrc from 'assets/images/grand-home-screenshot.png'
import edenSrc from 'assets/images/eden-screenshot.png'

const photos = [kltSrc, templeSrc, grandSrc, edenSrc]
const Wrapper = styled(Flex)`
  position: relative;
  background: #EFEFEF;
  min-height: 100vh;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 140px 0 80px 0;
  @media(max-width: 650px) {
    padding: 80px 0;
  }
`

class Marketing extends React.PureComponent {
  state = {
    pageLoaded: undefined
  }
  handleNavigate = handleNavigate.bind(this)

  componentDidMount() {
    this.enter()
  }

  enter = async () => {
    await timeout(100)
    this.preload(photos)
  }

  preload = (imageArray, index) => {
    index = index || 0
    if (imageArray && imageArray.length > index) {
      const img = new Image()
      img.src = imageArray[index]
      img.onload = () => this.preload(imageArray, index + 1)
    } else {
      this.setState({ pageLoaded: true })
    }
  }

  render() {
    const { pageLoaded } = this.state

    return (
      <Wrapper>
        <Nav
          title="Marketing Websites"
          pageLoaded={pageLoaded}
          goTo={this.handleNavigate}
        />

        <ActivityIndicator show={typeof pageLoaded === 'undefined'} />

        <MarketingContent
          pageLoaded={pageLoaded}
        />
      </Wrapper>
    )
  }
}

export default withSiteData(Marketing)
