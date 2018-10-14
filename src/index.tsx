import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Home, { PageTitle } from './pages/home'

const page_detail: PageTitle = {
  title: 'Homee pageeeee',
  description: 'issd the homepage'
}

ReactDOM.render(<Home {...page_detail} />, document.getElementById('root'))
