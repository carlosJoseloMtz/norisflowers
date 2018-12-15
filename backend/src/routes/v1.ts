import express, { Router } from 'express'
import {listProducts} from '../controllers/admin/AdminProductController'

const setup = (): Router => {
    const router: express.Router = Router()

    router.get('/sample', (req, res) => {
        res.json({
            hello: 'yay'
        })
    })

    router.get('/api/v1/admin/products/:offset', listProducts)

    return router
}

export { setup }