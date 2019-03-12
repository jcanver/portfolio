import React from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'
import Icon from 'components/Icon'
import Roles from 'components/Roles'
import Stack from './components/AppStack'

const StoreLink = styled.a`
  margin: 0 0.75rem;
`
const StoreRow = styled(Flex)`
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`
const InfoSection = styled.div`
  max-width: 700px;
  text-align: center;
  margin: 0 auto;
`
const Desc = styled.div`
  line-height: 1.5;
  margin: 2rem 0 3rem 0;
  padding: 0 1rem;
  @media(max-width: 650px) {
    margin: 2rem 0;
  }
`
const ComingSoon = styled(Flex)`
  font-style: italic;
  font-weight: 500;
  font-size: 1.25rem;
  color: ${props => props.theme.mediumGray};
`

export default function AppInfo({ appStoreLink, playStoreLink, webLink, stack, description, roles }) {
  const isReleased = appStoreLink && playStoreLink
  return (
    <div>
      <InfoSection>
        <StoreRow>
          {!isReleased &&
            <ComingSoon>Coming soon to</ComingSoon>
          }
          <StoreLink href={appStoreLink} target="_blank" rel="noopener noreferrer">
            <Icon name="appStore" fill={isReleased ? 'primary' : 'mediumGray'} />
          </StoreLink>
          <StoreLink href={playStoreLink} target="_blank" rel="noopener noreferrer">
            <Icon name="googlePlay" fill={isReleased ? 'primary' : 'mediumGray'} />
          </StoreLink>
          {webLink && (
            <StoreLink href={webLink} target="_blank" rel="noopener noreferrer">
              <Icon name="web" fill={isReleased ? 'primary' : 'mediumGray'} />
            </StoreLink>
          )}
        </StoreRow>

        <Desc>
          {description}
        </Desc>
      </InfoSection>

      <Roles roles={roles} />
      <Stack stack={stack} />
    </div>
  )
}
