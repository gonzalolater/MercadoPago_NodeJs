import MercadoPago from "mercadopago"
import {HOST, MERCADO_API_KEY} from '../config'

export const createOrder = async (req, res) => { 
    
    MercadoPago.configure({
        access_token: MERCADO_API_KEY,
    });

    const result = await MercadoPago.preferences.create ({
        items: [
            {
                title: "SLATs",
                unit_price: 10000,
                currency_id: "ARG",
                quantity: 1,
            }
        ],
        back_urls: {
            success: `${HOST}/success`,
            failure: `${HOST}/failure` ,
            pending: `${HOST}/pending`
        },
        notification_url: "`http://localhost:3000/webhook",
        

    });

    console.log(result)

    res.send('creating order');
};

export const receiveWebhook = async (req, res) => {
    const payment = req.query;
    
    try {
        if (payment.type === "payment") {
            const data = await mercadoPago.payment.findById(payment["data.id"]);
            console.log(data);
        }
            res.sendStatus(204)
    } catch (error) {
        console.log(error);
        return res.sendStatus(500).json({ error: error.message });
    }
};