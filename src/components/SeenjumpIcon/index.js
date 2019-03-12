import React from 'react'
import styled from 'styled-components'
import seenjumpSrc from 'assets/images/seenjump-logo.svg'

import AppIconBackground from 'components/AppIconBackground'

const Logo = styled.img`
  width: 95px;
  height: 95px;
  @media(max-width: 650px) {
    width: 60px;
    height: 60px;
  }
`

export default function SeenjumpIcon({ onClick, ...props }) {
  return (
    <AppIconBackground
      color="#111111"
      hoverColor="#000000"
      onClick={onClick}
      {...props}
    >
      <Logo src={seenjumpSrc} />
    </AppIconBackground>
  )
}
