import {Router} from 'express'
import {createOrder} from '../controllers/payment.controller.js'

const router = Router()

router.post('/create-order', createOrder)

router.get('/success', (req, res) => res.send('success'))

router.get('/failure', (req, res) => res.send('failure'))

router.get('/pending', (req, res) => res.send('pending'))

router.post('/webhook',)

export default router