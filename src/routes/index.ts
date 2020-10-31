import express, {
  Response,
} from 'express'

const router = express.Router()

/* GET home page. */
router.get('/', (_req, res: Response) => {
  res.render('index', { title: 'Express' })
  return res.status
})

// export default router
// module.exports = router;

export default router
