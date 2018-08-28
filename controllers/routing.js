module.exports = {

  createProduct: (req, res) => {
    db.collection('products').save(req.body, (err, result) => {
      if (err) return console.log(err);
        console.log('Saved item to DB')
        res.json(result);
        })
    },

  getProduct: (req, res) => {
    db.collection('products').find({'name':req.query.name}).toArray(  function(err, result){
        console.log(result);
        res.json(result);
    })

    },

  getProducts: (req, res) => {
    db.collection('products').find().toArray(function(err, results){
      console.log(results);
      res.json(results);
    })

  },

  updateProduct: (req,res) => {
    db.collection('products').updateOne({'name':req.body.name}, {
    $set: {
      type: req.body.type,
      area: req.body.area,
      stock: req.body.stock,
      mpb: req.body.mpb
    }
  },
   (err, result) => {
      if (err) return console.log(err);
      console.log('deleted from database', result);
      res.json(result);
    })
  },



  deleteProduct: (req,res) => {
    //Change ID here too
    db.collection('products').deleteOne({'name':req.body.name}, (err, result) => {
      if (err) return console.log(err);
      console.log('Deleted item from DB', result);
      res.json(result);
    })
  }
}
