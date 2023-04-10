
const axios = require('axios')
const { v4: uuidv4 } = require('uuid');


const token = '95333cbf0a99db189e12023f040f20c0'


class PostController {
    async create (req, res, next){
        const {amount} = req.body
        console.log(amount)
        const orderId  = uuidv4()

        const result = await axios({
            method: 'post',
            withCredentials: true,
            headers: {
                'Sec-Fetch-Mode': "navigate",
            },

            url: 'https://lk.rukassa.pro/api/v1/create',

            data: new URLSearchParams({

                order_id: orderId,
                amount: amount,
                token,
                shop_id: 446

            })


        })
        const url = result.data.url

        return res.json({url})




    }


}

module.exports = new PostController()
