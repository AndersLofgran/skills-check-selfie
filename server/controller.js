module.exports = {

  getInventory: (req, res) => {
    const dbObj = req.app.get('db')
    
    dbObj.get_inventory().then(inventory => {
      res.status(200).send(inventory)
    }).catch(err => res.status(500).send(err))
  },

  addProduct: (req, res) => {
    let {name, price, imgurl} = req.body
    const dbObj = req.app.get('db')

    dbObj.add_product([name, price, imgurl]).then(product => {
      res.status(200).send(product)
    }).catch(err => res.status(500).send(err))
  }
  
}