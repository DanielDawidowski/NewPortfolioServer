exports.contactFormValidator  = (req, res, next) => {
    req.check("name")
        .not()
        .isEmpty()
        .withMessage('To pole jest wymagane'),
    req.check("email")
        .isEmail()
        .withMessage('To pole jest wymagane'),
    req.check("message")
        .not()
        .isEmpty()
        .withMessage('To pole jest wymagane')

    const errors = req.validationErrors()
    if(errors) {
        const firstError = errors.map(error => error.msg)[0]; 
        return res.status(400).json({ error: firstError })
    }
    next()
}