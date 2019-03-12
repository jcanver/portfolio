import React from 'react'
import styled from 'styled-components'

import Flex from 'components/Flex'
import Icon from 'components/Icon'

const Wrapper = styled(Flex)`
  margin: 1rem 1.5rem;
  justify-content: flex-start;
  width: 100%;
  @media(min-width: 650px) {
    flex-direction: column;
    margin: 0 1.5rem;
  }
`
const Title = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
  color: ${props => props.color};
  margin: 1rem 0;
  transition: font-size 0.5s;
  @media(max-width: 650px) {
    margin: 0 0 0.5rem 0;
  }
`
const PlatformRow = styled(Flex)`
  position: relative;
  justify-content: center;
  transform: ${props => props.shrink ? 'scale(0)' : 'scale(1)'};
  transition: transform 0.5s;
  @media(max-width: 650px) {
    justify-content: flex-start;
  }
`
const PlatformIcon = styled(Icon)`
  width: 28px;
  height: 28px;
  @media(max-width: 650px) {
    width: 24px;
    height: 24px;
  }
`
const StoreLink = styled.a`
  margin: 0 0.25rem;
  @media(max-width: 650px) {
    margin: 0 0.5rem 0 0;
  }
`
const ComingSoon = styled(Flex)`
  position: absolute;
  bottom: -20px;
  left: 50%;
  width: 150px;
  margin-left: -75px;
  font-style: italic;
  font-weight: 500;
  justify-content: center;
  font-size: 14px;
  margin-top: 0.5rem;
  color: ${props => props.theme.mediumGray};
  @media(max-width: 650px) {
    width: auto;
    margin-left: 0;
    left: 0;
  }
`
const MobileMargin = styled.div`
  @media(max-width: 650px) {
    margin-left: 1rem;
  }
`

export default function App({ appIcon, color, title, appStoreLink, playStoreLink, webLink }) {
  return (
    <Wrapper>
      {appIcon}

      <MobileMargin>
        <Title color={color}>{title}</Title>

        <PlatformRow>
          <StoreLink href={appStoreLink} target="_blank">
            <PlatformIcon
              name="ios"
              fill={(appStoreLink && playStoreLink) ? 'primary' : 'mediumGray'}
            />
          </StoreLink>
          <StoreLink href={playStoreLink} target="_blank">
            <PlatformIcon
              name="android"
              fill={(appStoreLink && playStoreLink) ? 'primary' : 'mediumGray'}
            />
          </StoreLink>
          {webLink && (
            <StoreLink href={webLink} target="_blank">
              <PlatformIcon
                name="web"
                fill="primary"
              />
            </StoreLink>
          )}
          {!appStoreLink && !playStoreLink &&
            <ComingSoon>Coming Soon</ComingSoon>
          }
        </PlatformRow>
      </MobileMargin>
    </Wrapper>
  )
}
