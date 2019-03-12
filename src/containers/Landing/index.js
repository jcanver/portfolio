import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import Flex from 'components/Flex'
// import Icon from 'components/Icon'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 15vh;
  top: ${props => props.show ? '0' : '50px'};
  opacity: ${props => props.show ? '1' : '0'};
  transition: top 0.5s, opacity 0.5s;
`
const Heading = styled(Flex)`
  font-size: 4rem;
  font-weight: 400;
  @media(max-width: 650px) {
    font-size: 2rem;
    font-weight: 500;
  }
`
const NavRow = styled(Flex)`
  position: relative;
  margin-top: 2.5rem;
  justify-content: center;
  height: 50px;
`
const HomeLink = styled.div`
  position: relative;
  margin: 0 1rem;
  margin: 0.25rem 2rem;
  font-weight: 700;
  cursor: pointer;
  transition: top 1s, opacity 1s;
  a {
    color: #333333;
    font-size: 1.25rem;
    font-weight: 500;
    text-decoration: none;
    @media(min-width: 650px) {
      &:hover {
        margin: 0 2rem;
        font-size: 1.75rem;
      }
      transition: margin 0.5s, font-size 0.5s;
    }
  }
  &:hover {
    >div {
      opacity: 1;
    }
  }
  >div {
    opacity: 0;
    pointer-events: none;
  }
`
const MobileTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  @media(min-width: 650px) {
    display: none;
  }
`

class Landing extends React.PureComponent {
  render() {
    const { pageLoaded, goTo } = this.props

    return (
      <Wrapper show={pageLoaded}>
        <MobileTitle>John Canver</MobileTitle>

        <Heading>
          Front-end Developer
        </Heading>

        <NavRow>
          {/* <HomeLink>
            <Link to="/about" onClick={e => goTo(e, '/about')}>
              About
            </Link>
          </HomeLink> */}
          <HomeLink>
            <Link to="/apps" onClick={e => goTo(e, '/apps')}>
              Apps
            </Link>
          </HomeLink>
          <HomeLink>
            <Link to="/marketing" onClick={e => goTo(e, '/marketing')}>
              Marketing
            </Link>
          </HomeLink>
        </NavRow>
      </Wrapper>
    )
  }
}

export default Landing
