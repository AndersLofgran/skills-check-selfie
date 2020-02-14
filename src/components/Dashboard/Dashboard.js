import React from 'react'
import Product from '../Product/Product'

export default class Dashboard extends React.Component {

  render() {
    let inventoryList = this.props.inventory.map((product, i) => {
      return <Product key={i}
                      name={product.name}
                      price={product.price}
                      img={product.img} />
    })
    
    return (
      <div>
        {inventoryList}
      </div>
    )
  }

}