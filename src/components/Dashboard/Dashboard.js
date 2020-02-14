import React from 'react'
import axios from 'axios'
import Product from '../Product/Product'
import './Dashboard.css'

export default class Dashboard extends React.Component {

  removeProduct = (id) => {
    axios.delete(`/api/product/${id}`).then(res => {
      this.props.getInventory()
    })
  }
  
  render() {
    let inventoryList = this.props.inventory.map((product, i) => {
      return <Product key={i}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      img={product.img}
                      removeProduct={this.removeProduct}
                      updateProduct={this.updateProduct} />
    })
    
    return (
      <div className='Dashboard'>
        {inventoryList}
      </div>
    )
  }

}