import React from 'react'
import styled from 'styled-components'
import { withSiteData } from 'react-static'
import handleNavigate from 'utils/navigation'
import timeout from 'utils/timeout'
import Nav from 'components/Nav'
import Flex from 'components/Flex'

const Wrapper = styled(Flex)`
  position: relative;
  background: #EFEFEF;
  min-height: 100vh;
  justify-content: center;
  text-align: center;
  width: 100%;
`

class Main extends React.PureComponent {
  state = {
    pageLoaded: false
  }
  handleNavigate = handleNavigate.bind(this)

  componentDidMount() {
    this.enter()
  }

  enter = async () => {
    await timeout(50)
    this.setState({ pageLoaded: true })
  }

  render() {
    const { pageLoaded } = this.state

    return (
      <Wrapper>
        <Nav
          title="About"
          pageLoaded={pageLoaded}
        />

        About
      </Wrapper>
    )
  }
}

export default withSiteData(Main)
