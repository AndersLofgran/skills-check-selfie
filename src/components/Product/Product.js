import React from 'react'

export default class Product extends React.Component {

  render() {
    const {name, price, img} = this.props
    
    return (
      <div>
        <div>Product: {name}</div>
        <div>Price: ${price}</div>
        <div>URL: {img}</div>
      </div>
    )
  }

}