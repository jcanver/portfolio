import React from 'react'
import GrandIcon from 'components/GrandIcon'
import SeenjumpIcon from 'components/SeenjumpIcon'
import MmaFanIcon from 'components/MmaFanIcon'

import seenjumpScreenshot from 'assets/images/seenjump-screenshot.png'
import seenjumpScreenshot1 from 'assets/images/seenjump-screenshot1.jpg'
// import seenjumpScreenshot2 from 'assets/images/seenjump-screenshot2.jpg'
import seenjumpScreenshot3 from 'assets/images/seenjump-screenshot3.jpg'
import seenjumpScreenshot4 from 'assets/images/seenjump-screenshot4.jpg'
// import seenjumpScreenshot5 from 'assets/images/seenjump-screenshot5.jpg'
import seenjumpScreenshot6 from 'assets/images/seenjump-screenshot6.jpg'

import mmaFanScreenshot1 from 'assets/images/mmaFan-screenshot1.jpg'
import mmaFanScreenshot2 from 'assets/images/mmaFan-screenshot2.jpg'
import mmaFanScreenshot3 from 'assets/images/mmaFan-screenshot3.jpg'
import mmaFanScreenshot4 from 'assets/images/mmaFan-screenshot4.jpg'

import grandScreenshot1 from 'assets/images/grand-screen1.jpg'
import grandScreenshot2 from 'assets/images/grand-screen2.jpg'
// import grandScreenshot3 from 'assets/images/grand-didyouwin1.png'
// import grandScreenshot4 from 'assets/images/grand-didyouwin2.png'
// import grandScreenshot5 from 'assets/images/grand-entries.png'
// import grandScreenshot6 from 'assets/images/grand-deposit.png'
import grandScreenshot7 from 'assets/images/grand-savings-initiated.png'
// import grandScreenshot8 from 'assets/images/grand-trophy.png'
import grandScreenshot9 from 'assets/images/grand-thumbs.png'
// import grandScreenshot6 from 'assets/images/grand-screen6.jpg'

const iconStyle = {
  transform: 'scale(0.5)',
  margin: '0 auto'
}

export default {
  grand: {
    title: 'Grand',
    description: (
      <div>
        I was a part of Grand's frontend development team which built the Grand app on multiple platforms (iOS, Android, Web). Grand is
        a startup on a mission to make saving money fun by giving users the opportunity to win
        life-changing amounts of money every week. This prize-linked savings approach incentivizes
        saving and investing.
      </div>
    ),
    stack: [
      'React Native',
      'Expo',
      'Redux',
      'Redux Saga',
      'Reselect',
      'Segment',
      'Branch',
      'Sentry'
    ],
    screenshots: [grandScreenshot1, grandScreenshot9, grandScreenshot2, grandScreenshot7],
    icon: <GrandIcon style={iconStyle} />,
    roles: ['FRONTEND'],
    color: '#2D9890',
    appStoreLink: 'https://grand.app.link/home',
    playStoreLink: 'https://grand.app.link/home',
    webLink: 'https://app.grand.co'
  },
  seenjump: {
    title: 'Seenjump',
    description: (
      <div>
        Seenjump is a social media application which connects people with what others are streaming at home for entertainment.
        App users can log in with their Facebook accounts to add media items to a personal watchlist, create curated
        collections of items and follow other users to subscribe to their lists & collections.
        <br /><br />
        Seenjump's backend REST API was built in Python with Flask. It is hosted by Heroku and interacts with a Heroku PostgreSQL
        database. Seenjump also leverages the <a href="http://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">OMDb API</a>
        &nbsp;for media item information & search.

        Seenjump is currently under development and coming soon to iOS & Android.
      </div>
    ),
    stack: [
      'React Native',
      'Expo',
      'Redux',
      'Redux Saga',
      'Reselect',
      'Python',
      'Flask',
      'PostgreSQL'
    ],
    screenshots: [seenjumpScreenshot1, seenjumpScreenshot6, seenjumpScreenshot4, seenjumpScreenshot3, seenjumpScreenshot],
    icon: <SeenjumpIcon style={iconStyle} />,
    roles: ['FRONTEND', 'BACKEND', 'DESIGN'],
    color: '#111111'
  },
  mmaFan: {
    title: 'MMA Fan',
    description: (
      <div>
        MMA Fan is a simple app which helps users follow UFC news, rankings, and upcoming events by displaying data provided
        by the public <a href="http://ufc-data-api.ufc.com/" target="_blank" rel="noopener noreferrer">UFC Data API</a>.
        <br /><br />
        This project was an opportunity for me to practice app development when I was newer to it.
        Initially there was no plan to release the app until I realized there were few alternative apps offering
        similar features to fans of Mixed Martial Arts.
        <br /><br />
        In the future, I plan to add features to MMA Fan, including the ability to search for and follow specific fighters,
        as well as to view a fighter's complete fight history. If you're a fellow MMA fan and have feature ideas
        you'd like included, feel free to get in touch!
      </div>
    ),
    stack: [
      'React Native',
      'Expo',
      'Redux',
      'Redux Saga',
      'Reselect'
    ],
    screenshots: [mmaFanScreenshot4, mmaFanScreenshot2, mmaFanScreenshot1, mmaFanScreenshot3],
    icon: <MmaFanIcon style={iconStyle} />,
    roles: ['FRONTEND', 'DESIGN'],
    color: '#E74536',
    appStoreLink: 'https://itunes.apple.com/us/app/mma-fan/id1440672126#?platform=iphone',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.jcanver.mmafan'
  }
}
