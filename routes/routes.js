const controllerRoutes = require("../controllers/routing.js");

module.exports = (app) => {
    //Returns all products
    app.get("/products", controllerRoutes.getProducts);

    //returns 1 product
    app.get("/product", controllerRoutes.getProduct);

    //Creates a product
    app.post("/product/create", controllerRoutes.createProduct);

    //Deletes a product via 'name'
    app.post("/product/delete", controllerRoutes.deleteProduct);

    //Updates a product via 'name'
    app.post("/product/update", controllerRoutes.updateProduct);
};
