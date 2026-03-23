const { BadRequestError } = require("../errors")

const validatation = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body)

  if (!result.success) {
    throw new BadRequestError(result.error.errors[0].message)
  }

  req.body = result.data
  next()
}

module.exports = validatation