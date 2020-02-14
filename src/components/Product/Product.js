import React from 'react'

export default class Product extends React.Component {

  render() {
    const {name, price, imgurl} = this.props
    
    return (
      <div>
        <div>Name: {name}</div>
        <div>Price: {price}</div>
        <div>URL: {imgurl}</div>
      </div>
    )
  }

}