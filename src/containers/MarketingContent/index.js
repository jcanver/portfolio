import React from 'react'
import styled from 'styled-components'
import kltSrc from 'assets/images/kltaggart-home-screenshot.png'
import templeSrc from 'assets/images/temple-bar-home-screenshot.png'
import grandSrc from 'assets/images/grand-home-screenshot.png'
import edenSrc from 'assets/images/eden-screenshot.png'
import Website from './components/Website'

const Wrapper = styled.div`
  position: relative;
  max-width: 1100px;
  width: 90vw;
  opacity: ${props => props.show ? '1' : '0'};
  transition: opacity 0.5s;
`
const Line = styled.div`
  height: 1px;
  width: 100%;
  background: ${props => props.theme.gray};
  margin: 4rem 0;
  @media(max-width: 650px) {
    margin: 2.5rem 0;
  }
`

export default function MarketingContent({ pageLoaded }) {
  return (
    <Wrapper show={pageLoaded}>
      <Website
        imageSrc={kltSrc}
        title="Video Producer Portfolio"
        url="http://kltaggart.com/"
        prettyLink="KLTaggart.com"
        roles={['FRONTEND', 'DESIGN', 'RESPONSIVE UI']}
        description="
          KLTaggart.com is the online portfolio for a professional video producer at Forbes.
          It showcases her photography with seamless image-preloading and
          optimal gallery experiences.
        "
        flip
      />

      <Line />

      <Website
        imageSrc={templeSrc}
        title="Temple Bar"
        url="http://www.johncanver.com/projects/temple-bar/"
        prettyLink="Proof of Concept"
        roles={['FRONTEND', 'DESIGN', 'RESPONSIVE UI']}
        description="
          This is a PoC design for a
          modern gastropub. A small business's web presence reflects its
          standards, let's make it the highest possible together.
        "
        flip
      />

      <Line />

      <Website
        imageSrc={grandSrc}
        title="Grand"
        url="https://grand.co/"
        prettyLink="Grand.co"
        roles={['FRONTEND', 'RESPONSIVE UI']}
        description="
          This marketing website advertises the Grand iOS & Android applications (see Apps page) which offer
          Grand's 'Save to Win' feature, by which participants can earn entries to weekly
          cash drawings by contributing to a personal savings account.
        "
        flip
      />

      <Line />

      <Website
        imageSrc={edenSrc}
        title="Copywriter Portfolio"
        url="http://www.maudeeden.com/"
        prettyLink="MaudeEden.com"
        roles={['FRONTEND', 'RESPONSIVE UI']}
        description="
          MaudeEden.com is the online portfolio for a professional copywriter. This project
          uses a base template by Squarespace, altered with custom CSS to the client's
          specifications.
        "
        flip
      />
    </Wrapper>
  )
}
