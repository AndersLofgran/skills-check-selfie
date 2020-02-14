import React from 'react'
import axios from 'axios'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: 0,
      img: ''
    }

    this.handleNameInput = this.handleNameInput.bind(this)
  }

  handleNameInput(ev) {
    this.setState({name: ev.target.value})
  }
  handlePriceInput = (ev) => {
    this.setState({price: ev.target.value})
  }
  handleImgInput = (ev) => {
    this.setState({img: ev.target.value})
  }

  resetStateValues = () => {
    this.setState({name: '', price: 0, img: ''})
  }

  addProduct = () => {
    axios.post('/api/product', {name: this.state.name, price: this.state.price, img: this.state.img}).then(res => {
      this.props.getInventory()
      this.resetStateValues()
    })
  }

  render() {
    return (
      <div>
          <input onChange={(ev) => this.handleNameInput(ev)} value={this.state.name} placeholder={'Name'} />
          <input onChange={(ev) => this.handlePriceInput(ev)} value={this.state.price} type='number' placeholder={'Price'} />
          <input onChange={(ev) => this.handleImgInput(ev)} value={this.state.img} placeholder={'Image URL'} />
        <div>
          <button onClick={this.addProduct} >Add to Inventory</button>
          <button onClick={this.resetStateValues} >Cancel</button>
        </div>
      </div>
    )
  }
}