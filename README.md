Back-end for warehouse management system. Basic CRUD operations.

Endpoints:

'/products' <br/>
Will return all the products in the DB

'/product?name=example' <br/>
Will return the product named 'example'. 

'/product/create?name=example&type=test&area=A&stock=11&mppb=10' <br/>
Will create a product named example of type test, of area A, stock 11 and mppb 10.

'/product/delete?name=example' <br/>
Will delete the product named example.

'/product/update?name=example&type=test&area=A&stock=11&mppb=10' <br/>
Will update the product name example to have type test, area A, stock 11 and mppb 10.

