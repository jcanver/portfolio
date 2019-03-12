import React from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'

const Wrapper = styled(Flex)`
  background: #333333;
  padding: 1.5rem 0;
  margin: 2.5rem 0;
  width: 100%;
  justify-content: center;
  @media(max-width: 650px) {
    margin: 1.5rem 0;
    max-width: 100vw;
    overflow-x: auto;
    justify-content: flex-start;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`
const Image = styled.img`
  width: 200px;
  display: inline-block;
  margin: 0 0.5rem;
  @media(max-width: 650px) {
    min-width: 200px;
    margin: 0 0.75rem;
    &:first-child {
      margin: 0 0.75rem 0 0;
    }
    &:last-child {
      margin: 0 1.5rem 0 0.75rem;
    }
  }
`
const Mobile = styled.div`
  width: 1.5rem;
  height: 100px;
`

export default function Screenshots({ images }) {
  return (
    <Wrapper>
      {images.map(image => (
        <Image key={image} src={image} />
      ))}
      <Mobile />
    </Wrapper>
  )
}
