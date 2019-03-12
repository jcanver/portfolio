import React from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'
import Roles from 'components/Roles'

const Row = styled(Flex)`
  @media(max-width: 1200px) {
    flex-direction: column;
  }
`
const Col1 = styled.div`
  width: 55%;
  text-align: ${props => props.flip ? 'right' : 'left'};
  order: ${props => props.order};
  @media(max-width: 1200px) {
    width: 100%;
  }
`
const Col2 = styled.div`
  width: 45%;
  text-align: ${props => props.flip ? 'right' : 'left'};
  order: ${props => props.order};
  @media(max-width: 1200px) {
    width: 100%;
    padding-top: 1.5rem;
  }
`
const Heading = styled.a`
  font-size: 2.5rem;
  font-weight: 400;
  color: #333333;
  margin: 0 auto;
  text-decoration: none;
`
const LinkWrapper = styled.div`
  margin: 0.5rem 0;
`
const Link = styled.a`
  font-weight: 400;
  font-size: 1.25rem;
  color: #333333;
  text-decoration: none;
`
const Desc = styled.p`
  width: 90%;
  max-width: 500px;
  margin: 1rem ${props => props.flip ? '0' : 'auto'} 1rem ${props => props.flip ? 'auto' : '0'};
  line-height: 1.2;
`
const AccountForMargin = styled.div`
  margin: 0 -0.25rem;
`

export default function Website({ imageSrc, title, roles, url, prettyLink, description, flip }) {
  return (
    <Row>
      <Col1 flip={flip} order={flip ? 1 : 2}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt="Screenshot" />
        </a>
      </Col1>
      <Col2 flip={flip} order={flip ? 2 : 1}>
        <Heading href={url} target="_blank">{title}</Heading>
        <LinkWrapper>
          <Link href={url} target="_blank">{prettyLink}</Link>
        </LinkWrapper>
        <Desc flip={flip}>
          {description}
        </Desc>

        <AccountForMargin>
          <Roles roles={roles} justifyContent={flip ? 'flex-end' : 'flex-start'} />
        </AccountForMargin>
      </Col2>
    </Row>
  )
}
