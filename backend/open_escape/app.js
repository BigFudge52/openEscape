const express = require('express')
const app = express()
const port = 3000

var routes = require('./routes/routes');
routes.assignRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
