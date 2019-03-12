import React from 'react'
import styled from 'styled-components'
import { withSiteData } from 'react-static'
import handleNavigate from 'utils/navigation'
import timeout from 'utils/timeout'
import appsInfo from 'containers/NativeApps/components/AppDetail/appsInfo'


import Nav from 'components/Nav'
import Flex from 'components/Flex'
import ActivityIndicator from 'components/ActivityIndicator'
import NativeApps from 'containers/NativeApps'

const preloadImages = appsInfo.seenjump.screenshots.concat(appsInfo.grand.screenshots).concat(appsInfo.mmaFan.screenshots)
const Wrapper = styled(Flex)`
  position: relative;
  background: #EFEFEF;
  min-height: 100vh;
  justify-content: center;
  text-align: center;
  width: 100%;
`

class Projects extends React.PureComponent {
  state = {
    pageLoaded: undefined,
    activeApp: null,
    showAppDetail: null
  }
  handleNavigate = handleNavigate.bind(this)

  componentDidMount() {
    this.enter()
  }

  enter = async () => {
    this.preload(preloadImages)
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

  selectApp = async app => {
    this.setState({ activeApp: app })
    await timeout(300)
    this.setState({ showAppDetail: true })
  }

  clearApp = async () => {
    this.setState({ showAppDetail: false });
    await timeout(400)
    this.setState({ activeApp: null });
  }

  render() {
    const { pageLoaded, activeApp, showAppDetail } = this.state

    return (
      <Wrapper>
        <Nav
          title="Apps"
          pageLoaded={pageLoaded}
          goTo={this.handleNavigate}
          titleClick={activeApp ? this.clearApp : null}
        />

        <ActivityIndicator show={typeof pageLoaded === 'undefined'} />

        <NativeApps
          pageLoaded={pageLoaded}
          activeApp={activeApp}
          showAppDetail={showAppDetail}
          selectApp={this.selectApp}
        />
      </Wrapper>
    )
  }
}

export default withSiteData(Projects)
