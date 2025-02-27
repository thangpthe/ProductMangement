const Product = require("../../models/product.model");
module.exports.index = async(req,res) => {
    const products = await Product.find({
        status:"active"
    });
    console.log(products);

    const newProducts = products.map(item => 
    {
        item.newPrice = (item.price*(100-item.discountPercentage)/100).toFixed();
        return item;
    })
    res.render("client/pages/products/index",{
        pageTitle: "Danh sách sản phẩm",
        products: newProducts
    });
}