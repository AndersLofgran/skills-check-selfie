import React from 'react'
import './Header.css'

export default class Header extends React.Component {

  render() {
    return (
      <div className='Header'>
        <img className="HeaderImage" src='https://cdn.iconscout.com/icon/free/png-256/chevron-20-433508.png' />
        <h2>SHELFIE</h2>
      </div>
    )
  }

}