import {
  Router,
  NextFunction,
  Request,
  Response,
} from 'express'

const router = Router()

/* GET users listing. */
router.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.send('respond with a resource')
})

export default router
