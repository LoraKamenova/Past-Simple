const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const localSignupStrategy = require('../passport/local-signup')
const localLoginStrategy = require('../passport/local-login')
const authRoutes = require('../routes/auth')
const memoryRoutes = require('../routes/memories')
const sloganRoutes = require('../routes/slogans')
const comparisonRoutes = require('../routes/comparisons')
const postRoutes = require('../routes/posts')
const pictureRoutes = require('../routes/pictures')
const statsRoutes = require('../routes/stats')

module.exports = app => {
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json())
  app.use(passport.initialize())
  app.use(cors({
    origin: 'http://localhost:4200'
  }))

  passport.use('local-signup', localSignupStrategy)
  passport.use('local-login', localLoginStrategy)

  // routes
  app.use('/auth', authRoutes)
  app.use('/memory', memoryRoutes)
  app.use('/slogan', sloganRoutes)
  app.use('/comparison', comparisonRoutes)
  app.use('/post', postRoutes)
  app.use('/picture', pictureRoutes)
  app.use('/stats', statsRoutes)
}
