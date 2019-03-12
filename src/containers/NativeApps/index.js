import React from 'react'
import styled from 'styled-components'

import AppChoices from './components/AppChoices'
import AppDetail from './components/AppDetail'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 5vh;
  width: 100%;
  top: ${props => props.enter ? '0' : '50px'};
  opacity: ${props => props.enter ? '1' : '0'};
  transition: top 0.5s, opacity 0.5s;
`

class NativeApps extends React.PureComponent {
  render() {
    const { pageLoaded, activeApp, showAppDetail, selectApp } = this.props

    return (
      <Wrapper enter={pageLoaded}>
        <AppChoices
          activeApp={pageLoaded && activeApp}
          selectApp={selectApp}
        />

        <AppDetail
          show={showAppDetail}
          activeApp={activeApp}
        />
      </Wrapper>
    )
  }
}

export default NativeApps
