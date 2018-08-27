const controllerRoutes = require('../controllers/routing.js');
const controllerAuth = require('../controllers/auth.js');
module.exports = (app) =>{
//Returns all products
app.get('/products', /*controllerAuth.verifyToken,*/ controllerRoutes.getProducts);

//returns 1 product
app.get('/product', /*controllerAuth.verifyToken,*/  controllerRoutes.getProduct);

//Creates a product
app.post('/product/create', /*controllerAuth.verifyToken,*/  controllerRoutes.createProduct);

//Deletes a product via 'name'
app.post('/product/delete', /*controllerAuth.verifyToken,*/  controllerRoutes.deleteProduct);

//Updates a product via 'name'
app.post('/product/update',  /*controllerAuth.verifyToken,*/ controllerRoutes.updateProduct);

//////////////////////////////////////////////////////////////////
//app.post('/user/create', controllerAuth.createUser);

//app.post('/user/login', controllerAuth.login);
}
