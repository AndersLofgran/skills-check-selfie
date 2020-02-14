import React from 'react'
import axios from 'axios'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: 0,
      imgurl: ''
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
    this.setState({imgurl: ev.target.value})
  }

  resetStateValues = () => {
    this.setState({name: '', price: 0, imgurl: ''})
  }

  addProduct = async () => {
    await axios.post('/api/product', {name: this.state.name, price: this.state.price, imgurl: this.state.imgurl}).then(res => {
      this.props.getInventory()
      this.resetStateValues()
    })
  }

  render() {
    return (
      <div>
        <input onChange={(ev) => this.handleNameInput(ev)} placeholder={'Name'} />
        <input onChange={(ev) => this.handlePriceInput(ev)} type='number' placeholder={'Price'} />
        <input onChange={(ev) => this.handleImgInput(ev)} placeholder={'Image URL'} />
        <button onClick={this.addProduct} >Add to Inventory</button>
        <button onClick={this.resetStateValues} >Cancel</button>
      </div>
    )
  }
}