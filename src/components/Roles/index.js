import React from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'

const Row = styled(Flex)`
  justify-content: ${props => props.justifyContent};
`
const Badge = styled(Flex)`
  background: ${props => props.color};
  color: ${props => props.theme.offWhite};
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  letter-spacing: 1px;
  font-size: 14px;
  margin: 0 0.25rem;
  font-size: 12px;
  @media(max-width: 600px) {
    font-weight: 500;
    padding: 0.5rem 0.75rem;
  }
`

function getBadgeColor(role) {
  if (role === 'FRONTEND') {
    return '#3D969D'
  }
  if (role === 'BACKEND') {
    return '#595A8C'
  }
  if (role === 'DESIGN') {
    return '#F05300'
  }
  if (role === 'RESPONSIVE UI') {
    return '#4D2A4F'
  }
}

export default function Roles({ roles, justifyContent }) {
  return (
    <Row justifyContent={justifyContent}>
      {roles.map((role, index) => (
        <Badge key={`${role}----${index}`} color={getBadgeColor(role)}>{role}</Badge>
      ))}
    </Row>
  )
}

Roles.defaultProps = {
  justifyContent: 'center'
}
