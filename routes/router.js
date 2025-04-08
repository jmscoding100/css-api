const express = require('express')
const axios = require('axios')
const router = express.Router()

router.use(express.static('public'))

router.use('/colors', require('./api/cssRoutes'))




router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'CSS Color Website',
        name: 'CSS Colors'
    })
})


module.exports = router