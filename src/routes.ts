import express from 'express'
const routes = express.Router();

routes.post('/users', (request,response) => {
    const user = {
        name: "Eduardo Silva",
        email: "eduardo@exemplo.com"
    }
    return response.json(user)
})

export default routes;