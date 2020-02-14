import React from 'react'
import './Product.css'

export default class Product extends React.Component {

  render() {
    const {id, name, price, img} = this.props
    
    return (
      <div className='Product'>
        <img src={img}></img>
        <div className='ProductInfo'>
          <div>Product: {name}</div>
          <div>Price: ${price}</div>
          <button onClick={() => this.props.removeProduct(id)} >Remove</button>
        </div>
      </div>
    )
  }

}