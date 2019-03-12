import React from 'react'
import styled from 'styled-components'

import Flex from 'components/Flex'
import IconHeading from './components/IconHeading'
import Screenshots from './components/Screenshots'
import AppInfo from './components/AppInfo'

import apps from './appsInfo'

const Wrapper = styled(Flex)`
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding-top: 50px;
  width: 100%;
  opacity: ${props => props.show ? '1' : '0'};
  top: ${props => props.show ? '0' : '60px'};
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  transition: opacity 0.5s, top 0.5s;
`

export default function AppDetail({ show, activeApp }) {
  return activeApp ? (
    <Wrapper show={show}>
      <IconHeading
        icon={apps[activeApp].icon}
        title={apps[activeApp].title}
        color={apps[activeApp].color}
      />

      <Screenshots
        images={apps[activeApp].screenshots}
      />

      <AppInfo
        appStoreLink={apps[activeApp].appStoreLink}
        playStoreLink={apps[activeApp].playStoreLink}
        webLink={apps[activeApp].webLink}
        stack={apps[activeApp].stack}
        description={apps[activeApp].description}
        roles={apps[activeApp].roles}
      />
    </Wrapper>
  ) : null
}
