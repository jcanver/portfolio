import React from 'react'
import styled from 'styled-components'
import theme from 'theme'
import BeatLoader from 'react-spinners/BeatLoader'
import Flex from 'components/Flex'

const Wrapper = styled(Flex)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s;
`

export default function ActivityIndicator ({ color, size, show, ...props }) {
  return (
    <Wrapper show={show}>
      <BeatLoader
        color={color}
        size={size}
        {...props}
      />
    </Wrapper>
  )
}

ActivityIndicator.defaultProps = {
  color: theme.primary,
  size: 15
}
