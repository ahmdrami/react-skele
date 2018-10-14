import * as React from 'react'
import { hot } from 'react-hot-loader'
import About from './About'

export interface PageTitle {
  title: string
  description: string
}

const Home = ({ title, description }: PageTitle) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    <span>this ssis sssda tessssts</span>

    <About/>
  </div>
)
export default hot(module)(Home)
