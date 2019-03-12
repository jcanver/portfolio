import { navigate } from '@reach/router'

function handleNavigate (e, url) {
  e.preventDefault()
  Promise.resolve(this.setState({ pageLoaded: false })).then(() => {
    setTimeout(() => {
      navigate(url)
    }, 400)
  })
}

export default handleNavigate
