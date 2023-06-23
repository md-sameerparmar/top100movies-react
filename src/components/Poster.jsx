import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Poster extends Component {
  render() {
    return (
        <Link to={`/movie/${this.props.id}`} className='posters'>
            <img src={this.props.url} className='poster'/>
        </Link>
    )
  }
}
