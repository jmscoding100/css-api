const express = require('express')
const router = express.Router()
const axios = require('axios')


let count

axios.get('https://api.sampleapis.com/csscolornames/colors')
    .then(res => count = res.data.length)



//localhost:3000/css
router.get('/', (req, res)=> {
    const url = `https://api.sampleapis.com/csscolornames/colors`

    axios.get(url).then(resp => {
        res.render('pages/colors', {
            title: 'So many COLORS',
            name: 'So many COLORS',
            data: resp.data
        })
    })
})

module.exports = router