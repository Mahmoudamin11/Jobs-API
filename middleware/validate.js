import {BadRequestError} from "../errors/index.js"

const validation = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body)

  if (!result.success) {
    throw new BadRequestError(result.error.errors[0].message)
  }

  req.body = result.data
  next()
}

export default validation