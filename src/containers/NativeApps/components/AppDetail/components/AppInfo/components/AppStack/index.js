import React from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'

const Row = styled(Flex)`
  margin: 3rem 0;
  justify-content: center;
  flex-wrap: wrap;
  @media(max-width: 650px) {
    flex-direction: column;
    margin: 2rem 0;
  }
`
const Item = styled.div`
  color: #AAAAAA;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  @media(max-width: 650px) {
    margin: 0.15rem 0;
  }
`
const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #AAAAAA;
  margin: 0 0.65rem;
  @media(max-width: 650px) {
    display: none;
  }
`

export default function AppStack({ stack }) {
  return (
    <Row>
      {stack.map((item, index) => (
        <Flex key={`${item}+++++${index}`}>
          <Item>{item}</Item>
          {(index !== stack.length - 1) && (
            <Dot />
          )}
        </Flex>
      ))}
    </Row>
  )
}
