Back-end for warehouse management system. Basic CRUD operations.

Endpoints:

'/products'
Will return all the products in the DB

'/product?name=example'
Will return the product named 'example'. 

'/product/create?name=example&type=test&area=A&stock=11&mppb=10'
Will create a product named example of type test, of area A, stock 11 and mppb 10.

'/product/delete?name=example'
Will delete the product named example.

'/product/update?name=example&type=test&area=A&stock=11&mppb=10'
Will update the product name example to have type test, area A, stock 11 and mppb 10.

