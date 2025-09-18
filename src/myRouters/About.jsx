import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h2>about</h2>
      <br />
      <p>useParams practice</p>
      <Link to="/Employee/safi/16">safi</Link>
      <Link to="/Employee/armash/17">armash</Link>
    </div>
  )
}

export default About
