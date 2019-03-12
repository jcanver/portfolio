import React from 'react'
import styled from 'styled-components'
import apps from 'containers/NativeApps/components/AppDetail/appsInfo'

import Flex from 'components/Flex'
import SeenjumpIcon from 'components/SeenjumpIcon'
import GrandIcon from 'components/GrandIcon'
import MmaFanIcon from 'components/MmaFanIcon'
import App from './components/App'

const Wrapper = styled(Flex)`
  position: fixed;
  width: 50%;
  justify-content: center;
  top: 50%;
  left: 50%;
  margin-left: -25%;
  margin-top: -120px;
  @media(max-width: 650px) {
    top: 0;
    left: 0;
    margin-top: 0;
    margin-left: 0;
    width: 100%;
    height: 100%;
  }
`
const TransitionOut = styled(Flex)`
  position: relative;
  opacity: ${props => props.hide ? '0' : '1'};
  pointer-events: ${props => props.hide ? 'none' : 'auto'};
  transition: opacity 0.5s;
  @media(max-width: 650px) {
    flex-direction: column;
  }
`

export default function AppChoices({ activeApp, selectApp}) {
  return (
    <Wrapper>
      <TransitionOut hide={activeApp}>
        <App
          appIcon={(
            <GrandIcon
              onClick={() => selectApp('grand')}
            />
          )}
          color="#2D9890"
          title="Grand"
          hide={activeApp}
          appStoreLink={apps.grand.appStoreLink}
          playStoreLink={apps.grand.playStoreLink}
          webLink={apps.grand.webLink}
        />

        <App
          appIcon={(
            <SeenjumpIcon
              onClick={() => selectApp('seenjump')}
            />
          )}
          color="#111111"
          title="Seenjump"
          hide={activeApp}
        />

        <App
          appIcon={(
            <MmaFanIcon
              onClick={() => selectApp('mmaFan')}
            />
          )}
          color="#E74536"
          title="MMA Fan"
          hide={activeApp}
          appStoreLink={apps.mmaFan.appStoreLink}
          playStoreLink={apps.mmaFan.playStoreLink}
        />
      </TransitionOut>
    </Wrapper>
  )
}
