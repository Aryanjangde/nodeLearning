const express = require("express")
const app = express()
app.use(express.json())

const routes = require("./routes");
console.log(routes)

// ^ these kind of function are called factory generators
// *
routes.forEach((routeComponent)=>{
    const {path: parentPath, routes} = routeComponent
    routes.forEach((route)=>{
        const {method, path: childPath, handler} = route;
        app[method](parentPath+childPath, handler);
    })

})
// *


app.listen(3000);