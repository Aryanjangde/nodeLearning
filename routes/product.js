const productRoutes = {
    path:"/products",
    routes : [
        {
            method:"get",
            path:"/products",
            handler: (req, res)=>{res.send("users")}
        },
        {
            method:"get",
            path:"/products/:id",
            handler: (req, res)=>{res.send("users")}
        }
    ]
}

module.exports = {productRoutes}