import React from 'react'
import styled from 'styled-components'

const Heading = styled.h2`
  margin: 0 auto;
  font-size: 4rem;
  font-weight: bold;
  color: ${props => props.color};
  @media(max-width: 650px) {
    font-size: 3rem;
  }
`

export default function IconHeading({ icon, title, color }) {
  return (
    <div>
      {icon}
      <Heading color={color}>{title}</Heading>
    </div>
  )
}
