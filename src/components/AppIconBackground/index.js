import React from 'react'
import styled from 'styled-components'

import Flex from 'components/Flex'

const AppIconBackground = styled(Flex)`
  justify-content: center;
  width: 170px;
  height: 170px;
  background: ${props => props.color};
  border-radius: 25px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  @media(min-width: 651px) {
    transition: background 0.3s;
    &:hover {
      background: ${props => props.hoverColor};
    }
  }
  @media(max-width: 650px) {
    width: 100px;
    height: 100px;
  }
`

export default function AppIcon({ color, hoverColor, onClick, children, ...props }) {
  return (
    <AppIconBackground
      color={color}
      hoverColor={hoverColor}
      onClick={onClick}
      {...props}
    >
      {children}
    </AppIconBackground>
  )
}

AppIcon.defaultProps = {
  onClick: () => {}
}
