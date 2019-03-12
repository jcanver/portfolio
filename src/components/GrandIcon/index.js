import React from 'react'
import styled from 'styled-components'
import grandSrc from 'assets/images/grand-logo.svg'

import AppIconBackground from 'components/AppIconBackground'

const Logo = styled.img`
  width: 95px;
  height: 95px;
  @media(max-width: 650px) {
    width: 60px;
    height: 60px;
  }
`

export default function GrandIcon({ onClick, ...props }) {
  return (
    <AppIconBackground
      color="#2D9890"
      hoverColor="#247973"
      onClick={onClick}
      {...props}
    >
      <Logo src={grandSrc} />
    </AppIconBackground>
  )
}
