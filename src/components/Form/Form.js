import React from 'react'
import axios from 'axios'
import './Form.css'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: 0,
      img: '',
      isEditing: false,
      selectedProduct: null
    }
  }

  handleNameInput = (ev) => {
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

  updateProduct = (id) => {
    axios.put(`/api/product${id}`, {name: this.state.name, price: this.state.price, img: this.state.img}).then(res => {
      this.componentDidUpdate()
    })
  }

  componentDidUpdate = (prevProps) => {
    return this.props.selectedProduct !== prevProps.selectedProduct
      ? this.setState({selectedProduct: this.props.selectedProduct})
      : null
  }

  render() {
    return (
      <div className='Form'>
        <img src={this.state.img} />

        <div className='FormInput'>
          <h3>Product: </h3>
          <input onChange={(ev) => this.handleNameInput(ev)} value={this.state.name} placeholder={'Name'} />
        </div>
        <div className='FormInput'>
          <h3>Price: </h3>
          <input onChange={(ev) => this.handlePriceInput(ev)} value={this.state.price} type='number' />
        </div>
        <div className='FormInput'>
          <h3>Image: </h3>
          <input onChange={(ev) => this.handleImgInput(ev)} value={this.state.img} placeholder={'Image URL'} />
        </div>
        <div className='FormButton'>
          <button onClick={this.resetStateValues} >Cancel</button>
          {this.state.selectedProduct
            ? <button onClick={this.updateProduct} > Save Changes</button>
            : <button onClick={this.addProduct} >Add to Inventory</button>}
        </div>
      </div>
    )
  }
}