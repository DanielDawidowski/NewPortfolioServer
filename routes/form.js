const express = require('express')
const router = express.Router()

const { contactForm } = require('../controllers/form')
const { contactFormValidator } = require('../validator/form')


router.post("/contact", contactForm);


module.exports = router;