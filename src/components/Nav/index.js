import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import Flex from 'components/Flex'
import Icon from 'components/Icon'

const Wrapper = styled(Flex)`
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  width: calc(90vw - 13px);
  left: 5vw;
  height: 80px;
  z-index: 1000;
  opacity: ${props => props.show ? '1' : '0'};
  transition: opacity 0.5s;
  ${'' /* @media(max-width: 650px) {
    width: 90vw;
  } */}
`
const Content = styled(Flex)`
  flex: 1;
  max-width: 1300px;
  margin: 0 auto;
`
const MessageLink = styled.a`
  margin-right: 1rem;
`
const GithubLink = styled.a`
  margin-right: 1.5rem;
`
const Line = styled.div`
  height: 1px;
  flex: 1;
  background: ${props => props.theme.gray};
  transition: width 0.3s;
  @media(max-width: 650px) {
    display: none;
  }
`
const Col = styled(Flex)`
  flex: 1;
  @media(max-width: 650px) {
    display: ${props => !props.keepMobile ? 'none' : 'block'};
  }
`
const Title = styled.div`
  font-size: 2.5rem;
  margin: 0 3rem;
  text-align: center;
  font-weight: 400;
  cursor: ${props => props.hasAction ? 'pointer' : 'auto'};
  &:hover {
    color: ${props => props.hasAction ? '#000000' : '#333333'};
  }
  transition: color 0.3s;
  @media(max-width: 900px) {
    font-size: 1.5rem;
    margin: 0 1.5rem;
  }
  @media(max-width: 650px) {
    margin: 0 auto;
    display: ${props => props.hideMobile ? 'none' : 'block'};
  }
`
const LinkWrapper = styled.div`
  margin-left: 1.5rem;
  a {
    color: #333;
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
    &:hover {
      font-size: 1.75rem;
    }
    transition: font-size 0.3s;
  }
`
const MobileNav = styled(Flex)`
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  align-items: center;
  justify-content: center;
  opacity: ${props => props.showMobileNav ? 1 : 0};
  pointer-events: ${props => props.showMobileNav ? 'auto' : 'none'};
  transition: opacity 0.5s;
`
const MobileLinkWrapper = styled.div`
  margin: 1.5rem 0;
  a {
    color: ${props => props.theme.primary};
    font-size: 2rem;
    text-decoration: none;
  }
`

const CloseButton = styled(Icon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 24px;
  height: 24px;
  cursor: pointer;

`
const MobileIcon = styled(Icon)`
  margin: 2rem 1rem 1rem 1rem;
`
const OpenMobileNav = styled(Icon)`
  width: 28px;
  height: 28px;
  cursor: pointer;
  @media(min-width: 650px) {
    display: none;
  }
`
const MobileSpacer = styled.div`
  width: 28px;
  @media(min-width: 650px) {
    display: none;
  }
`

const iconSize = 24

export default class Nav extends React.PureComponent {
  state = {
    showMobileNav: false
  }

  openModal = () => this.setState({ showMobileNav: true })
  closeModal = () => this.setState({ showMobileNav: false })

  render() {
    const { titleClick, pageLoaded, title, goTo } = this.props
    const { showMobileNav } = this.state

    return (
      <Wrapper show={pageLoaded}>
        <Content>
          <MobileSpacer />
          <Col keepMobile={title === 'John Canver'}>
            <MessageLink href="mailto:jcanver@gmail.com" target="_blank" rel="noopener noreferrer">
              <Icon
                name="message"
                width={iconSize}
                height={iconSize}
              />
            </MessageLink>
            <MessageLink href="https://www.linkedin.com/in/john-canver-b85b8752/" target="_blank" rel="noopener noreferrer">
              <Icon
                name="linkedin"
                width={iconSize}
                height={iconSize}
              />
            </MessageLink>
            <GithubLink href="https://github.com/jcanver" target="_blank" rel="noopener noreferrer">
              <Icon
                name="github"
                width={iconSize}
                height={iconSize}
              />
            </GithubLink>
            <Line />
          </Col>

          <Title hasAction={titleClick} onClick={titleClick} hideMobile={title === 'John Canver'}>
            {title}
          </Title>

          <Col>
            <Line />
            {title !== 'John Canver' && (
              <LinkWrapper>
                <Link to="/" onClick={e => goTo(e, '/')}>
                  Home
                </Link>
              </LinkWrapper>
            )}
            {(title !== 'Marketing Websites' && title !== 'John Canver') && (
              <LinkWrapper>
                <Link to="/marketing" onClick={e => goTo(e, '/marketing')}>
                  Marketing
                </Link>
              </LinkWrapper>
            )}
            {(title !== 'Apps' && title !== 'John Canver') && (
              <LinkWrapper>
                <Link to="/apps" onClick={e => goTo(e, '/apps')}>
                  Apps
                </Link>
              </LinkWrapper>
            )}
          </Col>

          {title !== 'John Canver' && (
            <OpenMobileNav
              name="menu"
              onClick={this.openModal}
            />
          )}
        </Content>

        <MobileNav showMobileNav={showMobileNav}>
          {title !== 'John Canver' && (
            <MobileLinkWrapper>
              <Link to="/" onClick={e => goTo(e, '/')}>
                Home
              </Link>
            </MobileLinkWrapper>
          )}
          {(title !== 'Marketing Websites' && title !== 'John Canver') && (
            <MobileLinkWrapper>
              <Link to="/marketing" onClick={e => goTo(e, '/marketing')}>
                Marketing
              </Link>
            </MobileLinkWrapper>
          )}
          {(title !== 'Apps' && title !== 'John Canver') && (
            <MobileLinkWrapper>
              <Link to="/apps" onClick={e => goTo(e, '/apps')}>
                Apps
              </Link>
            </MobileLinkWrapper>
          )}
          <Flex>
            <a href="mailto:jcanver@gmail.com" target="_blank" rel="noopener noreferrer">
              <MobileIcon
                name="message"
                width="40px"
                height="40px"
              />
            </a>
            <a href="https://www.linkedin.com/in/john-canver-b85b8752/" target="_blank" rel="noopener noreferrer">
              <MobileIcon
                name="linkedin"
                width="40px"
                height="40px"
              />
            </a>
            <a href="https://github.com/jcanver" target="_blank" rel="noopener noreferrer">
              <MobileIcon
                name="github"
                width="40px"
                height="40px"
              />
            </a>
            <Line />
          </Flex>
          <CloseButton name="close" fill="primary" onClick={this.closeModal} />
        </MobileNav>
      </Wrapper>
    )
  }
}
