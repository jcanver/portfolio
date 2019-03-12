import React from 'react'

export default {
  plugins: ["react-static-plugin-styled-components"],
  getSiteData: () => ({
    title: 'Front-End Developer | John Canver',
  }),
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="en-US">
      <Head>
        <title>Front-End Developer | John Canver</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="John Canver's Portfolio" />
        <meta property="og:description" content="Visit my portfolio to view examples of my work." />
        <meta property="og:url" content="http://www.johncanver.com" />
        <meta property="og:image" content="http://www.johncanver.com/jcc-home.png" />
        <meta property="og:media" content="http://www.johncanver.com/jcc-home.png" />
        <link rel="shortcut icon" type="image/png" href="http://www.johncanver.com/jcc-favicon.png" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-55350508-3" />
        <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-55350508-3');
        `}}
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
}
