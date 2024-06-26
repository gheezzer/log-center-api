const express = require('express')
const router = express.Router()
const usersRoute = require('./users')
const logsRoute = require('./logs')
const { authorize } = require('../middlewares/auth')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../../swagger.json')

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Access the documentation',
    docs: "https://api-central-de-logs.herokuapp.com/api-docs"
  })
})

router.use('/api-docs', swaggerUi.serve)
router.get('/api-docs', swaggerUi.setup(swaggerDocument))
router.use('/user', usersRoute)
router.use('/logs', authorize, logsRoute)

module.exports = router
