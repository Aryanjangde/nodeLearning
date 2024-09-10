class UserController {
    constructor(){
        this.routePrefix = "/users",
        this.routes = []
        this.createRoute("get", "/", this.getAllUsers)
        this.createRoute("get", "/:id", this.getUserById)
    }


    createRoute(method, childPath, controller) {
        this.routes.push({
            method,
            childPath,
            controller
        })
    }

    getAllUsers(req, res){
        res.send("users")
    }

    getUserById(req, res){
        res.send("user")
    }

}