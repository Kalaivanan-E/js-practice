
let pname = 'Marker Pen'

class Product{
    constructor(){
        console.log('Product class constructors')
    }
    get_product_details(){
        console.log("getting details");
        
    }
}
// default export
// module.exports = pname;

// name export 
module.exports = {pname,Product}