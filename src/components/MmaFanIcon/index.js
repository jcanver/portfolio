import React from 'react'
import styled from 'styled-components'
import Icon from 'components/Icon'
import AppIconBackground from 'components/AppIconBackground'

const MmaIcon = styled(Icon)`
  width: 100px;
  height: 100px;
  @media(max-width: 650px) {
    width: 60px;
    height: 60px;
  }
`

export default function MmaFanIcon({ onClick, ...props }) {
  return (
    <AppIconBackground
      color="#E74536"
      hoverColor="#b8372b"
      onClick={onClick}
      {...props}
    >
      <MmaIcon
        name="punch"
        fill="offWhite"
      />
    </AppIconBackground>
  )
}
