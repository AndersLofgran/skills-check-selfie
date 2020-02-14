module.exports = {

  getInventory: (req, res) => {
    const dbObj = req.app.get('db')
    
    dbObj.get_inventory().then(inventory => {
      res.status(200).send(inventory)
    }).catch(err => res.status(500).send(err))
  },

  addProduct: (req, res) => {
    let {name, price, img} = req.body
    const dbObj = req.app.get('db')

    dbObj.add_product([name, price, img]).then(product => {
      res.status(200).send(product)
    }).catch(err => res.status(500).send(err))
  },

  removeProduct: (req, res) => {
    let {id} = req.params
    const dbObj = req.app.get('db')

    dbObj.remove_product([id]).then(() => {
      res.sendStatus(200)
    }).catch(err => res.status(500).send(err))
  },


  
}